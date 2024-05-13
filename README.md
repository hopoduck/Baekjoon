# 백준 스타터킷

해당 레포는 백준 코딩테스트를 할 때 사용할 수 있는 레포입니다.

## 상세

Node.js를 사용하여 코딩테스트를 할 때 사용할 수 있으며 서버를 실행하고 파일을 수정하거나 생성하면 자동으로 마지막 생성/수정파일을 읽어 실행합니다.

## 설치 방법

사용하는 패키지 매니저로 디펜던시를 설치합니다.

```bash
pnpm install
```

그 후 `dev`명령어를 실행합니다.

```bash
pnpm dev
```

그러면 자동으로 `src/`경로에 있는 `.js`파일을 확인하고, 마지막으로 생성/수정 된 파일을 실행합니다.