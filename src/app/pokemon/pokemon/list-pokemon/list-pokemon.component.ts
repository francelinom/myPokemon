import { Component, OnInit } from '@angular/core';
import { ListPokemonService } from 'src/app/shared/services/list-pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css'],
})
export class ListPokemonComponent implements OnInit {
  listaDePokemon: any = [];
  listaDeNomesDoPokemon: string[] = [];

  constructor(private service: ListPokemonService) {}
  ngOnInit(): void {
    this.service.listPokemon().subscribe((listaDePokemon) => {
      this.listaDePokemon = listaDePokemon.results;

      this.listaDePokemon.forEach((pokemon: any) => {
        this.listaDeNomesDoPokemon.push(pokemon.name);
      });
      this.listaDeNomesDoPokemon.sort();
    });

    this.service.listInfoPokemon('pikachu').subscribe((info) => {
      console.log('info', info);
    });
  }
}
