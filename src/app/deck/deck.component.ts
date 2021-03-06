import { Component, OnInit, HostListener } from '@angular/core';
import { PokeService } from '../services/pokeapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  public loading;
  public deck;
  public innerWidth;
  public perPage = 8;
  public currentPage;

  constructor(
    private pokeApi: PokeService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loading = true;
      if (params.id) {
        this.spinner.show();
        const subsc = this.pokeApi.deckLoaded.subscribe(deck => {
          this.deck = deck;
          this.getDeckName();
          this.spinner.hide();
          subsc.unsubscribe();
        });

        this.pokeApi.getDeck(params.id);
      } else {
        this.router.navigateByUrl('/deck-list');
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

  pageChanged($event) {
    this.currentPage = $event;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }
}
