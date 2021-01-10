import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { CountryPipe } from "./country.pipe";
import { PhoneNumberPipe } from "./phone.number.pipe";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CountryPipe, PhoneNumberPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
