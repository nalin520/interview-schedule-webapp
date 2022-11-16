const mongoose = require('mongoose');  //importing mongoDb

const Schema = mongoose.Schema;

const interviewSchema = new Schema({
  id:{type:String , required:true},
  name: { type: String, required: true },
  timein: { type: String, required: true },
  timeout: { type: String, required: true },
}, {
  timestamps: true,
});

// const userSchema = new Schema({
//   email :{ type:String, required:true},
//   name:{type:String, required:true},
//   resume:{type:String,required:true}
// })

const interview = mongoose.model('interview', interviewSchema);

module.exports = interview;