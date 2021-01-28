import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], sortParam: string, filterParam: string) {
    if ( sortParam === undefined && isNullOrUndefined(filterParam)  ){
      arr = arr.sort( (function (a,b) {
        if (a.state[0] < b.state[0]){
          return 1;
        }else if (a.state[0] > b.state[0]){
          return -1;
        } else return 0;
      }))
      return arr;
  }

  if (sortParam !== undefined){
    if (sortParam == 'idT'){
      arr = arr.sort( (function (a,b) {
        if (a.id > b.id){
          return 1;
        }else if (a.id < b.id){
          return -1;
        } else return 0;
      }))
    }else if (sortParam == 'idB'){
      arr = arr.sort( (function (a,b) {
        if (a.id < b.id){
          return 1;
        }else if (a.id > b.id){
          return -1;
        } else return 0;
      }))
    }else if (sortParam == 'al1'){
      arr = arr.sort( (function (a,b) {
      if (a.name[0] < b.name[0]){
        return 1;
      }else if (a.name[0] > b.name[0]){
        return -1;
      } else return 0;
    }))}else if (sortParam == 'al2'){
      arr = arr.sort( (function (a,b) {
        if (a.name[0] > b.name[0]){
          return 1;
        }else if (a.name[0] < b.name[0]){
          return -1;
        } else return 0;
      }))
    }
  }

  if ( !isNullOrUndefined(filterParam) && filterParam !== '' ){
    let filter = arr.filter(
      ell => ell.name.toLowerCase().indexOf(filterParam.toLowerCase()) === 0)
      return filter;
  }

  return arr;
  
  }

}
