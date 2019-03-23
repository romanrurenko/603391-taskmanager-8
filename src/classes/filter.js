import {createElement} from "../utils";
import {Component} from "./component";

export class Filter extends Component{
  constructor(data) {
    super();
    this._caption = data.caption;
    this._checked = data.checked;
    this._amount = data.amount;
  }

  _onEditButtonClick() {
    typeof this._onEdit === `function` && this._onEdit();
  }

  set onEdit(fn) {
    this._onEdit = fn;
  }

  get template() {
    return `<span><input
            type="radio"
            id="filter__${this._caption.toLowerCase()}"
            class="filter__input visually-hidden"
            name="filter" 
            ${this._checked ? ` checked` : ``}>
    <label for="filter__${this._caption.toLowerCase()}" class="filter__label">
      ${this._caption} <span class="filter__all-count">${this._amount}</span></label
    ></span>`.trim();
  }

  bind() {
    this._element.querySelector(`#filter__${this._caption.toLowerCase()}`).addEventListener(`click`,
        this._onEditButtonClick.bind(this));
  }

  unbind() {
    this._element.querySelector(`.filter-${this._caption.toLowerCase()}`)
      .addEventListener(`click`, this._onEditButtonClick.bind(this));
  }

  isChecked() {

  }



}
