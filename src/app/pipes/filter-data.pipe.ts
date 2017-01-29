import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

	transform(items: any[], args): any {
		if (items==null) {
			return null;
		}
		return items.filter((item) => item.productId ===args);
	}
}