import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import mongoose from 'mongoose';

import logger from './helpers/logger';
import bodyParser from 'body-parser';
dotenv.config();
const url: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.04ix10n.mongodb.net/`;

class App {
  app: express.Application;
  constructor(handlers: unknown[]) {
    this.app = express();
    mongoose
      .connect(url)
      .then(() => console.log('db'))
      .catch((error) => {
        throw error;
      });

    this.initializeMiddleWares();
    this.initializeControllers(handlers);
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      logger.info(`App listening on the port ${process.env.PORT}`);
    });
  }

  initializeMiddleWares() {
    this.app.use(cors());

    this.app.use(bodyParser.json({ limit: '8mb' }));
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use((req, res, done) => {
      logger.info(req.originalUrl);
      done();
    });
  }

  initializeControllers(handlers) {
    handlers.forEach((handlers) => {
      this.app.use('/', handlers.router);
    });
  }
}

export default App;
