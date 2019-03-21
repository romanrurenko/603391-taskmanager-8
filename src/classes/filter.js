import {createElement} from "../utils";

export class Filter {
  constructor(data) {
    this._caption = data.caption;
    this._checked = data.checked;
    this._amount = data.amount;
  }

  _onEditButtonClick() {
    typeof this._onEdit === `function` && this._onEdit();
  }

  get element() {
    return this._element;
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

  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }

  unbind() {
    this._element.querySelector(`.filter-${this._caption.toLowerCase()}`)
      .addEventListener(`click`, this._onEditButtonClick.bind(this));
  }

  isChecked() {

  }

  unrender() {
    this.unbind();
    this._element = null;
  }


}
