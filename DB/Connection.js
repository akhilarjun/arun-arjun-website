import {connect, connection} from 'mongoose';
import {MongoClient} from 'mongodb';

const URI = process.env.MONGO_DB_URI;
const client = new MongoClient(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

async function ConnectDB () {
    // if (connection.readyState === 1) {
    //     console.log('========|> DB Connection already present')
    // } else {
    //     await connect(URI, {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true
    //     });
    //     console.log('=========|> DB Connection Established');
    // }
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