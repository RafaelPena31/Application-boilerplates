/**
 * @author Rafael Pena
 *
 * Github: @RafaelPena31
 * LinkedIn: https://www.linkedin.com/in/rafael-augusto-pena/
 *
 * @tutorial
 * TO-DOs
 * Change the _Feature_Name_Model interface and the return of each role service according to your needs
 */

/**
 * This Model is not part of the boilerplates, it was created only to be used as an example
 */

export enum Roles {
  ADMIN = "ADMIN",
  USER = "USER",
}

export type UUID = string;

export interface _Feature_Name_Model {
  id: UUID;
  name: string;
  role: Roles;
  email: string;
  password: string;
}
