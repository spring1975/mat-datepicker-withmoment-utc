import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';

const moment = _rollupMoment || _moment;

import {apiService} from './api.service';


/** @title Datepicker that uses Moment.js dates */
@Component({
  selector: 'datepicker-moment-example',
  templateUrl: 'datepicker-moment-example.html',
  styleUrls: ['datepicker-moment-example.css'],
})
export class DatepickerMomentExample implements OnInit {
  initialComponentDate = moment();
  initialComponentDateAsUTC = moment().utc();
  initialComponentDateAsUTCLocal = moment().utc().local();
  // Datepicker takes `Moment` objects instead of `Date` objects.
  fcDate = new FormControl();
  fcDate2 = new FormControl();
  constructor(private api: apiService){}

  ngOnInit() {
    console.log('datepicker value initialized as', this.fcDate.value);
    this.setupDtoDateListener();
    this.setDatepickerOnInit();
  }
  setupDtoDateListener() {
    this.fcDate.valueChanges.subscribe((dt:_moment.Moment) => {
      console.log('FormControl value set to: ', dt);
      this.api.saveDate(dt);
      this.fcDate2.setValue(this.api.getDate());
    })
  }

  setDatepickerOnInit() {
    const dt = this.api.getDate();
    console.log('api value received: ', dt);
    this.fcDate.setValue(dt);
  }

  isMoment() {
    return moment.isMoment(this.fcDate.value);
  }
}
