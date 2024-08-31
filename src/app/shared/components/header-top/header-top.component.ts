import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';

import { logoutAction } from 'app/entities/core/auth/store/actions/logout.actions';
import { ActiveUserInterface } from 'app/entities/core/auth/types/active-user.interface';
import { activeUserSelector } from 'app/entities/core/auth/store/selectors';

import { NavigationService } from "../../../shared/services/navigation.service";
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit, OnDestroy {
  activeUserSelector$!: Observable<ActiveUserInterface>;
  layoutConf: any;
  menuItems:any;
  menuItemSub: Subscription;
  matxThemes: any[] = [];
  currentLang = 'uk';
  availableLangs = [{
    name: 'Ukrainian',
    code: 'uk',
  }, {
    name: 'English',
    code: 'en',
  }]
  constructor(
    private store: Store,
    private layout: LayoutService,
    private navService: NavigationService,
    public translate: TranslateService,
  ) { }

  ngOnInit() {
    this.initializeValues();
    this.initializeNavigation();
  }

  initializeValues(): void {
    this.activeUserSelector$ = this.store.pipe(select(activeUserSelector));
  }

  initializeNavigation() {
    this.menuItemSub = this.navService.menuItems$
    .subscribe(res => {
      res = res.filter(item => item.type !== 'icon' && item.type !== 'separator');
      let limit = 4
      let mainItems:any[] = res.slice(0, limit)
      if(res.length <= limit) {
        return this.menuItems = mainItems
      }
      let subItems:any[] = res.slice(limit, res.length - 1)
      mainItems.push({
        name: 'More',
        type: 'dropDown',
        tooltip: 'More',
        icon: 'more_horiz',
        sub: subItems
      })
      this.menuItems = mainItems
    })
  }

  ngOnDestroy() {
    this.menuItemSub.unsubscribe()
  }

  setLang() {
    this.translate.use(this.currentLang)
  }

  toggleSidenav() {
    if(this.layoutConf.sidebarStyle === 'closed') {
      return this.layout.publishLayoutChange({
        sidebarStyle: 'full'
      })
    }
    this.layout.publishLayoutChange({
      sidebarStyle: 'closed'
    })
  }
  
  logout() {
    this.store.dispatch(logoutAction());
  }
}
