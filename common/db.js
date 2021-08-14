var mongoose = require('mongoose')
var url = 'mongodb://localhost/movieServer'
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.set('useCreateIndex', true)
mongoose.connection.on('error', function(error){
    console.log("数据库连接失败："+error)
})
mongoose.connection.on('open', function(){
    console.log("-------数据库连接成功！-------")
})
module.exports = mongoose