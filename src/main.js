import makeFilter from '../src/make-filter';
import makeTask from '../src/make-task';

const boardsContainer = document.querySelector(`.board__tasks`);
const filtersContainer = document.querySelector(`.main__filter`);
const filtersData = [
  {
    "caption": `ALL`,
    "amount": 15,
    "checked": true
  },
  {
    "caption": `OVERDUE`,
    "amount": 0,
    "checked": false
  },
  {
    "caption": `TODAY`,
    "amount": 0,
    "checked": false
  },
  {
    "caption": `FAVORITES`,
    "amount": 15,
    "checked": false
  },
  {
    "caption": `REPEATING`,
    "amount": 15,
    "checked": false
  },
  {
    "caption": `TAGS`,
    "amount": 15,
    "checked": false
  },
  {
    "caption": `ARCHIVE`,
    "amount": 15,
    "checked": false
  },
];
const boardsData = [
  {
    "type": `repeat`,
    "caption": `It is example of repeating task. It marks by wave.`,
  },
];

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const handler = () => {
  filtersContainer.removeEventListener(`click"`, handler);
  clearElement(boardsContainer);
  renderTasks(getRandom(1, 8));
};

const renderTasks = (count) => {
  for (let i = 0; i < count; i++) {
    boardsContainer.insertAdjacentHTML(`beforeend`, makeTask(boardsData[0].type, boardsData[0].caption));
  }
};

const renderFilters = () => {
  for (const it of filtersData) {
    const filtersContainer1 = document.querySelector(`.main__filter`);
    filtersContainer1.insertAdjacentHTML(`beforeend`, makeFilter(it.caption, it.amount, it.checked));

  }
};


// start script
clearElement(boardsContainer);
clearElement(filtersContainer);
renderFilters();
renderTasks(7);
filtersContainer.addEventListener(`click`, handler);
