import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [ListPokemonComponent, PokemonCardComponent],
  imports: [CommonModule, PokemonRoutingModule],
  exports: [ListPokemonComponent, PokemonCardComponent],
})
export class PokemonModule {}
