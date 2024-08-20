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
  })
);
const genToken = (appId) => {
  return jwt.sign({ appId }, appToMapUrl[appId].secretKey);
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
  if (req.session.username) {
    // 已登录
  }
  const html = fs.readFileSync(`./loginPage/index.html`, 'utf-8');
  res.send(html);
});
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
