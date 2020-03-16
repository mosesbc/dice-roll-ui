import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { RollDiceComponent } from './components/roll-dice-section/roll-dice.component';
import { HttpClientModule } from '@angular/common/http';
import { RollDiceService } from './services/roll-dice.service';
import { RollDiceBackend } from './backends/roll-dice.backend';
import { SimulationSectionComponent } from './components/simulation-section/simulation-section.component';
import { CombinationsSectionComponent } from './components/combinations-section/combinations-section.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RollDiceComponent,
    SimulationSectionComponent,
    CombinationsSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent },
    ])
  ],
  providers: [
    RollDiceService,
    RollDiceBackend
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
