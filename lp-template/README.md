# HP / LP 制作用テンプレート（プレーンHTML/CSS + Tailwind CDN）

ビルドツール不要。ファイルを開くだけで動く、案件量産用の雛形です。
新しい案件が来たら、このフォルダごとコピーして書き換えていく運用を想定しています。

## フォルダ構成

```
lp-template/
├── index.html          … トップページ（LP本体：Hero/特徴/お客様の声/料金/FAQ/CTA）
├── about.html           … 会社概要ページ（複数ページ構成のHP案件用サンプル）
├── contact.html          … お問い合わせフォームページ
├── assets/
│   ├── css/style.css     … Tailwindで足りない部分のカスタムCSS
│   ├── js/main.js       … モバイルメニュー・フォームバリデーション等
│   └── img/              … 画像を入れる場所
└── components/            … 各セクションの部品（新規ページ作成時にコピペする用）
    ├── header.html
    ├── footer.html
    ├── hero.html
    ├── features.html
    ├── pricing.html
    ├── faq.html
    ├── cta.html
    └── contact-form.html
```

`index.html` / `about.html` / `contact.html` は完成品として単体で開けます。
`components/` の中身は「新しいページを作るときに部品として貼り付けるための予備パーツ」です。

## 新しい案件で使う手順

1. `lp-template` フォルダをまるごとコピーし、案件名のフォルダにリネームする
2. 全ファイルを開き、`【編集】` を検索して該当箇所を書き換える（VS Codeなら「フォルダ内を検索」で `【編集】` を一括確認すると漏れがない）
3. `index.html` 内の `tailwind.config` の `colors.brand.DEFAULT` をクライアントのブランドカラーに変更する（`assets/css/style.css` の `--brand-primary` も合わせる）
4. `contact.html` のフォーム `action` を実際の送信先に差し替える
   - 手軽なのは [Formspree](https://formspree.io)（無料枠あり）。サインアップしてフォームIDを取得し、`action="https://formspree.io/f/xxxxxxx"` に貼り替えるだけ
5. 画像を `assets/img/` に入れ、`img-placeholder` のdivを `<img>` タグに差し替える
6. セクションを増減したいときは `components/` の該当ファイルの中身を `index.html` にコピペ、またはブロックごと削除する
7. `favicon.ico` と OGP画像（`assets/img/ogp.jpg`）を用意して差し替える

## SEO関連で必ず確認する項目

`index.html` / `about.html` / `contact.html` の `<head>` 内：

- `<title>` と `meta description`（ページごとに内容を変える）
- `og:title` / `og:description` / `og:image` / `og:url`
- `canonical` のURL（本番ドメインに変更）
- `lang="ja"` はそのままでOK（日本語サイトの場合）

## デプロイ（公開）方法の例

- 一番手軽：[Netlify](https://www.netlify.com) にフォルダをドラッグ&ドロップ、または [Vercel](https://vercel.com) にGitリポジトリを連携
- 独自ドメインを使う場合はNetlify/Vercel側のドメイン設定でDNSを向ける
- 保守運用まで受けるなら、クライアントのレンタルサーバーにFTPでアップロードするケースもある

## 単価あたりの作業時間を圧縮するコツ

- このフォルダをそのままGitのテンプレートリポジトリにしておくと、案件開始が「clone → 文字入れ替え」だけで済む
- ブランドカラーと画像だけ差し替えれば見た目が一変するよう、コンポーネント側は色をTailwindの `brand` トークン経由でしか使わないようにしてある
- フォームは毎回Formspreeの新規フォームを発行するだけで動くので、バックエンド開発が発生しない
- 納品前チェックリスト（推奨）：
  - [ ] スマホ幅（375px程度）で崩れがないか
  - [ ] フォーム送信テスト（実際に1件送ってみる）
  - [ ] 全リンク・アンカーの遷移確認
  - [ ] title / description / OGP画像の差し替え漏れがないか
  - [ ] 著作権のある画像・フォントを無断使用していないか
