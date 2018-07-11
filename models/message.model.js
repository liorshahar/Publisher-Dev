var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/* Create and exports book schema*/

var Message = new Schema({
	_id: Schema.Types.ObjectId,
    UserId: String,
    Inbox:[{messageId: Number,SenderId:Number , date:Date , message:String}],
    Sent:[{messageId: Number,reciverID:Number , date:Date , message:String}]

},{collection : 'messages'});

/* Exporting the schema*/
mongoose.model('Message' , Message);
module.exports = mongoose.model('Message');