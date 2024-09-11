import { Project } from "./classes/Project";
import { Subject } from "./classes/Subject";
import { Task } from "./classes/Task";
import { User } from "./classes/User";

const project = new Project("Project A");
const task1 = new Task("Task 1");
const task2 = new Task("Task 2");

project.add(task1);
project.add(task2);

const subject = new Subject();
const user1 = new User("Alice");
const user2 = new User("Bob");

subject.addObserver(user1);
subject.addObserver(user2);

subject.notifyObservers("A task has been updated.");