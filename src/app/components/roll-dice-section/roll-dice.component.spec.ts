import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RollDiceComponent } from './roll-dice.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('RollDiceComponent', () => {

  let fixture: ComponentFixture<RollDiceComponent>;
  let component: RollDiceComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [RollDiceComponent]
    });

    fixture = TestBed.createComponent(RollDiceComponent);
    component = fixture.componentInstance;

  });

  it('should be able to create component instance', () => {
    expect(component).toBeDefined();
  });
  
});
