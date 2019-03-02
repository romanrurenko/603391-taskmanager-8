// make-filter.js

export default (caption, count, isChecked = false) =>
  `<input
            type="radio"
            id="filter__${caption.toLowerCase()}"
            class="filter__input visually-hidden"
            name="filter" 
            ${isChecked ? ` checked` : ``} 
    />
    <label for="filter__${caption.toLowerCase()}" class="filter__label">
      ${caption} <span class="filter__all-count">${count}</span></label
    >`;
