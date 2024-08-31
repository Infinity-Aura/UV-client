import { Injectable } from "@angular/core";
import { formatRelative, parseISO } from "date-fns";
import { uk } from 'date-fns/locale'

@Injectable({
  providedIn: "root",
})
export class DateService {
  constructor() {}

  formatRelativeDate(
    date: number | Date,
    baseDate: number | Date,
    options?: {
      locale?: Locale;
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    }
  ) {
    return formatRelative(date, baseDate, options);
  }

  parseISODate(ISODate: string) {
    return parseISO(ISODate);
  }

  uaLocale() {
    return uk;
  }
}
