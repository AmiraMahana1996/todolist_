import { ITodo } from '../types/todo';
import removeSpaces from '../helpers/removeSpaces';
import Todo from '../models/todo';
class TodoService {
  static async index(): Promise<ITodo[]> {
    try {
      const todos: ITodo[] = await Todo.find();
      console.log(todos);
      return todos;
    } catch (e) {
      throw new Error(`Cann't get product information: ${e}`);
    }
  }

  static async create(data: ITodo): Promise<ITodo[]> {
    try {
      const body = data as Pick<ITodo, 'title' | 'status'>;

      const todo: ITodo = new Todo({
        title: body.title,

        status: body.status,
      });

      const newTodo: ITodo = await todo.save();
      const allTodos: ITodo[] = await Todo.find();

      return allTodos;
    } catch (e) {
      throw new Error(`Cann't create product : ${e}`);
    }
  }
  static async update(id: string, todo: ITodo): Promise<ITodo[]> {
    try {
      const updatedTodo: any = await Todo.findByIdAndUpdate(id, todo);
      const allTodos: ITodo[] = await Todo.find();
      return allTodos;
    } catch (e) {
      throw new Error(`Cann't update product : ${e}`);
    }
  }
  static async delete(id: string): Promise<ITodo[]> {
    try {
      const deletedTodo: any = await Todo.findByIdAndDelete(id);
      const allTodos: ITodo[] = await Todo.find();
      return allTodos;
    } catch (e) {
      throw new Error(`Cann't delete product : ${e}`);
    }
  }
}

export default TodoService;
