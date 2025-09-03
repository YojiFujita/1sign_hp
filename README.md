# Auto HTML Project

静的な HTML/CSS/SVG を Netlify で公開するための最小構成。

## 構成
- index.html — デザイン変換済み HTML
- style.css, vars.css — スタイル
- *.svg / *.png — 画像アセット
- main.js — 動作追加用（`index.html` 末尾で読み込み）
- netlify.toml — Netlify 設定（ビルド不要、ルート公開）

## デプロイ手順（概要）
1. GitHub に新規リポジトリを作成
2. ローカルから初回 push
3. Netlify で GitHub リポジトリを選択して Import
   - Build command: 空欄
   - Publish directory: `/`（プロジェクト直下）
4. 以降、変更を push すると自動で再デプロイ

## 開発メモ
- JS は `main.js` に追記してください。
- SPA 化する場合は `netlify.toml` のリダイレクト設定を有効化。


