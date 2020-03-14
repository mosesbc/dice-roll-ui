import { RollDiceService } from "./roll-dice.service";
import { TestBed } from "@angular/core/testing";

describe("RollDiceService", () => {

  let service: RollDiceService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RollDiceService
      ]
    });
    service = TestBed.get(RollDiceService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
