import express from 'express';
import TodoService from '../services/todo';
import { ITodo } from '../types/todo';

class Handler {
  path: string;
  router: express.Router;
  constructor() {
    this.path = '/todos';
    this.router = express.Router();
    this.initializeRoutes();
  }

  static async index(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      const products = await TodoService.index();
      res.status(200).json({
        status: 200,
        message: 'success',
        data: products,
      });
    } catch (err) {
      const error = err as Error;
      console.log(`index error: ${error}`);
    }
  }

  static async create(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      console.log(`ddd ${req.body}`);
      const product = await TodoService.create(req.body as ITodo);
      console.log(`${product}`);

      res.status(200).json({
        status: 200,
        message: 'success',
        data: product,
      });
    } catch (err) {
      const error = err as Error;
      console.log(`create error: ${error}`);
    }
  }

  static async update(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      console.log(`${req.body}`);
      const product = await TodoService.update(
        req.params.id as unknown as string,
        req.body as ITodo
      );
      res.status(200).json({
        status: 200,
        message: 'success',
        data: product,
      });
    } catch (err) {
      const error = err as Error;
      console.log(`update error: ${error}`);
    }
  }

  static async delete(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      console.log(`${req.body}`);
      const product = await TodoService.delete(req.params.id as string);
      res.status(200).json({
        status: 200,
        message: 'success',
        data: product,
      });
    } catch (err) {
      const error = err as Error;
      console.log(`delete error: ${error}`);
    }
  }

  initializeRoutes() {
    this.router.get(`${this.path}/all`, Handler.index);
    this.router.post(`${this.path}/create`, Handler.create);
    // this.router.get(`${this.path}/show/:id`, authMiddelware, Handler.show);
    this.router.put(`${this.path}/update/:id`, Handler.update);
    this.router.delete(
      `${this.path}/delete/:id`,

      Handler.delete
    );
  }
}

export default Handler;
