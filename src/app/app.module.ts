import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './store/effects';
import { RootReducer } from './store/reducer';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      game: RootReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 100, logOnly: environment.production }),
    EffectsModule.forRoot([Effects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
