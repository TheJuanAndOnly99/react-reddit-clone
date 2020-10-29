import { EntityManager, IDatabaseDriver, Connection } from "mikro-orm";
import { Request, Response } from 'express';

export type MyContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
  req: Request & {session: Express.Session};
  res: Response;
}; 