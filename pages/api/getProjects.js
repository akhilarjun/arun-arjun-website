import {ObjectID} from 'mongodb';
import {ConnectDB} from "../../DB/Connection"

const COLLECTION_NAME = "arun_work_projects";

export default async (req, res) => {
    if (req.method === 'GET') {
        const {db} = await ConnectDB();
        let respo = await db.collection(COLLECTION_NAME).find().toArray();
        res.status(200).json({
            data: respo
        })
    } else if (req.method === 'POST') {
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
                        imgSrc: updateReq.imgSrc,
                        videoSrc: updateReq.videoSrc,
                        tags: updateReq.tags,
                        caption: updateReq.caption
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