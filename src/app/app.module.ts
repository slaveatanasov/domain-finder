import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { ContainerComponent } from "./container/container.component";
import { SearchComponent } from "./search/search.component";
import { ResultsComponent } from "./results/results.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    ContainerComponent,
    SearchComponent,
    ResultsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
