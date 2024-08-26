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
    const id_data = BLOG_data.length

    BLOG_data.push({
        id : id_data+1,
        title : title_data,
        content : content_data
    })

    res.status(200).send('Upload is done!')
})

app.get('/getAll', function(req, res) { // 2. 게시물 전체 읽기 기능
    
    res.json(BLOG_data)
})

app.get('/getById', function(req, res) { // 2. ID 에 해당하는 게시물 읽기 기능
    const id_data = parseInt(req.query.id)
    const idx = BLOG_data.find(idx => idx.id === id_data)

    if(idx) {
        res.json(idx)
    } else {
        res.status(404).send('No data')
    }
})

app.patch('/patch', function(req,res) { // 3. 게시물 수정 기능
    const modify_id = req.body


})
