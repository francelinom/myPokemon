import { Component, OnInit } from '@angular/core';
import { ListPokemonService } from 'src/app/shared/services/list-pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css'],
})
export class ListPokemonComponent implements OnInit {
  pokemons: any = [];
  limit: number = 10;

  constructor(private service: ListPokemonService) {}
  ngOnInit(): void {
    this.listarPokemon();
  }

  listarPokemon(): void {
    this.service.listPokemon(this.limit).subscribe((listaDePokemon) => {
      this.pokemons = listaDePokemon.results;
    });
  }
}
