import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

/**
 * @description
 * @class
 */
@Injectable()
export class RollDiceService {

  constructor(
    private http: HttpClient
  ) {

  }

  roll(noOfDice, noOfSide, noOfRolls) {
    console.log(`rolling dice with parameters noOfDice:${noOfDice} noOfSide:${noOfSide} noOfRolls:${noOfRolls}`)
    return this.http.get(`/dicerollapi/roll?noOfDice=${noOfDice}&noOfSide=${noOfSide}&noOfRolls=${noOfRolls}`);
  }

}
