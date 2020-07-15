import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  public decks;
  public decksLoaded = new Subject<any>();
  public deckLoaded = new Subject<any>();

  constructor(
    private httpClient: HttpClient,
  ) {}


  /**
   * Returns the pokemon decks generations
   */
  getDecksGenerations() {
    if (this.decks) {
      // avoid unecessary calls, since the probability of the decks changing on runtime is very low
      this.decksLoaded.next(this.decks);
    } else {
      this.httpClient.get<any>(`${environment.endpoint}generation`).subscribe(response => {
        /**
         * Get full info of each Deck
         */
        Promise.all(this.getDecksRequests(response.results)).then((responses) => {
          this.decks = responses;
          this.decksLoaded.next(this.decks);
        }, (httpError) => {
        });
      });
    }
  }

  /**
   * Prepare deck list promises to get full information
   * @param decks
   */
  getDecksRequests(decks) {
    const promises = [];

    decks.forEach(deck => {
      promises.push(this.getDeckRequest(deck.name).toPromise());
    });

    return promises;
  }

  /**
   * Get deck full information
   * @param name deck name identifier
   */
  getDeckRequest(name) {
    return this.httpClient.get<any>(`${environment.endpoint}generation/${name}`);
  }

  getDeck(name) {
    console.log(name);
    if (this.decks) {
      this.deckLoaded.next(this.decks.find(deck => deck.name === name));
    } else {
     this.getDeckRequest(name).subscribe(response => {
      this.deckLoaded.next(response);
     });
    }
  }

  getDeckName(deck) {
    return deck.names[Object.keys(deck.names).find(name => {
      return deck.names[name].language.name === 'en';
    })].name;
  }

  getDeckNumber(deck) {
    return deck.names[Object.keys(deck.names).find(name => {
      return deck.names[name].language.name === 'en';
    })].name.split(' ')[1];
  }
}
