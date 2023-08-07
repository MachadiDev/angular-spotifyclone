import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { SuasBibliotecasComponent } from './components/suas-bibliotecas/suas-bibliotecas.component';
import { SmallCardComponent } from './components/cards/small-card/small-card.component';
import { PrincipalContentComponent } from './components/principal-content/principal-content.component';
import { MediumCardComponent } from './cards/medium-card/medium-card.component';
import { MediumCardsComponent } from './components/cards/medium-cards/medium-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    HomePageComponent,
    SuasBibliotecasComponent,
    SmallCardComponent,
    PrincipalContentComponent,
    MediumCardComponent,
    MediumCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
