import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

	transform(value: string, limit?: number): string {
		let actualLimit = (limit) ? limit : 1500;
		if (value.length < actualLimit)
			return value;
		return value.substr(0, actualLimit) + '...';
  }

}
