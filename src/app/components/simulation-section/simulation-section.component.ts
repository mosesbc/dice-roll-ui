import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from 'rxjs';
import { RollDiceService } from '../../services/roll-dice.service';

@Component({
  selector: 'app-simulation-section',
  templateUrl: './simulation-section.component.html',
  styleUrls: ['./simulation-section.component.scss']
})

export class SimulationSectionComponent implements OnInit {

  diceRollRequestList = [];
  diceRollRequestListObs: Observable <any>;
  diceRollRequestListObsSubs: Subscription;

  constructor(
    private diceRollService: RollDiceService
  ) {

  }

  ngOnInit() {
    this.diceRollRequestListObs = this.diceRollService.diceRollRequestList;
    this.diceRollRequestListObsSubs = this.subscriteToDicerollListObs();

  }
  ngOndestroy() {
    if(this.diceRollRequestListObsSubs) {this.diceRollRequestListObsSubs.unsubscribe()}
  }
  subscriteToDicerollListObs(): Subscription {
    return this.diceRollRequestListObs.subscribe(data => {
      if(Object.keys(data).length > 0 ) {
        this.diceRollRequestList.push(data);
      }

    }, error => {
      this.diceRollRequestList.push({
        error: error.error.error
      });
      console.log('Log the error here: ', error.error.error);
    });

  }
}
