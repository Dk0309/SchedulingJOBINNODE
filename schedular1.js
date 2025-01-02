const cron = require('node-cron');

const task = () => {
    console.log("running a schedule task at : ", new Date());
}

cron.schedule("* * * * * *",task);