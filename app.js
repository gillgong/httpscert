/**
 * 系统启动Node容器, 需要安装依赖包：
 *  npm install
 * 
 * @author Gill Gong
 * @date 2019-01-24
 */

const express = require('express')
const https = require('https')
const _ = require('lodash')
const fs = require('fs')

const PORT = 443

const options = {
  key: fs.readFileSync('httpscerts/private.key'),
  cert: fs.readFileSync('httpscerts/miky.pem')
};

const app = express()

app.get('/', function (req, res) {
  res.header('Content-type', 'text/html');
  return res.end('<h1>Hello, Secure World!</h1>');
});


https.createServer(options, app).listen(PORT, ()=>{

  console.log('https start!!')
})