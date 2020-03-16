import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SimulationSectionComponent } from "./simulation-section.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SimulationSectionComponent", () => {

  let fixture: ComponentFixture<SimulationSectionComponent>;
  let component: SimulationSectionComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SimulationSectionComponent]
    });

    fixture = TestBed.createComponent(SimulationSectionComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
