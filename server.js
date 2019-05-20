var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  json = require('./models/jsonModel'), //created model loading here
  bodyParser = require('body-parser');
var cors = require('cors');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var fs = require('fs');

app.use(cors());
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/profile', upload.single('file'), function (req, res, next) {
  var newjson = req.file;
  var secjson = req.body;
  const dir = './uploads'

  async function readFile(){
    console.log(newjson);
    var exists = await req.file.filename.exists;
    var newjsoninfo = fs.readFileSync('./uploads/'+req.file.filename)
    fs.writeFileSync('horarios.json', newjsoninfo, function (err) {
    if (err) res.send(err);
    res.send('Saved')
  }); 
  }

  if(newjson == null){
    console.log(newjson);
    console.log('error')
    res.status(400).send('Empty request')
  }else{
    readFile();

    fs.readdir(dir, (err, files) => {
      console.log(files)
      var len = files.length;
      if(len > 1){
        for(var i = len; i>0; i--){
          if(i > 1){
            fs.unlink('./uploads/'+files[i-1], (err) => {
              if (err)
                res.send(err)
            });
          }
        }
      }
    });
  }
     
  res.status(200).send('Well Done')   
})

var routes = require('./routes/jsonRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
