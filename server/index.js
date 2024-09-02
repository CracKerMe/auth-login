import express from 'express';
import session from 'express-session';
import fs from 'node:fs';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('loginPage'));
app.use(
  session({
    secret: process.env.SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 一周后过期
    },
  }),
);
const genToken = (appId) => {
  return jwt.sign({ appId }, appMapping[appId].secretKey);
};
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const appMapping = {
  // 应用A的ID
  HEnisMovHy: {
    url: 'http://localhost:5174', // 应用A的地址
    appSecretKey: 'j6E5t$xEzNuOyYeb',
    token: '',
  },
  // 应用B的ID
  UsqfCs78rM: {
    url: 'http://localhost:5175', // 应用B的地址
    appSecretKey: '$Wk!3YecMIXu2&i1',
    token: '',
  },
};

// 处理登录请求
app.get('/login', (req, res) => {
  if (req.session.email) {
    // 已登录
    const appId = req.query.appId;
    const url = appMapping[appId].url;
    let token;
    // 登录过如果存过token就直接取 没有存过就生成一个 因为可能有多个引用A登录过读取Token   B没有登录过生成Token 存入映射表
    if (appMapping[appId].token) {
      token = appMapping[appId].token;
    } else {
      token = genToken(appId);
      appMapping[appId].token = token;
    }
    res.redirect(url + '?token=' + token);
    return;
  }
  const html = fs.readFileSync(`./loginPage/index.html`, 'utf-8');
  res.send(html);
});
//提供protectd get接口 重定向到目标地址
app.get('/protectd', (req, res) => {
  const { appId, email, password } = req.query; // 获取应用标识
  const url = appMapping[appId].url; // 读取要跳转的地址
  const token = genToken(appId); // 生成token
  req.session.email = email; // 存储用户名称 表示这个邮箱已经登录过了 下次无需登录
  appMapping[appId].token = token; // 根据应用存入对应的token
  res.redirect(url + '?token=' + token); // 定向到目标页面
});

app.listen(3333, () => {
  console.log('Server is running on http://localhost:3333');
});
