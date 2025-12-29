const express = require('express');
const app = express();

app.route('/user')
.get((req, res) => {
    res.send('get')
})
.post((req, res) => {
    res.send('Update')
})
 
app.listen(3000, () => console.log('Server started on port 3000'))