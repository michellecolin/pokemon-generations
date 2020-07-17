import { Component, OnInit, HostListener } from '@angular/core';
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
  public innerWidth;

  constructor(
    private pokeApi: PokeService,
    private route: ActivatedRoute
  ) {
    this.innerWidth = window.innerWidth;
  }

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

  getDeckNumber(deck) {
    return this.pokeApi.getDeckNumber(deck);
  }

  getImageUrl(specie) {
    return this.pokeApi.getImageUrl(specie);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }
}
