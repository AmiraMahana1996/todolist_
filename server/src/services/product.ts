import { ITodo } from '../types/todo';
import removeSpaces from '../helpers/removeSpaces';
import Todo from '../models/todo';
class ProductService {
  static async index(): Promise<ITodo[]> {
    try {
      const products: ITodo[] = await Todo.find();
      return products;
    } catch (e) {
      throw new Error(`Cann't get product information: ${e}`);
    }
  }

  // static async show(id: string): Promise<IProduct> {
  //   try {
  //     const connection = await Client.connect();
  //     const sql = 'SELECT * FROM products WHERE id = ($1)';
  //     const result = await connection.query(sql, [removeSpaces(id)]);
  //     connection.release();
  //     return result.rows[0];
  //   } catch (e) {
  //     throw new Error(`Cann't show product : ${e}`);
  //   }
  // }
  static async create(data: ITodo): Promise<ITodo> {
    try {
      const body = data as Pick<ITodo, 'name' | 'description' | 'status'>;

      const todo: ITodo = new Todo({
        name: body.name,
        description: body.description,
        status: body.status,
      });

      const newTodo: ITodo = await todo.save();
      const allTodos: ITodo[] = await Todo.find();

      return newTodo;
    } catch (e) {
      throw new Error(`Cann't create product : ${e}`);
    }
  }
  // static async update(id: number, product: IProduct): Promise<IProduct> {
  //   try {
  //     const connection = await Client.connect();
  //     const sql =
  //       'UPDATE products SET name=$1,price=$2,category_id=$3 WHERE id=$4 RETURNING *';
  //     const result = await connection.query(sql, [
  //       removeSpaces(product.name),
  //       product.price,
  //       product.category_id,
  //       id,
  //     ]);
  //     connection.release();
  //     return result.rows[0];
  //   } catch (e) {
  //     throw new Error(`Cann't update product : ${e}`);
  //   }
  // }
  // static async delete(id: string): Promise<IProduct[]> {
  //   try {
  //     const connection = await Client.connect();
  //     const sql = 'DELETE FROM products WHERE id = $1';
  //     const result = await connection.query(sql, [id]);
  //     connection.release();
  //     return result.rows[0];
  //   } catch (e) {
  //     throw new Error(`Cann't delete product : ${e}`);
  //   }
  // }

  // static async getProductsByCategory(id: string): Promise<IProduct> {
  //   try {
  //     const connection = await Client.connect();
  //     const sql =
  //       'SELECT *FROM products p JOIN categories c ON c.id = p.category_id WHERE c.id = $1';
  //     const result = await connection.query(sql, [id]);
  //     connection.release();
  //     return result.rows[0];
  //   } catch (e) {
  //     throw new Error(`Cann't get products by category_id product : ${e}`);
  //   }
  // }
}

export default ProductService;
