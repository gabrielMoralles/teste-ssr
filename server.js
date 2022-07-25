const express = require('express');
const path = require('path');
const { error } = require('console');
const app = express();

app.use(express.static('./dist/teste-ssr'));

app.get('*', (req, res) => {
        // res.sendFile("./dist/Marvel-Angular/index.html");
        res.sendFile("index.html" ,{root:"./dist/teste-ssr"}); // load the single view file (angular will handle the page changes on the front-end)
});
app.use(require('prerender-node').set('prerenderToken', 'XG3JPbYqZlu0HoH11ch5'));

app.listen(process.env.PORT || 8085);