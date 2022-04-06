const { name } = require('ejs');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://richardgitonga:1Quality@cluster0.igm2h.mongodb.net/darkroom?retryWrites=true&w=majority');

const imagesSchema = {
    
    name: String,
    size: String,
    path: String


}

const Image = mongoose.model('Image', imagesSchema);

app.get('/', (req,res) =>{

    Image.find({}, function(err, images, size) {
        res.render('index',{
            imagesList: images,
            imageSize: size

        })
        
    })


    // res.send('working')
    // let name = 'richard'
    // res.render('index', {
    //     username:name
    // });
//     (when we want to render a  separate index.html file)
    // res.sendFile(__dirname + '/index.html') 
    
})

app.listen(4000, function(){
    console.log('serve is running on port 4000')
})