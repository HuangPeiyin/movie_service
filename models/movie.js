// 引入数据库的连接模块
var mongoose = require('../common/db')
// 数据库的数据集
var movie = new mongoose.Schema({
    movieName: String,
    movieImg: String,
    movieVideo: String,
    movieDownload: String,
    movieTime: String,
    movieNumSuppose: Number,
    movieNumDownload: Number,
    movieMainPage: Boolean
})
// 数据操作的一些常用方法
movie.statics.findById = function(movie_id, callBack){
    this.find({_id: movie_id}, callBack)
}
movie.statics.findAll = function(callBack){
    this.find({}, callBack)
}
var movieModel = mongoose.model('movie', movie)
module.exports = movieModel