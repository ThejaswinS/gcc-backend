import mongoose from 'mongoose';

const membersSchema = new mongoose.Schema({
    name:{ type:String,required:true },
    domain:[{type:String,required:true}],
    photo:{type:String,required:true},
    linkedin:{type:String},
    github:{type:String},
    instagram:{type:String},
},
{
    timestamps:true,
});

export const MemberModel=mongoose.model('Members', membersSchema);
