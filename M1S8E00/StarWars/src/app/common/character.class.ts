export class CharacterClass {
  id?: number;
  name: string;
  hability: string;
  planet: string;
  weapons: string;
  picture: string;

  constructor(id: number, name: string, hability: string, planet: string, weapons: string, picture: string) {
    this.id = id;
    this.name = name;
    this.hability = hability;
    this.planet = planet;
    this.weapons = weapons;
    this.picture = picture;
  }
}
