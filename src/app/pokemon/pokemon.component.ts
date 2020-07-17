import { Component, OnInit, HostListener } from '@angular/core';
import { PokeService } from '../services/pokeapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  public pokemon;
  public loading;
  public evolutionChain = [];
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
        this.pokeApi.getPokemon(params.id).subscribe(response => {
          this.pokemon = response;
          console.log(response);
          this.evolutionChain = [];

          this.pokeApi.getEvolutionChain(this.pokemon.evolution_chain.url).subscribe(response => {
            this.treatChain(response.chain);
          });
        });
      } else {
        //TODO
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
