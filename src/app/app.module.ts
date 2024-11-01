import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    BrowserModule, 
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}