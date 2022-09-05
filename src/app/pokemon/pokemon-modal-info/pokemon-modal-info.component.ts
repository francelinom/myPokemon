import { Component, Input, OnInit } from '@angular/core';
import { ListPokemonService } from 'src/app/shared/services/list-pokemon.service';

@Component({
  selector: 'app-pokemon-modal-info',
  templateUrl: './pokemon-modal-info.component.html',
  styleUrls: ['./pokemon-modal-info.component.css'],
})
export class PokemonModalInfoComponent implements OnInit {
  @Input() pokemonInfo: any = {};

  constructor(private service: ListPokemonService) {}

  ngOnInit(): void {}

  quem() {
    console.log(this.pokemonInfo);
  }
}
