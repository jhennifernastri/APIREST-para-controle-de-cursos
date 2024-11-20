import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ContainerComponent } from './shared/container/container.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CursoIndexComponent } from './pages/curso/curso-index/curso-index.component';
import { CursoCreatComponent } from './pages/curso/curso-creat/curso-creat.component';
import { CursoEditComponent } from './pages/curso/curso-edit/curso-edit.component';
import { Message404Component } from './pages/message/message404/message404.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CursoIndexComponent,
    CursoCreatComponent,
    CursoEditComponent,
    Message404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
