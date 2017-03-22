var mongoose   = require('mongoose');
var Schema = mongoose.Schema;





// var opts = {
//     auth: {
//         authMechanism: 'MONGODB-CR', // 如果使用 SCRAM-SHA-1 认证则不需要此参数
//         authSource: 'admin'
//     }
// };
// var connection = mongoose.connect(dbUri, opts);

mongoose.connect('mongodb://127.0.0.1:27017/weatherapp');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'连接错误'));
db.once('open',function(callback) {
    console.log('MongoDB连接成功');
});

var weatherSchema = new Schema({
    name: String,
    value: Number,
    time: Date
});

const weatherModel = mongoose.model('Weather', weatherSchema);

module.exports = weatherModel;