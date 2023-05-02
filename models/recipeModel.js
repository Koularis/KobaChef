const mongoose = require("mongoose")

const recipeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        servings: {
            type: String,
            required: true
        },
        preppingTime: {
            type: String,
            required: true
        },
        cookingTime: {
            type: String,
            required: true
        },
        ingredients: {
            type: Array,
            required: true
        },
        image: {
            type: String,
            required: false
        }
    }
)

const Recipe = mongoose.model("Recipe", recipeSchema)

module.exports = Recipe