import { Component, Input, OnInit } from '@angular/core';
import { ListPokemonService } from 'src/app/shared/services/list-pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon!: string;
  @Input() numero!: number;
  pokemonInfo: any = {};
  nome: string = '';

  constructor(private service: ListPokemonService) {}

  ngOnInit(): void {}

  pegarImagemPokemon(): string {
    const numeroFormatado = this.leadingZero(this.numero);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }

  pegarPekemon(pokemon: string): any {
    console.log(pokemon);
    this.pokemonInfo = {};
    this.service.listInfoPokemon(pokemon).subscribe((info: any) => {
      console.log(info);
      this.pokemonInfo = info;
    });
  }
}
