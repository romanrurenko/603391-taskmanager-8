import {taskData} from "./data";
import {filtersData} from "./data";
import {clearElement} from "./utils";
import {Task} from "./classes/task";
import {TaskEdit} from "./classes/task-edit";
import {Filter} from "./classes/filter";

const tasksContainer = document.querySelector(`.board__tasks`);
const filtersContainer = document.querySelector(`.main__filter`);

clearElement(tasksContainer);
clearElement(filtersContainer);
export const moment = require(`moment`);


const taskComponent = new Task(taskData);
const editTaskComponent = new TaskEdit(taskData);

const filtersComponents = [];
for (let i = 0; i < filtersData.length; i++) {
  filtersComponents[i] = new Filter(filtersData[i]);
  filtersContainer.appendChild(filtersComponents[i].render());
}

tasksContainer.appendChild(taskComponent.render());

taskComponent.onEdit = () => {
  editTaskComponent.render();
  tasksContainer.replaceChild(editTaskComponent.element, taskComponent.element);
  taskComponent.unrender();
};

editTaskComponent.onSubmit = (newObject) => {
  taskData.title = newObject.title;
  taskData.tags = newObject.tags;
  taskData.color = newObject.color;
  taskData.repeatingDays = newObject.repeatingDays;
  taskData.dueDate = newObject.dueDate;

  taskComponent.update(taskData);
  taskComponent.render();
  tasksContainer.replaceChild(taskComponent.element, editTaskComponent.element);
  editTaskComponent.unrender();
};
