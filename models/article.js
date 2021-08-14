// 引入相关的文件和代码包
var mongoose = require('../common/db')
// 数据库的数据集
var article = new mongoose.Schema({
    articleTitle: String,
    articleContext: String,
    articleTime: String
})
// 通过ID查看
article.statics.findByArticleId = function(id, callBack){
    this.find({_id: id}, callBack)    
}
// 找到所有
article.statics.findAll = function(callBack){
    this.find({}, callBack)
}

var articleModel = mongoose.model('article', article)
module.exports = articleModel