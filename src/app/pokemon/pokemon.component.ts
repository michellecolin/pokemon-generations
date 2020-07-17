import { Component, OnInit, HostListener } from '@angular/core';
import { PokeService } from '../services/pokeapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  public pokemon;
  public evolutionChain = [];
  public innerWidth;

  constructor(
    private pokeApi: PokeService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private router: Router,
    private toastr: ToastrService
  ) { 
    this.innerWidth = window.innerWidth;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.spinner.show();
        this.pokeApi.getPokemon(params.id).subscribe(response => {
          this.pokemon = response;
          this.spinner.hide();
          this.evolutionChain = [];

          this.pokeApi.getEvolutionChain(this.pokemon.evolution_chain.url).subscribe(response => {
            this.treatChain(response.chain);
          });
        }, (httpError) => {
          this.toastr.error('An error occurred, you were redirected!');
          this.router.navigateByUrl('/deck-list');
        });
      } else {
        this.router.navigateByUrl('/deck-list');
      }
    });
  }

  getImageUrl(specie) {
    return this.pokeApi.getImageUrl(specie);
  }

  /**
   * Get progress bar width based on attribute value
   * 0 - 255
   */
  getWidth(value) {
    return (value * 100) / 255;
  }

  /**
   * Recursive function that assembles all pokemon evolutions especies in one array
   * @param Pokemon specie chain
   */
  treatChain(chain) {
    this.evolutionChain.push(chain.species);

    chain.evolves_to.forEach(evolution => {
      this.evolutionChain.push(evolution.species);

      if (evolution.evolves_to.length > 0) {
        evolution.evolves_to.forEach(ev => {
          this.treatChain(ev);
        });
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }
}
