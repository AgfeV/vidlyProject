import _ from 'lodash';

export function paginate(items, pageNumber, pageSize){

  const startIndex = (pageNumber -1) * pageSize;
  //Return lodash object by wrapping the array and then
  //Chain the diffrent functions
  return _(items)
  .slice(startIndex)
  .take(pageSize)
  .value();
}
