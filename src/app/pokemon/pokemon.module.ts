import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonModalInfoComponent } from './pokemon-modal-info/pokemon-modal-info.component';

@NgModule({
  declarations: [ListPokemonComponent, PokemonCardComponent, PokemonModalInfoComponent],
  imports: [CommonModule, PokemonRoutingModule],
  exports: [ListPokemonComponent, PokemonCardComponent],
})
export class PokemonModule {}
