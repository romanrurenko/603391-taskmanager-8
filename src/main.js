import {task} from './data';
import {filtersData} from "./data";
import {clearElement} from "./utils";
import {Task} from "./classes/task";
import {TaskEdit} from "./classes/task-edit";
import {Filter} from "./classes/filter";

const taskContainer = document.querySelector(`.board__tasks`);
const filtersContainer = document.querySelector(`.main__filter`);
clearElement(taskContainer);
clearElement(filtersContainer);

const taskComponent = new Task(task);
const editTaskComponent = new TaskEdit(task);

const filtersComponents = [];
for (let i = 0; i < filtersData.length; i++) {
  filtersComponents[i] = new Filter(filtersData[i]);
  filtersContainer.appendChild(filtersComponents[i].render());
}

taskContainer.appendChild(taskComponent.render());

taskComponent.onEdit = () => {
  editTaskComponent.render();
  taskContainer.replaceChild(editTaskComponent.element, taskComponent.element);
  taskComponent.unrender();
};

editTaskComponent.onSubmit = () => {
  taskComponent.render();
  taskContainer.replaceChild(taskComponent.element, editTaskComponent.element);
  editTaskComponent.unrender();
};

