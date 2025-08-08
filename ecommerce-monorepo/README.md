```
ecommerce-monorepo/
├── apps/
│   ├── ecommerce-host/
│   │   ├── .next/
│   │   ├── node_modules/
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── lib/
│   │   │   ├── store/
│   │   │   └── ...
│   │   ├── .gitignore
│   │   ├── eslint.config.mjs
│   │   ├── next.config.mjs
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── ...
│   └── admin-remote/
│       └── ...
├── libs/
│   ├── chat-widget/
│   │   └── ...
│   └── data-table/
│       └── ...
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

Cấu trúc này cho thấy rõ sự phân chia giữa các ứng dụng độc lập (`apps`) và các thư viện dùng chung (`libs`), đây là nền tảng cốt lõi của kiến trúc **monorepo** và **micro-frontend** .