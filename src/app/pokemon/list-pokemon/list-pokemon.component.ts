import { Component, OnInit } from '@angular/core';
import { ListPokemonService } from 'src/app/shared/services/list-pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css'],
})
export class ListPokemonComponent implements OnInit {
  pokemons: any = ['Bulbasaur', 'Ivysaur', 'Charizard', 'Charmander'];
  listaDeNomesDoPokemon: string[] = [];
  limit: number = 10;

  constructor(private service: ListPokemonService) {}
  ngOnInit(): void {
    /**
     * this.listarPokemon();
    this.exibirImagemPokemon();
     */
  }
  /**
  listarPokemon(): void {
    this.service.listPokemon(this.limit).subscribe((listaDePokemon) => {
      this.pokemons = listaDePokemon.results;

      this.pokemons.forEach((pokemon: any) => {
        this.listaDeNomesDoPokemon.push(pokemon.name);
      });
      this.listaDeNomesDoPokemon.sort();
    });
  }

  exibirImagemPokemon(): void {
    this.service.listInfoPokemon('pikachu').subscribe((info: any) => {
      const imagemPokemon = [];
      imagemPokemon.push(info.sprites);

      imagemPokemon.forEach((img: any) => console.log(img.front_default));
    });
  }

  */
}
