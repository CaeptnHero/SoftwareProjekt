var mongo = require ("mongodb").MongoClient;
mongo.connect ("mongo://localhost:27017"), {userNewUrlParser: true},
function (error, client) {
    if (error) {
        throw error;
    }else{
        const collUser = client.db ("newDB").collection("user");
        client.close();
    }
}