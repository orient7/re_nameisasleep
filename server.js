const express = require("express");
// const session = require('express-session');
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// ==============================
// 基本設定
// ==============================

// JSON形式のリクエストを受け取る
app.use(express.json());

// URLエンコードされたフォームデータを受け取る
app.use(express.urlencoded({ extended: true }));

// publicフォルダを公開フォルダに設定
app.use(express.static(path.join(__dirname, "public")));

// --- 404エラー時の別サイト遷移処理 ---
app.use((req, res, next) => {
    // 302 Found（一時的な移転）として外部サイトへリダイレクト
    res.redirect(302, '/0.html');
});

// --- session ---
// app.use(
//     session({
//         secret: process.env.SESSION_SECRET || "your-secret-key",
//         resave: false,
//         saveUninitialized: false,
//         isObserver: false, // 監視者フラグ（必要に応じてセッションに追加で保持）
//         cookie: {
//             httpOnly: true,
//             sameSite: 'lax',
//             secure: false, // https運用なら true
//         },
//     })
// );

// ==============================
// サーバー起動
// ==============================

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});