import { Injectable } from '@angular/core';
import { v4 } from 'uuid'
import { Character } from '../interfaces/character.interface';

console.log(v4());

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [
    {
      id: v4(),
      name: 'Goku',
      power: 15000
    },
    {
      id: v4(),
      name: 'Vegeta',
      power: 7500
    },
    {
      id: v4(),
      name: 'Krilin',
      power: 2000
    }
  ];

  addCharacter(character: Character): void {

    const newCharacter:Character  = {id:v4(),...character};

    console.log('MainPageComponent', newCharacter);
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index:number):void{
  //   console.log('MainPageComponent', index);
  //   this.characters.splice(index,1);
  // }
 deleteCharacterById(id:string):void{
   console.log('MainPageComponent', id);
   this.characters = this.characters.filter(character => character.id !== id);
 }

}
