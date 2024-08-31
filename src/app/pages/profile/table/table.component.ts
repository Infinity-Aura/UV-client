import { LiveAnnouncer } from "@angular/cdk/a11y";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort, Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { getAllAction } from "app/entities/measurement/store/actions/get-all.actions";
import { GetAllResponseInterface } from "app/entities/measurement/types/get-all-response.interface";
import {
  generatedResultSelector,
  getAllSelector,
} from "app/entities/measurement/store/selectors";
import { DateService } from "app/shared/services/date.service";
import { deleteAction } from "app/entities/measurement/store/actions/delete.actions";
import { GenerateResultInterface } from "app/entities/measurement/types/generate-result.interface";
import { generateAction } from "app/entities/measurement/store/actions/generate.actions";
import { Steps } from "app/entities/measurement/types/steps.interface";

export interface ChipColor {
  name: string;
  color: string;
}

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
})
export class TableComponent implements OnInit {
  measurements: MatTableDataSource<GetAllResponseInterface>;
  generatedResultSelector$: Observable<GenerateResultInterface>;
  displayedColumns: string[] = [
    "position",
    "lampName",
    "radiometerName",
    "location",
    "date",
    "status",
    "actions",
  ];
  availableColors: ChipColor[] = [
    { name: "Success", color: "primary" },
    { name: "Warning", color: "accent" },
    { name: "Danger", color: "warn" },
  ];
  openModel: boolean = false;

  constructor(
    private store: Store,
    private dateService: DateService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.initializeValues();
  }

  initializeValues() {
    this.store.dispatch(getAllAction());

    this.store.pipe(select(getAllSelector)).subscribe((measurements) => {
      this.measurements = new MatTableDataSource<GetAllResponseInterface>(
        measurements
      );
      this.measurements.sort = this.sort;
      this.measurements.paginator = this.paginator;
    });

    this.generatedResultSelector$ = this.store.pipe(
      select(generatedResultSelector)
    );
  }

  getChip(status: string) {
    return this.availableColors.find((chip) => chip.name === status);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.measurements.filter = filterValue.trim().toLowerCase();
  }

  parseRelativeDate(date: string) {
    return this.dateService.formatRelativeDate(
      this.dateService.parseISODate(date),
      new Date(),
      { locale: this.dateService.uaLocale() }
    );
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce("Sorting cleared");
    }
  }

  generate(steps: Steps) {
    this.openModel = true;
    this.store.dispatch(generateAction({ request: { steps } }));
  }

  deleteItem(id: string) {
    this.store.dispatch(deleteAction({ id }));
  }
}
