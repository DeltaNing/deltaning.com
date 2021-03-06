// 每日一句路由中所有的回调函数
var path = new Map();
var everydayDao = require('../dao/EverydayDao');
var timeUtil = require('../util/TimeUtil');
var respUtil = require('../util/WriteUtil');

function editEveryday(request, response) {
    if (!request.body) {
        return response.sendStatus(400);
    }
    // 将前端发来的数据插入到数据库
    everydayDao.insertEveryday(request.body.content, timeUtil.getNowDate(), function (result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "添加成功", null));
        response.end();
    });
}

function queryEveryday(request, response) {
    everydayDao.queryEveryday(function (result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "添加成功", result));
        response.end();
    });
}

path.set('/editEveryday', editEveryday);
path.set('/queryEveryday', queryEveryday);

module.exports.path = path;
