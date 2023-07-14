import express from 'express';
const router=express.Router();

import Product from '..//models//productModel.js';
import asyncHandler from '../middleware/asyncHandler.js'
import {authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,} from '..//controllers//userController.js';


router.route('/').get(getUsers).post(registerUser);
router.post('/login',authUser);
router.post('/logout',logoutUser);

router.route('/profile').get(getUserProfile).put(updateUserProfile);

router.post('/:id').delete(deleteUser).get(getUserById).put(updateUser);

export default router;