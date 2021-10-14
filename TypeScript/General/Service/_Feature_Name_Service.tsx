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

export interface I_Feature_Name_Service {
  get_Feature_Name_ById: (id: string) => Promise<_Feature_Name_Model>;
  create_Feature_Name_: (
    user: _Feature_Name_Model
  ) => Promise<_Feature_Name_Model>;
  update_Feature_Name_ById: (
    user: _Feature_Name_Model
  ) => Promise<_Feature_Name_Model>;
  delete_Feature_Name_ById: (id: string) => Promise<void>;
}

export default function _Feature_Name_Service(): I_Feature_Name_Service {
  return {
    get_Feature_Name_ById: async (id: string) => {
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
    },
    create_Feature_Name_: async (user: _Feature_Name_Model) => {
      /**
       * Insert your code here
       */

      return Promise.resolve(user);
    },
    update_Feature_Name_ById: async (user: _Feature_Name_Model) => {
      /**
       * Insert your code here
       */

      return Promise.resolve(user);
    },
    delete_Feature_Name_ById: async (id: string) => {
      /**
       * Insert your code here
       */

      return Promise.resolve();
    },
  };
}
