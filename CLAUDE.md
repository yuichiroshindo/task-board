# CLAUDE.md

このファイルは、このリポジトリで Claude Code (claude.ai/code) が作業する際のガイドラインです。

## プロジェクト概要

task-board: タスク管理ボードアプリケーション。(詳細は今後のREADME/設計ドキュメントに追記)

## デプロイ先

https://yuichiroshindo.github.io/task-board/

- `main` ブランチへのpushをトリガーに、GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) が自動でビルド・デプロイする。
- GitHubリポジトリの Settings > Pages で Source は `GitHub Actions` に設定済み。
- Vite の `base` は `/task-board/` (リポジトリ名) に設定している ([vite.config.js](vite.config.js))。リポジトリ名を変更する場合はここも合わせて変更すること。

## 技術スタック

- **フレームワーク**: React 19 (`react`, `react-dom`)
- **ビルドツール**: Vite 8 (`@vitejs/plugin-react`)
- **Lint**: oxlint
- **言語**: JavaScript (JSX)。TypeScriptは未導入。
- **スタイリング**: 素のCSS ([src/App.css](src/App.css), [src/index.css](src/index.css))。CSSフレームワークやCSS-in-JSは使用しない。
- **状態管理**: React標準の `useState` / `useEffect` のみ。外部の状態管理ライブラリは導入しない。
- **永続化**: `localStorage` にタスク一覧をJSONで保存 ([src/components/TaskBoard.jsx](src/components/TaskBoard.jsx))。バックエンド/DBは無し。

## コンポーネントの命名規約

- コンポーネントファイルは `PascalCase.jsx` ([src/components/TaskBoard.jsx](src/components/TaskBoard.jsx), [TaskForm.jsx](src/components/TaskForm.jsx), [TaskList.jsx](src/components/TaskList.jsx))。1ファイル1コンポーネントとし、ファイル名とコンポーネント名(および `export default`)を一致させる。
- コンポーネントは `src/components/` 配下に配置する。ルートの `App.jsx` はエントリーとしてのみ扱い、機能ロジックは持たせない。
- イベントハンドラをpropsとして渡す場合は `on + 動詞` 形式にする(例: `onAdd`, `onToggle`, `onDelete`)。コンポーネント内部の関数定義側は `動詞 + 対象` 形式にする(例: `addTask`, `toggleTask`, `deleteTask`)。
- CSSクラス名はkebab-case (例: `task-form`, `task-list`, `delete-button`)。状態を表すクラスは `done` のような形容詞1語を用いる。

## Git運用ルール

- **コードに変更を加えるたびに、コミットしてGitHubにプッシュすること。** 変更を作業ツリーに置いたままにせず、ひとつの作業(機能追加・修正など)が完了したタイミングで都度コミット・プッシュする。
- コミットメッセージは変更内容が分かるように簡潔に書く(「何を」ではなく「なぜ」を意識する)。
- pushする前に `git status` / `git diff` で変更内容を確認する。
- force push (`--force`)、`git reset --hard`、履歴の書き換えなど破壊的な操作は、ユーザーの明示的な許可なく行わない。
- 機密情報 (.env、認証情報など) を誤ってコミット・プッシュしないよう、追加前に内容を確認する。
- リモートは `origin` (GitHub) を使用する。ブランチ運用について特に指定がない限り、作業は `main` ブランチに対して行う。

## 開発コマンド

(セットアップが進み次第、ビルド・テスト・Lintコマンドをここに追記する)
