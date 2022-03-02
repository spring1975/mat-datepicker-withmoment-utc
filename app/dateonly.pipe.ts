import { Constants } from './constants';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';

const moment = _rollupMoment || _moment;

@Pipe({
  name: 'dateOnly'
})
export class DateOnlyPipe extends DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log('pipe got moment', moment.isMoment(value));
    return moment(value).format(Constants.DateOnlyFormat);
  }
}