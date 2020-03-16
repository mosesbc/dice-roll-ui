import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { RollDiceBackend } from '../backends/roll-dice.backend';

/**
 * @description
 * @class
 */
@Injectable()
export class RollDiceService {

  diceRollRequestList: BehaviorSubject <any> ;
  combinationList: BehaviorSubject <any> ;

  constructor(
    private http: HttpClient,
    private rollDiceBackend: RollDiceBackend
  ) {
    this.diceRollRequestList = new BehaviorSubject (Object.assign({}));
    this.combinationList  = new BehaviorSubject (Object.assign({}));
  }

  simulate(simulation) {
   this.rollDiceBackend.roll(simulation.noOfDice, simulation.noOfSide, simulation.noOfRolls).subscribe(data =>{
      this.diceRollRequestList.next(Object.assign({}, data));
      this.getCombinations();
    });
  }

  getCombinations() {
    this.rollDiceBackend.getCombinations().subscribe(data => {
      this.combinationList.next(Object.assign({}, data));
    });
  }

}
