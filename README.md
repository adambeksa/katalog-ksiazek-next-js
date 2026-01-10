# 📚 Katalog Książek

Aplikacja webowa do przeglądania katalogu książek, zbudowana w oparciu o **Next.js 16** z wykorzystaniem **React 19** i **TypeScript**.

## 🚀 Technologie

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Frontend:** React 19
- **Język:** TypeScript
- **Stylowanie:** SCSS
- **Zarządzanie stanem serwera:** [TanStack Query (React Query)](https://tanstack.com/query) v5
- **HTTP Client:** Axios

## 📁 Struktura projektu

```
src/
├── app/                    # Routing Next.js (App Router)
├── modules/                # Moduły funkcjonalne
│   ├── banner/             # Moduł banerów
│   ├── product/            # Moduł produktów (książek)
│   └── shared/             # Współdzielone komponenty i narzędzia
└── styles/                 # Globalne style SCSS
```

## 🛠️ Instalacja

1. **Sklonuj repozytorium:**
   ```bash
   git clone <url-repozytorium>
   cd katalog-ksiazek-next-js
   ```

2. **Zainstaluj zależności:**
   ```bash
   npm install
   ```

## ▶️ Uruchomienie

### Tryb deweloperski

```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem [http://localhost:3000](http://localhost:3000).

### Build produkcyjny

```bash
npm run build
npm start
```

## 📜 Skrypty

| Komenda | Opis |
|---------|------|
| `npm run dev` | Uruchomienie serwera deweloperskiego |
| `npm run build` | Budowanie wersji produkcyjnej |
| `npm start` | Uruchomienie serwera produkcyjnego |
| `npm run lint` | Sprawdzenie kodu za pomocą ESLint |

## 🧩 Moduły

### Product
Główny moduł aplikacji odpowiedzialny za wyświetlanie i zarządzanie katalogiem książek.

### Banner
Moduł obsługujący banery promocyjne i informacyjne.

### Shared
Współdzielone komponenty UI (Header, Footer, Navigation) oraz narzędzia używane w całej aplikacji.

## 📝 Licencja

Projekt prywatny.
