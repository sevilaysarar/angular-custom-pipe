import { Component } from "@angular/core";

export interface Country {
  countryCode: string;
  countryName: string;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  countryCode: string;

  countryList: Array<Country> = [
    { countryCode: "TR", countryName: "Turkey" },
    { countryCode: "CA", countryName: "Canada" },
    { countryCode: "IT", countryName: "Italy" },
    { countryCode: "IE", countryName: "Ireland" },
    { countryCode: "NL", countryName: "Netherlands" },
    { countryCode: "CH", countryName: "Switzerland" }
  ];

}



