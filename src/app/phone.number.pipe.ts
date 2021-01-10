import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: "phoneNumber"
})
export class PhoneNumberPipe implements PipeTransform {
  transform(phoneNumber: string, prefix: string): string {
    if (!phoneNumber || !prefix) return "";

    const ndc = phoneNumber.slice(0, 3);
    const sn = `${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;

    return `Phone: +${prefix} ${ndc} ${sn}`;
  }
}

