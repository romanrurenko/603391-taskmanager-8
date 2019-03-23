export const filtersData = [
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

// data.js
export const taskData = {
  title: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`,
  ][Math.floor(Math.random() * 3)],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  tags: new Set([
    `cinema`,
    `entertainment`,
    `myself`,
  ]),
  picture: `http://picsum.photos/100/100?r=${Math.random()}`,
  color: [
    `black`, `yellow`, `blue`, `green`, `pink`
  ][Math.floor(Math.random() * 5)],
  repeatingDays: {
    'mo': true,
    'tu': false,
    'we': true,
    'th': false,
    'fr': false,
    'sa': true,
    'su': false,
  },
  isFavorite: false,
  isDone: false,
};


export const Color = {
  blue: `card--blue`,
  black: `card--black`,
  yellow: `card--yellow`,
  green: `card--green`,
  pink: `card--pink`,
};
