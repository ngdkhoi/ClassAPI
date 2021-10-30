import Classes from '../models/ClassModel.js';
import Connect from '../../db/connect.js';

export async function readClass(req, res) {
    const datas = await Classes.find()
    console.log(datas);
    //console.log(typeof JSON.stringify(datas));
    res.json({
        success: 'successed'
    })
}

export function addClass(){

}

