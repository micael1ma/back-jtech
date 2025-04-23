const User = require('../model/user');

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new User({
    name,
    email,
    password,
  });
  await newUser.save();

  res.json({
    message: 'New User created',
    newUser,
  });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  await User.findByIdAndUpdate(id, { name, email, password });
  const updatedUser = await User.findById(id);

  res.json({
    message: 'User updated',
    updatedUser,
  });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const deletedUser = await User.findByIdAndDelete(id);

  res.json({
    message: 'User deleted',
    deletedUser,
  });
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
