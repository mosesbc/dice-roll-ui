import { Component, OnInit } from "@angular/core";
import { RollDiceService } from '../../services/roll-dice.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-combinations-section',
  templateUrl: './combinations-section.component.html',
  styleUrls: ['./combinations-section.component.scss']
})

export class CombinationsSectionComponent implements OnInit {
   combinationList = [];
   combinationListObs: Observable <any>;
   combinationListObsSubs: Subscription;

  constructor(
    private diceRollService: RollDiceService
  ) {
  }

  ngOnInit() {
    this.combinationListObs = this.diceRollService.combinationList;
    this.combinationListObsSubs = this.subscritecombinationListObsSubs();
  }
  subscritecombinationListObsSubs(): Subscription {
    return this.combinationListObs.subscribe(data => {
      this.combinationList = Object.assign([], data);
    }, error => {
      this.combinationList.push({
        error: error.error.error
      });
      console.log('Log the error here: ', error.error.error);
    });
  }
}
