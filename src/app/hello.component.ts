import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<p>
  <mat-form-field appearance="fill">
    <mat-label>Input disabled</mat-label>
    <input matInput [matDatepicker]="dp3" disabled>
    <mat-hint>MM/DD/YYYY</mat-hint>
    <mat-datepicker-toggle matSuffix [for]="dp3"></mat-datepicker-toggle>
    <mat-datepicker #dp3 disabled="false"></mat-datepicker>
  </mat-form-field>
</p>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
