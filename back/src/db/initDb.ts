import sequelize from "./sequelize";
import seeding from "./seeding";

const force = true;

const initialisationDB = async () => {
  try {
    await sequelize.sync({ force });
    console.log("Sequelize sync");

    if (force) seeding();
  } catch (error) {
    console.log("Error while init DB");
    console.log(error);
  }
};

export { initialisationDB };
