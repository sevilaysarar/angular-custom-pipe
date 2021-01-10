import { Pipe, PipeTransform } from "@angular/core";
import { Country } from "./app.component";

@Pipe({ name: "country" })
export class CountryPipe implements PipeTransform {
  transform(countryList: Country[], countryCode: string): string {
    if (!countryList.length || !countryCode) return "";

    const country: Country = countryList.find(
      item => item.countryCode === countryCode
    );
    const countryName = country ? country.countryName : "-";

    return countryName.length > 8
      ? `${countryName.substr(0, 8)}...`
      : countryName;
  }
}


