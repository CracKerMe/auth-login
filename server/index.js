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

const genToken = (uid) => {
  return jwt.sign({ uid }, process.env.SECRET, {
    expiresIn: '1d',
  });
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
  const { email, password } = req.body;
  if (email === 'admin@example.com' && password === '123456') {
    // 登录成功
    const uid = '123456';
    const token = genToken(uid);
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

app.get('/api/verify', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.send({
        code: 401,
        message: '错误的邮箱或密码',
        data: {},
      });
    }
    return res.json({ message: 'Token Ready', data: { user: decoded }, code: 0 });
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
