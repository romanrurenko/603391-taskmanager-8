import makeFilter from '../src/make-filter';
import makeTask from '../src/make-task';
import {filtersData} from './data';
import {task} from './data';
import {clearElement} from "./utils";
import {getRandom} from "./utils";

const taskContainer = document.querySelector(`.board__tasks`);
const filtersContainer = document.querySelector(`.main__filter`);

const handler = () => {
  clearElement(taskContainer);
  renderTasks(taskContainer, getRandom(1, 8));
};

const renderTasks = (dist, amount) => {
  dist.insertAdjacentHTML(`beforeend`, new Array(amount)
    .fill(makeTask(task))
    .join(``));
};

const renderFilters = (dist, data) => {
  for (const it of data) {
    dist.insertAdjacentHTML(`beforeend`, makeFilter(it.caption, it.amount, it.checked));
  }
};


// start script
clearElement(taskContainer);
clearElement(filtersContainer);
renderFilters(filtersContainer, filtersData);
renderTasks(taskContainer, 7);


filtersContainer.addEventListener(`click`, handler);
