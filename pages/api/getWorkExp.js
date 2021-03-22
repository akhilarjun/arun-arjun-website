import {ObjectID} from 'mongodb';
import {ConnectDB} from "../../DB/Connection"

const COLLECTION_NAME = "arun_about_workexps";

export default async (req, res) => {
    if (req.method === 'GET') {
        const {db} = await ConnectDB();
        let respo = await db.collection(COLLECTION_NAME).find().toArray();
        res.status(200).json({
            data: respo
        })
    } else if (req.method === 'POST') {
        // ConnectDB();
        // const updateReq = JSON.parse(req.body);
        // updateReq.map(async (workExp) => {
        //     if (workExp.new) {
        //         delete workExp._id;
        //         await new WorkExperience(workExp).save();
        //     }else if (workExp.updated) {
        //         await WorkExperience.updateOne({_id: workExp._id}, {
        //             $set: {
        //                 duration: workExp.duration,
        //                 workPlace: workExp.workPlace,
        //                 workSummary: workExp.workSummary,
        //                 designation: workExp.designation
        //             }
        //         });
        //     }
        // });
        const {db} = await ConnectDB();
        const updateReqBody = JSON.parse(req.body);
        updateReqBody.map(async (updateReq) => {
            if (updateReq.new) {
                delete updateReq._id;
                delete updateReq.new;
                await db.collection(COLLECTION_NAME).insertOne(updateReq);
            } else if (updateReq.updated) {
                delete updateReq.updated;
                await db.collection(COLLECTION_NAME).updateOne({_id: ObjectID(updateReq._id)}, {
                    $set: {
                        duration: updateReq.duration,
                        workPlace: updateReq.workPlace,
                        workSummary: updateReq.workSummary,
                        designation: updateReq.designation
                    }
                });
            } else if (updateReq.delete) {
                delete updateReq.delete;
                await db.collection(COLLECTION_NAME).deleteOne({_id: ObjectID(updateReq._id)});
            }
        });
        res.status(200).json({response: 'OK'});
    }
}