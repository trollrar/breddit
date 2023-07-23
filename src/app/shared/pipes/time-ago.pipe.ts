import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

    transform(value: string | Date): unknown {
        return moment(value).fromNow();
    }
}
