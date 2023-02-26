import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';
import { Character } from '../common/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${API_PATH}/characters`);
  }

  getCharacter(): Observable<Character> {
    return this.http.get<Character>(`${API_PATH}/character`);
  }

  createCharacter(character: Character) {
    this.http.post<Character>(`${API_PATH}/character`, JSON.stringify(character));
  }

  deleteCharacter(id: number) {
    this.http.delete<Character>(`${API_PATH}/character/${id}`);
  }

  updateCharacter(id: number, character: Character) {
    this.http.put<Character>(`${API_PATH}/character/${id}`, JSON.stringify(character));
  }
}
