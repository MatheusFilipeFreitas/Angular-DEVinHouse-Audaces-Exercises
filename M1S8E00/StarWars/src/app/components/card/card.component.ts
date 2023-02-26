import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from './../../common/character';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  characters: Character[] = [];

  ngOnInit(): void {
    this.getCharacters();
  }

  constructor(private charaterService: CharacterService) {

  }

  getCharacters() {
    this.charaterService.getCharacters().subscribe((response) => {
      this.characters = response;
    });
  }

}
