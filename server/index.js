import express from 'express';
import cookieParser from 'cookie-parser';
import fs from 'node:fs';
import path from 'node:path';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(cookieParser('_token'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('loginPage'));

const genToken = (appId, uid) => {
  return jwt.sign({ appId, uid }, appMapping[appId].appSecretKey, {
    expiresIn: '1d',
  });
};

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
app.get('/api', (req, res) => {
  // 返回 api 状态信息
  res.json({
    code: 0,
    message: 'API is working, code: 0 meanings success',
  });
});

// 处理登录请求
app.post('/api/login', async (req, res) => {
  console.log(req.body);
  const { email, password, appId } = req.body;
  if (email === 'admin@example.com' && password === '123456') {
    // 登录成功
    const uid = '123456';
    const token = genToken(appId, uid);
    appMapping[appId].token = token;
    res.cookie('_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 1,
      httpOnly: true,
      signed: true,
    });
    res.send({
      code: 0,
      message: '登录成功',
      data: {
        token: token,
      },
    });
    return;
  }
  res.send({
    code: 401,
    message: '错误的邮箱或密码',
    data: {},
  });
});

// generate static page for get request
app.get('*', (req, res) => {
  const __dirname = path.resolve();
  res.sendFile(path.join(__dirname, 'loginPage', 'index.html'));
});

app.listen(3333, () => {
  console.log('Server is running on http://localhost:3333');
});
