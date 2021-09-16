const mongoose = require('mongoose');


const NinjaSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "Name is required!"],
        minlength: [2, "Name must be at least 2 characters long"]
    },
    numProjects: {
        type: Number,
        required:[true, "Number of Projects is required!"]
    },
    graduationDate: {
        type: Date,
        required: [true, "Grad date is required"]
    },
    isVeteran: {
        type: Boolean
    },
    profilePicUrl:{
        type:String,
        required: [true, "Profile pic is required"]
    }

})

//register the above code at a table in mongodb
const Ninja = mongoose.model("Ninja", NinjaSchema )

module.exports = Ninja;