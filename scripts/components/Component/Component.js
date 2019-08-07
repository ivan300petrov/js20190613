export class Component {
  on(eventType, callback) {
    this._el.addEventListener(eventType, callback);
  }
  onHeadClick(e){
  const target = e.target.closest('tr th');
  const table = e.target.closest('table');
  const tableBody = table.tBodies[0];
if (!target) return;
let sortIndex = target.cellIndex;
let rows = [...table.tBodies[0].rows] ;
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
}