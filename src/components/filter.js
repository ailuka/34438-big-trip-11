import AbstractComponent from "../components/abstract-component.js";
import {capitalize} from "../utils/common.js";

const createFilterItemTemplate = (filter) => {
  const {title, isChecked, isEnabled} = filter;
  const checkedAttribute = isChecked ? `checked` : ``;
  const disabledAttribute = isEnabled ? `` : `disabled`;
  return (
    `<div class="trip-filters__filter">
      <input id="filter-${title}" data-filter-type="${title}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" ${checkedAttribute} ${disabledAttribute}>
      <label class="trip-filters__filter-label" for="filter-${title}">${capitalize(title)}</label>
    </div>`
  );
};

const createSiteFilterTemplate = (filters) => {
  const filtersMarkup = filters.map((filter) => createFilterItemTemplate(filter)).join(`\n`);

  return (
    `<form class="trip-filters" action="#" method="get">
      ${filtersMarkup}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
};

export default class Filter extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  setChangeHandler(handler) {
    this.getElement().addEventListener(`change`, (evt) => {
      const filterType = evt.target.dataset.filterType;
      handler(filterType);
    });
  }

  getTemplate() {
    return createSiteFilterTemplate(this._filters);
  }
}
