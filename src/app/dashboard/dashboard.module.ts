import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatSelect, MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [DashboardComponent, ToolbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    TranslateModule,
    SharedModule,
    MatListModule,
    MatSelectModule,
    MatDatepickerModule,

    HomeModule,
    DashboardRoutingModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
