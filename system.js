const schedule = require("node-schedule");

// const startTime = new Date(Date.now() + 5000);
// const endTime = new Date(startTime.getTime() + 10000);
// schedule.scheduleJob(
//   "job",
//   { start: startTime, end: endTime, rule: "*/1 * * * * *" },
//   () => {
//     console.log("Time for tea!");
//     schedule.cancelJob("job");
//   }
// );

exports.startReminder = (reminder) => {
  const id = reminder._id;
  const start = reminder.start;
  const end = reminder.end;
  const frequency = reminder.frequency;
  const rule = `*/${frequency} * * * * *`;

  schedule.scheduleJob(id, { start, end, rule }, () => {
    console.log("Time for your meds!");
  });
};

exports.deleteReminder = (id) => {
  console.log(id);
  const myJob = schedule.scheduledJobs[id];
  console.log(myJob);
  myJob.cancel();
};

// console.log(new Date(Date.now()));

// const start = new Date(Date.now() + 5000);
// const end = new Date(start.getTime() + 15000);

// const myReminder = {
//   _id: "Job",
//   start,
//   end,
//   frequency: 3,
// };

// startReminder(myReminder);
// setTimeout(() => {
//   console.log("here");
//   const my_job = schedule.scheduledJobs["Job"];
//   my_job.cancel();
// }, 8000);

// exports.startReminder = startReminder;
