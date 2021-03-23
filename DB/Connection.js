import {MongoClient} from 'mongodb';

const URI = process.env.MONGO_DB_URI;
const client = new MongoClient(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

async function ConnectDB () {
    if (client.isConnected()) {
        console.log('Connection already exists');
    } else {
        console.log('Creating connection!');
        await client.connect();
    }
    const db = client.db("cms");
    return {db, client};
}

export {ConnectDB};