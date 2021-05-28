const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Set statuc path

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());

const publicVapidKey = "BOGhDSUt0xvKOu0tj5ZliuNORt8tZ2KBnAEtXE-XvQBOaVLD9tAsz2YMd4m1OBqnSRGXMHaGEif6fHWZpevwxn0";
const privateVapidKey = "rlJ8tZA8xtpJPk1CMySHW-HdhgybfIiVB9ZoUJoV_sc";

webpush.setVapidDetails('mailto:manushivam@classplus.co',publicVapidKey,privateVapidKey);

//SUbscrive Route

app.post('/subscribe',(req,res) => {
    //Get pushSubscri[tion object]
    const subscription = req.body;

    //Send 201 - resourse created
    res.status(201).json({});

    //create payload
    const payload = JSON.stringify({
        title: 'Push Test'
    });

    // Pass object into sendNotid=fication function
    webpush.sendNotification(subscription,payload).catch(err => console.error(err));
})

const port= 3001;

app.listen(port, () => console.log(`Server started on ${port}`));