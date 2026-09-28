# Codex Practice

HTML、CSS、JavaScriptだけで作った、Codexの練習用Webサイトです。
Codexの簡単な紹介と、クリックするとメッセージが表示されるボタンを用意しています。

## 使い方

1. このリポジトリをダウンロードまたはクローンします。
2. `index.html`をWebブラウザで開きます。
3. 「クリックしてみる」ボタンを押すと、「Codexで作りました！」と表示されます。

ローカルサーバーを使う場合は、このディレクトリで次のコマンドを実行してください。

```bash
python3 -m http.server 8000
```

その後、ブラウザで <http://localhost:8000> を開きます。

## ファイル構成

- `index.html`: ページの内容
- `style.css`: ページのデザイン
- `script.js`: ボタンをクリックしたときの動作
