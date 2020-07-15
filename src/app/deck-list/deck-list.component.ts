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

  getDeckNumber(deck) {
    return this.pokeApi.getDeckNumber(deck);
  }

  ngOnDestroy(): void {
    this.subsDecksLoaded.unsubscribe();
  }

}
