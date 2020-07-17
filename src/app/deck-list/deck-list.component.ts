import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokeService } from '../services/pokeapi.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss']
})
export class DeckListComponent implements OnInit, OnDestroy {
  public loading;
  public decks;

  public subsDecksLoaded;

  constructor(
    private pokeApi: PokeService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.subsDecksLoaded = this.pokeApi.decksLoaded.subscribe(response => {
      this.decks = response;
      this.spinner.hide();
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
