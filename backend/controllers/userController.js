import asyncHandler from "..//middleware//asyncHandler.js";
import User from "..//routers//userRoutes.js";
const authUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});
const logoutUser = asyncHandler(async (req, res) => {
  res.send("Logout  user");
});
const getUserProfile = asyncHandler(async (req, res) => {
  res.send(" user profile");
});
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});
const getUsers = asyncHandler(async (req, res) => {
  res.send("get user profile");
});
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user");
});
const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by id");
});
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});
export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
