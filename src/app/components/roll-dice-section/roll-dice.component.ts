import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { format } from 'url';
import { RollDiceService } from '../../services/roll-dice.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-roll-dice',
  templateUrl: './roll-dice.component.html',
  styleUrls: ['./roll-dice.component.scss']
})

export class RollDiceComponent implements OnInit {

  noOfDiceOptions;
  noOfSideOptions;
  rollForm;

  defaultNoOfDice = 1;
  defaultnoOfSide = 4;
  defaultnoOfRolls = 1;

  constructor(
    private formBuilder: FormBuilder,
    private diceRollService: RollDiceService
  ) {
    const array = Array.from(Array(101).keys());
    array.shift();
    this.noOfDiceOptions = array;
    this.noOfSideOptions = [4, 6, 8, 10, 12, 20, 100];
    this.rollForm = this.formBuilder.group({
      noOfDice: 1,
      noOfSide: 4,
      noOfRolls: 1
    });
  }

  ngOnInit() {
  }

  onSubmit(formData) {
    this.diceRollService.simulate(formData);
  }
}
