import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeeklyCalendarComponent } from './weekly-calendar/weekly-calendar.component';
import { SchedulingComponent } from './scheduling/scheduling.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WeeklyCalendarComponent, SchedulingComponent],
  exports: [WeeklyCalendarComponent]
})
export class SchedulingModule { }
