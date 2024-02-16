import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        default: ""
    }
})

const Notes = mongoose.model("notes", notesSchema)

export default Notes