const Device = require('../model/device');

const getAllDevices = async (req, res) => {
  const devices = await Device.find();
  res.json(devices);
};

const createDevice = async (req, res) => {
  const { name, imgURL } = req.body;

  const newDevice = new Device({
    name,
    imgURL,
  });
  await newDevice.save();

  res.json({
    message: 'New Device created',
    newDevice,
  });
};

const updateDevice = async (req, res) => {
  const { id } = req.params;
  const { name, imgURL } = req.body;

  await Device.findByIdAndUpdate(id, { name, imgURL });
  const updatedDevice = await Device.findById(id);

  res.json({
    message: 'Device updated',
    updatedDevice,
  });
};

const deleteDevice = async (req, res) => {
  const { id } = req.params;
  const deletedDevice = await Device.findByIdAndDelete(id);

  res.json({
    message: 'Device deleted',
    deletedDevice,
  });
};

module.exports = { getAllDevices, createDevice, updateDevice, deleteDevice };
