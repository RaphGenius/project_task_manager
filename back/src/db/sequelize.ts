import { Sequelize } from "sequelize";

const sequelize = new Sequelize("task_manager", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  dialectOptions: { timezone: "Etc/GMT-2" },
  logging: false,
});

export default sequelize;
