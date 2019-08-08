
import { DataService } from '../../services/DataService.js';
import { Table } from '../Table/Table.js';
export class Component {
  on(eventType, callback) {
    this._el.addEventListener(eventType, callback);
  }
  /*
  onHeadClick(e){
  const target = e.target.closest('tr th');
  if (!target) return;
  const table = e.target.closest('table');
  const tableBody = table.tBodies[0];

let sortIndex = target.cellIndex;
let rows = [...tableBody.rows] ;
let sortType = target.dataset.type;
    rows.sort(function(rowA, rowB){
      let cellA = rowA.cells[sortIndex].textContent;
      let cellB = rowB.cells[sortIndex].textContent;
    return sortType === 'string'
? cellA.localeCompare(cellB)
: +cellA - +cellB;

    }).forEach(function(item){
tableBody.append(item)
    })

}
*/

onSort(columName, sortWay){
DataService.getCurrencies(data => {
      this._data = data;
      this._initTable();
})
*/
}