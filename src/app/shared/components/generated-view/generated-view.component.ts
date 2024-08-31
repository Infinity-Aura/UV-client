import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";

import { generatedResultSelector } from "app/entities/measurement/store/selectors";
import { GenerateResultInterface } from "app/entities/measurement/types/generate-result.interface";

export interface ChipColor {
  name: string;
  color: string;
}

interface CSteps {
  step1: CStep[];
  step2: CStep[];
}

interface CStep {
  name: string;
  value: number;
  status: string;
}

@Component({
  selector: "app-generated-view",
  templateUrl: "./generated-view.component.html",
  styleUrls: ["./generated-view.component.css"],
})
export class GeneratedViewComponent implements OnInit {
  generatedResultSelector$: Observable<GenerateResultInterface>;
  cStep1: CStep[];
  cStep2: CStep[];
  step1: string[][];
  step2: string[][];
  displayedColumns: string[] = ['name', 'value', 'status'];

  availableColors: ChipColor[] = [
    { name: "Success", color: "primary" },
    { name: "Warning", color: "accent" },
    { name: "Danger", color: "warn" },
  ];

  constructor(private store: Store, public translate: TranslateService) {}

  ngOnInit() {
    this.initializeValues();
  }

  initializeValues(): void {
    this.generatedResultSelector$ = this.store.pipe(
      select(generatedResultSelector)
    );

    this.generatedResultSelector$.subscribe(({ statusSteps }) => {
      this.step1 = Object.entries(statusSteps.step1);
      this.step2 = Object.entries(statusSteps.step2);

      this.cStep1 = this.step1.map(([key, value]) => ({
        name: this.getDot(key),
        value: 100,
        status: value,
      }));

      this.cStep2 = this.step2.map(([key, value]) => ({
        name: this.getDot(key),
        value: 100,
        status: value,
      }));
    });
  }

  getChip(status: string) {
    return this.availableColors.find((chip) => chip.name === status);
  }

  getDot(dotField: string) {
    return dotField.slice(-2);
  }
}
