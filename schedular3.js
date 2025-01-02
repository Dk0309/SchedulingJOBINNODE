const cron = require("node-cron");
const path = require("path");
const fs = require("fs");

const archive = require("./data/archive.json");

const housekeeping = () => {
  console.log("Running house keeping task : ", new Date());

  try {
    archive.map((item, index) => {
      const presentDate = new Date().getTime();
      const recordDate = new Date(item.date).getTime();
      console.log(
        "The number of days : ",
        Math.floor((presentDate - recordDate) / (1000 * 60 * 60 * 24))
      );

      if (
        Math.floor((presentDate - recordDate) / (1000 * 60 * 60 * 24)) > 180
      ) {
        archive.splice(index, 1);
        fs.writeFileSync(
          path.join(__dirname, "./", "data", "archive.json"),
          JSON.stringify(archive),
          "utf-8"
        );
      }
    });
  } catch (err) {
    console.log("err : " + err);
  }

  console.log("house keeping task ended");
};

cron.schedule("* * * * * *", housekeeping);
