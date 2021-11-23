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

import { Roles, _Feature_Name_Model } from "../Types/_Feature_Name_Model";

type get_Feature_Name_ById = (id: string) => Promise<_Feature_Name_Model>;
type create_Feature_Name_ = (
  user: _Feature_Name_Model
) => Promise<_Feature_Name_Model>;
type update_Feature_Name_ById = (
  user: _Feature_Name_Model
) => Promise<_Feature_Name_Model>;
type delete_Feature_Name_ById = (id: string) => Promise<void>;

const get_Feature_Name_ById: get_Feature_Name_ById = async (id: string) => {
  /**
   * Insert your code here
   */

  return Promise.resolve({
    id: id,
    name: "Rafael Pena",
    role: Roles.ADMIN,
    email: "rafael@rafaelpena.com",
    password: "your_pass",
  });
};

const create_Feature_Name_: create_Feature_Name_ = async (
  user: _Feature_Name_Model
) => {
  /**
   * Insert your code here
   */

  return Promise.resolve(user);
};

const update_Feature_Name_ById: update_Feature_Name_ById = async (
  user: _Feature_Name_Model
) => {
  /**
   * Insert your code here
   */

  return Promise.resolve(user);
};

const delete_Feature_Name_ById: delete_Feature_Name_ById = async (
  id: string
) => {
  /**
   * Insert your code here
   */

  return Promise.resolve();
};
