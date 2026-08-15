# LP Design Portfolio

個人店・小規模店舗向けLP制作のポートフォリオサイトです。GitHub Pagesでの公開を想定しています。

## 構成

```
lp-projects/
├── index.html                 # ポートフォリオのハブページ（実績一覧・強み・お問い合わせ）
├── portfolio-komorebi/        # 実績サンプル1：喫茶 木もれ日（カフェ）
├── portfolio-nail-rosette/    # 実績サンプル2：Nail Salon Rosette（ネイルサロン）
├── lp-template/                # 制作のベースにしているLPテンプレート（非公開でも可）
├── CROWDWORKS_PROFILE.md       # クラウドワークス等のプロフィール／ポートフォリオ登録用の文面
└── CROWDWORKS_PROPOSAL_TEMPLATE.md  # 案件応募（提案文）テンプレート
```

## 公開前チェックリスト

- [ ] `index.html` 内の「LP Design Portfolio」表記を屋号・お名前に差し替える
- [ ] `#contact` セクションの連絡先メールアドレスを確認する
- [ ] 各サンプルの `<title>` / OGP画像URL（`https://example.com/...`）は架空のままでOKだが、気になる場合は調整する
- [ ] スマホ表示を実機またはブラウザの端末シミュレータで確認する

## GitHub Pagesで公開する手順

1. GitHub上で新しいリポジトリを作成する（例: `lp-portfolio`）。READMEなどは追加せず空のリポジトリでOK。
2. このフォルダをリポジトリに紐づけてpushする。

   ```bash
   cd "C:\Users\User\Desktop\lp-projects"
   git remote add origin https://github.com/<あなたのユーザー名>/<リポジトリ名>.git
   git branch -M main
   git push -u origin main
   ```

3. GitHubのリポジトリ画面で **Settings → Pages** を開く。
4. "Build and deployment" の Source を **Deploy from a branch** にし、Branch を `main` / `/(root)` に設定して保存。
5. 数分後に `https://<あなたのユーザー名>.github.io/<リポジトリ名>/` で公開される。
6. 独自ドメインを使う場合は同じPages設定画面の「Custom domain」から設定する（DNS側の設定も別途必要）。

公開後、`CROWDWORKS_PROFILE.md` や提案文の「ポートフォリオURL」欄にこのURLを記載してください。
