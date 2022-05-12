var mongo = require("mongodb").MongoClient;
mongo.connect("mongo://localhost:27017"), { userNewUrlParser: true },
    function (error, client) {
        if (error) {
            throw error;
        } else {
            const collUser = client.db("newDB").collection("user");
            
            // Create Datensatz
            createData(colUser,
                [{ vorname: "Max", name: "Mustermann" }]);

            client.close();
        }
    };

function callBackFunction(result, message = "") {
    if (message !== "") {
        console.log(message + ":" + result);
    }
}