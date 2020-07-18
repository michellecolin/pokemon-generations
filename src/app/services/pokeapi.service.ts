import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  public decks;
  public decksLoaded = new Subject<any>();
  public deckLoaded = new Subject<any>();

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private toastr: ToastrService
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

  /**
   * Get pokemon specie information
   * @param name pokemon specie name
   */
  getPokemon(name) {
    return this.httpClient.get<any>(`${environment.endpoint}pokemon-species/${name}`);
  }

  getDeck(name) {
    if (this.decks) {
      this.deckLoaded.next(this.decks.find(deck => deck.name === name));
    } else {
     this.getDeckRequest(name).subscribe(response => {
      this.deckLoaded.next(response);
     }, (httpError) => {
      this.toastr.error('An error occurred, you were redirected!');
      this.router.navigateByUrl('/deck-list');
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

  /**
   * Get pokemon specie image form external url
   */
  getImageUrl(specie) {
    if (!specie.id) {
      const parts = specie.url.split('/');
      specie.id = parts[parts.length - 2];
    }
    specie.id = specie.id.toString();

    if (specie.id.length === 2) {
      specie.id = '0' + specie.id;
    } else if (specie.id.length === 1) {
      specie.id = '00' + specie.id;
    }

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${specie.id}.png`;
  }

  /**
   * Gets pokemon specie evolution chain
   * @param url api url to get evolution chain
   */
  getEvolutionChain(url) {
    return this.httpClient.get<any>(url);
  }
}
