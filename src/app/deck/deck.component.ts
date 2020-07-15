import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/pokeapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  public loading;
  public deck;

  constructor(
    private pokeApi: PokeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loading = true;
      if (params.id) {
        const subsc = this.pokeApi.deckLoaded.subscribe(deck => {
          this.deck = deck;
          this.getDeckName();
          console.log(this.deck);
          subsc.unsubscribe();
        });

        this.pokeApi.getDeck(params.id);
      } else {
        //TODO
      }
    });
  }

  getDeckName() {
    this.deck.translate_name = this.pokeApi.getDeckName(this.deck);
  }
}
