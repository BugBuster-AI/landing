# BugBuster landing

Проект: React + TypeScript + Vite лендинг для BugBuster.

## Требования

- Node.js 22+
- npm 10+

## Установка

```bash
npm ci
```

## Разработка

```bash
npm run dev
```

Откройте URL, который выведет Vite (обычно `http://localhost:5173`).

## Сборка

```bash
npm run build
```

Готовые файлы появятся в `dist/`.

## Предпросмотр (preview)

```bash
npm run preview
```

## GitHub Actions

В репозитории есть workflow `landing/.github/workflows/build.yml`, который запускает:
- `npm ci`
- `npm run build`

## Брендинг и ресурсы

Логотипы подтянуты из исходного кода BugBuster в `landing/public/assets/bugbuster/*.svg`.
Тексты и URL (GitHub репозиторий и Telegram канал) находятся в `landing/src/landing/content.ts`.
