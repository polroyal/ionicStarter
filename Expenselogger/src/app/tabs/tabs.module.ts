import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { SettingsModule } from '../pages/settings/settings.module';
import { BudgetModule } from '../pages/budget/budget.module';
import { ActivityModule } from '../pages/activity/activity.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    DashboardComponent,
    SettingsModule,
    BudgetModule,
    ActivityModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
