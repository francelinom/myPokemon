import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonModalInfoComponent } from './pokemon-modal-info.component';

describe('PokemonModalInfoComponent', () => {
  let component: PokemonModalInfoComponent;
  let fixture: ComponentFixture<PokemonModalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonModalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonModalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
