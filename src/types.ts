import { EntityManager, IDatabaseDriver, Connection } from "mikro-orm";

export type MyContext {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>
}