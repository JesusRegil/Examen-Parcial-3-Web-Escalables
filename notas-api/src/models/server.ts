import express, { type Application } from 'express';
import cors from 'cors';
import notasRouter from '../routes/notas.routes.ts';
import { dbConnection } from '../database/config.ts';

export class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8080';

    this.connectDB();
    this.middlewares();
    this.routes();
  }

  private async connectDB() {
    await dbConnection();
  }

  private middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private routes() {
    this.app.use('/api/notas', notasRouter);
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Servidor en http://localhost:${this.port}`);
    });
  }
}
