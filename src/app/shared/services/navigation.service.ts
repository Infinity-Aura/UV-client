import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface IMenuItem {
  type: "link" | "dropDown" | "icon" | "separator" | "extLink";
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  svgIcon?: string; // UI Lib icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
}
interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string; // Material icon name
  svgIcon?: string; // UI Lib icon name
  sub?: IChildItem[];
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

@Injectable()
export class NavigationService {
  iconMenu: IMenuItem[] = [
    {
      name: "MEASUREMENT",
      state: "measurement",
      type: "link",
      icon: "calculate",
    },
    {
      name: "HOW_TO_USE",
      state: "home/how",
      type: "link",
      icon: "question_mark",
    },
  ];
  iconTypeMenuTitle = "Frequently Accessed";
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  menuItems$ = this.menuItems.asObservable();

  constructor() {}
}
