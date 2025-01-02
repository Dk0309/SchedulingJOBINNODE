const schedule = require("node-schedule");

// scheduing job at a particulat date and time
// const particularDate = new Date('2024-12-31T16:24:00.OOO+5:30');
// schedule.scheduleJob(particularDate, () => {
//     console.log("I am Job");
// })

//recurring intervals
// schedule.scheduleJob('*/2 * * * * *',() => {
//     console.log("I will print every after two second")
// })

//cancelling a Job
//first method
// schedule.scheduleJob("myjob",'*/2 * * * * *',() => {
//     console.log("I will print only one time");
//     schedule.cancelJob('myjob');
// })
//second method
const myjob = schedule.scheduleJob("*/2 * * * * *", () => {
  console.log("I will print only one time");
  myjob.cancel();
});

// [
//     {"id":1,"status":"paid","description":"laptop","date":"2024-11-30T10:32:40.282Z"},
//     {"id":2,"status":"paid","description":"mobile","date":"2023-11-30T10:32:40.282Z"},
//     {"id":3,"status":"paid","description":"tablet","date":"2022-11-30T10:32:40.282Z"},
//     {"id":4,"status":"pending","description":"tv","date":"2023-11-30T10:32:40.282Z"}
// ]
