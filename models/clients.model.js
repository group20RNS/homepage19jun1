const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientsSchema = new Schema({
  clientname: { type: String, required: true },
  clientcontact: { type: String, required: true },
  clientaddress: { type: String, required: true },
  clientmode:{ type: String, required: true },
  clientsell:{ type: Number,default:0},
  clientBuy:{ type: Number,default:0},
  client_clients:{ type: Number,default:0},
  clientemailaddress:{type: String, required: true},
  clientimageurl:{type: String, required: true},
  prd:{type: String, required: true,default:"10lk"},
  clientbio:{type: String}
  
}, {
  timestamps: true,
});
const Client = mongoose.model('Client', clientsSchema);
module.exports = Client;
