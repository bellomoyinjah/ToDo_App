// Exercise 3
/*
 todo [ class todoItem1, todoitem2.... ]
 getter 
 1.display;
 2.change the status;
 3.sort the array;
 4.delete items;
 5.add items;
*/
interface IToDoItem {
  task: string;
  date: string;
  status: string;
  getTask: () => string;
  display: () => void;
}

interface IToDoList {
  setTask: (toDoitem: IToDoItem) => void;
}
class toDoitem implements IToDoItem {
  constructor(
    public task: string,
    public date: string,
    public status: string
  ) {}
  getTask() {
    return this.task;
  }
  display() {
    console.log(this.task);
    console.log(this.date);
    console.log(this.status);
  }
}

const toDoList: toDoitem[] = [];

toDoList.push(new toDoitem("das", "12:12", "Inprogress"));
toDoList[0].display();
toDoList[0].getTask();


