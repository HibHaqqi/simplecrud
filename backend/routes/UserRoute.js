import express from "express";
import {getUsers,
       getUsersById
    }  from "../controller/UserController.js";


const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);


export default router;