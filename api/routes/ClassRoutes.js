import { Router } from "express";
const router = Router();
import mongoose from "mongoose";
import Classes from '../models/ClassModel.js';

router.get("/", async (req, res, next) => {
    const datas = await Classes.find();
    res.json(datas)

});

router.post('/', async (req, res, next) => {
    const data = {
        ClassID: req.body.ClassID,
        ClassName: req.body.ClassName,
        NumberStudent: 0,
        StudentAmount: req.body.StudentAmount,
        Teacher: req.body.Teacher
    }

    Classes.create(data, function(err, small){
        if (err) console.log(err);
    })

    res.json({
        status: 'successed'
    })
})

export default router;