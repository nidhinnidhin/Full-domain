const cron = require('node-cron');

cron.schedule ('* * * * *', () => {
    console.log("Job scheduled")
})