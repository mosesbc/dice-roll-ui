import { NO_ERRORS_SCHEMA } from "@angular/core";
import { CombinationsSectionComponent } from "./combinations-section.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("CombinationsSectionComponent", () => {

  let fixture: ComponentFixture<CombinationsSectionComponent>;
  let component: CombinationsSectionComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [CombinationsSectionComponent]
    });

    fixture = TestBed.createComponent(CombinationsSectionComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
