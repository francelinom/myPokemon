import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListPokemonService {
  private readonly apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  listPokemon(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/ability/?limit=200`);
  }

  listInfoPokemon(name: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/pokemon/${name}`);
  }
}
