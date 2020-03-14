import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { RollDiceComponent } from './components/roll-dice-section/roll-dice.component';
import { HttpClientModule } from '@angular/common/http';
import { RollDiceService } from './services/roll-dice.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RollDiceComponent
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
