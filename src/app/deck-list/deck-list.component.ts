import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokeService } from '../services/pokeapi.service';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss']
})
export class DeckListComponent implements OnInit, OnDestroy {
  public loading;
  public decks;

  public subsDecksLoaded;

  constructor(private pokeApi: PokeService) { }

  ngOnInit() {
    this.loading = true;

    this.subsDecksLoaded = this.pokeApi.decksLoaded.subscribe(response => {
      console.log(response);
      this.decks = response;
      this.loading = false;
    });

    this.pokeApi.getDecksGenerations();
  }

  getDeckName(deck) {
    return deck.names[Object.keys(deck.names).find(name => {
      return deck.names[name].language.name === 'en';
    })].name;
  }

  ngOnDestroy(): void {
    this.subsDecksLoaded.unsubscribe();
  }

}
