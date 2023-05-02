const express=require("express")
const mongoose=require("mongoose")
const path = require('path')
const Recipe = require("./models/recipeModel")
const app = express()

app.use(express.json())

const uri = "mongodb+srv://kobachef:kobachefmeowmeow@kobachef.jn4pidn.mongodb.net/?retryWrites=true&w=majority"

app.get('/', function(req, res){

    var options = {
        root: path.join(__dirname, 'public')
    }

    res.sendFile('index.html', options, function(err){
        // console.log(err)
    })
})

app.use(express.static('public'))

app.use(express.urlencoded({ extended: false }))

app.get("/recipes", async(req, res)=> {
    try{
        const recipes = await Recipe.find({})
        res.status(200).json(recipes)
    }catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.post("/recipes", async(req, res)=> {
    try{
        const recipe = await Recipe.create(req.body)
        res.status(200).json(recipe)
    }catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

mongoose.set("strictQuery", false)
mongoose.connect(uri)
.then(()=> {
    console.log("Connected to MongoDB");
    app.listen(8080, ()=> {console.log("Server started on port 8080")})
}).catch((error)=> {
    console.log(error)
})

