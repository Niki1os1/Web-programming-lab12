import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { FormComponent } from './form/form.component';
import { HighlightDirective } from './directives/highlight.directive';
import { WhileDirective } from './directives/while.directive';
import { TrackByDirective } from './directives/trackBy.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FormComponent,
    HighlightDirective,
    WhileDirective,
    TrackByDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
