const Repair = require('../model/repair');

const getAllRepairs = async (req, res) => {
  const repairs = await Repair.find();
  res.json(repairs);
};

const createRepair = async (req, res) => {
  const { name, price, repairTime, imgURL, deviceId } = req.body;

  const newRepair = new Repair({
    name,
    price,
    repairTime,
    imgURL,
    deviceId,
  });
  await newRepair.save();

  res.json({
    message: 'New Repair created',
    newRepair,
  });
};

const updateRepair = async (req, res) => {
  const { id } = req.params;
  const { name, price, repairTime, imgURL, deviceId } = req.body;

  await Repair.findByIdAndUpdate(id, {
    name,
    price,
    repairTime,
    imgURL,
    deviceId,
  });
  const updatedRepair = await Repair.findById(id);

  res.json({
    message: 'Repair updated',
    updatedRepair,
  });
};

const deleteRepair = async (req, res) => {
  const { id } = req.params;
  const deletedRepair = await Repair.findByIdAndDelete(id);

  res.json({
    message: 'Repair deleted',
    deletedRepair,
  });
};

module.exports = { getAllRepairs, createRepair, updateRepair, deleteRepair };
