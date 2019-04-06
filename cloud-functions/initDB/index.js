// 云函数入口文件
const cloud = require('wx-server-sdk')
const colors = require('./colors.js')
cloud.init()
const db = cloud.database()
const collection = db.collection("colorCard");
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  for(let color of colors){
    try{
    await collection.add({
      data:{
        description:'一张漂亮的色卡',
        time:new Date().getTime(),
        author:'javan',
        colors:color,
        zanNum:0,

      }
    })}
    catch(e){
      console.log(e)
    }
  }
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}