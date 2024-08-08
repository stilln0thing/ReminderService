const express = require('express');
const bodyParser =  require('body-parser');

const { PORT }= require('./config/serverConfig');

// const { sendBasicEmail } = require("./services/email-service");

const cron = require('node-cron');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

    app.listen(PORT, () => {
        console.log(`Server running on PORT: ${ PORT }`);
    
        // sendBasicEmail(
        //      'support@admin.com',
        //      'mathcrayon12@gmail.com',
        //      'This is a test email',
        //      'aur bhai kya haal chal'
        // )

        cron.schedule('*/2 * * * *', () => {
            console.log('Running a task every two minutes');
        });

    })

}

setupAndStartServer();