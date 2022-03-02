import { Injectable, Inject } from '@angular/core';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';

const moment = _rollupMoment || _moment;

@Injectable({
	providedIn: 'root',
})
export class apiService {
  private serializedDate: string = "2010-01-15T00:00:00.000Z";
  
  saveDate(dt: _moment.Moment) {
    const serialized = dt.toJSON();
    console.log('serializedDate to: ', serialized);
    const justTheDate = serialized.match(/^([\d-]+)/)[0];
    console.log('justTheDate', justTheDate);
    const dateToStore = moment.utc(justTheDate, 'YYYY-MM-DD').toJSON();
    console.log('dateToStore', dateToStore);
    this.serializedDate = dateToStore;
  }

  getDate(): _moment.Moment {
    const dt = moment.utc(this.serializedDate);
    return dt;
  }
  get serializedDateLiteral() { return this.serializedDate; }
}