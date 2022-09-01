import { Component, OnInit } from '@angular/core';
import { ListPokemonService } from './shared/services/list-pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'myPokemon';
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
