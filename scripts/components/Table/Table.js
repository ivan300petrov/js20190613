import { Component } from '../Component/Component.js';

export class Table extends Component {
  constructor({ element, data }) {
    super();
    this._el = element;
    this._render(data);

    this._el.addEventListener('click', e => this._onRowClick(e));
    this._el.addEventListener('click', e => this._onHeadClick(e));
  }

  _onRowClick(e) {
    const target = e.target.closest('tbody tr');
    if (!target) return;
    const id = target.dataset.id;
    console.log(id);
    if (id) {
      let clickEvent = new CustomEvent('rowClick', {
        detail: id,
      });
      this._el.dispatchEvent(clickEvent);
    }
  }
_onHeadClick(e){
  const targetHead = e.target.closest('thead tr');
if (!targetHead) return;
if(target.dataset.type === 'string'){

}
if(target.dataset.type === 'number'){
  
}
}
  _render(data) {
    this._el.innerHTML = `
      <table class="data-table highlight"> 
        <thead>
          <tr>
              <th data-type = "string">Name</th>
              <th data-type = "string">Symbol</th>
              <th data-type = "number">Rank</th>
              <th data-type = "number">Price</th>
          </tr>
        </thead>
        <tbody>
          ${
            data.map(coin => `
              <tr data-id="${coin.id}">
                <td>${coin.name}</td>
                <td>${coin.symbol}</td>
                <td>${coin.rank}</td>
                <td>${coin.price.toFixed(3)}</td>
              </tr>
            `).join('')
          }
        </tbody>
      </table>
    `;
  }
}