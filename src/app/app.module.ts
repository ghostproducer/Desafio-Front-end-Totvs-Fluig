import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board/board.component';
import { ListComponent } from './components/board/list/list.component';
import { ContextmenuComponent } from './components/common/contextmenu/contextmenu.component';
import { HeaderComponent } from './components/common/header/header.component';
import { ContentEditDirective } from './directives/common/content-edit.directive';
import { DetailComponent } from './components/board/card/detail/detail.component';
import { SummaryComponent } from './components/board/card/summary/summary.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ListComponent,
    ContextmenuComponent,
    HeaderComponent,
    ContentEditDirective,
    DetailComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
