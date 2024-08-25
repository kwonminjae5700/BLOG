/*
    1. 게시물 업로드 기능
    2. 게시물 읽기 기능
    3. 게시물 수정 기능
    4. 게시물 삭제 기능
*/

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.listen(3000, function() {
    console.log("start! blog server is open!!")
})

const BLOG_data = []

app.post('/post', function(req, res) {  // 1. 게시물 업로드 기능
    const {title_data, content_data} = req.body

    BLOG_data.push({
        title : title_data,
        content : content_data
    })

    res.send('200')
})

app.get('/get', function(req, res) { 
    
    res.json(BLOG_data)
})

