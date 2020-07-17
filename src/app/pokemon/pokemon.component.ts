import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/pokeapi.service';
import { ActivatedRoute } from '@angular/router';
import { Chain } from '@angular/compiler';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  public pokemon;
  public loading;

  constructor(
    private pokeApi: PokeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loading = true;
      if (params.id) {
        this.pokeApi.getPokemon(params.id).subscribe(response => {
          this.pokemon = response;
          console.log(response);

          this.pokeApi.getEvolutionChain(this.pokemon.evolution_chain.url).subscribe(chain => {
            console.log(chain);
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

}
