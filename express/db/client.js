const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
    "mongodb+srv://banx:oAvTr4r0j5ITvxBN@student.lzzeopu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});

module.exports = client;
