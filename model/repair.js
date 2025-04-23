const mongoose = require('mongoose');

const repairSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  repairTime: { type: String, required: true },
  imgURL: { type: String, required: true, unique: true },
  deviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Device',
    required: true,
  },
});

module.exports = mongoose.model('Repair', repairSchema);
