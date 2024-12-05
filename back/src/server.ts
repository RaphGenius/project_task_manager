import "dotenv/config";
import "tsconfig-paths/register";
import sequelize from "@config/database/sequelize";
import seeding from "@config/database/seeding";
import app from "@/app";

const PORT = process.env.PORT || 3000;
const force = false;

sequelize.sync({ force }).then(() => {
  if (force) seeding().catch((err) => console.log("error while seeding", err));
  process.env.NODE_ENV = "dev";

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
