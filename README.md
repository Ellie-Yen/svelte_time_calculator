# ⏱️ time calculator

This is a **Svelte 5 + SvelteKit** time calculator application with **TypeScript** and **Tailwind CSS v4**.

## 🚀 Live Demo

👉 View the app on GitHub Pages (TODO)

## ✨ Features

- Timestamp & Readable Date Conversion (TODO)
  Convert between UNIX timestamps and human-readable dates.

- Timezone Selection (TODO)
  Choose your desired timezone for both input and output conversions.

- Flexible Date Calculations
  Perform time-based arithmetic using natural expressions like:
  - now + 3 days
  - yesterday
  - now - 15 days 6 hr
    Both the input and result are displayed in timestamp and readable date formats.

## 🧰 Tech Stack

Svelte – Lightweight, fast, and reactive front-end framework. [`sv`](https://github.com/sveltejs/cli).
GitHub Pages – Continuous deployment from main branch for seamless updates.

## 💡 Why Svelte?

While experienced with React, this project was an opportunity to explore Svelte’s simpler and more expressive approach to building user interfaces.

## file structure

```
  src/
  ├── components/
  │   ├── ui/                          # Pure UI components
  │   │   ├── Button.svelte
  │   │   ├── Input.svelte
  │   │   └── Label.svelte
  │   ├── forms/                       # Form components (controlled)
  │   │   ├── TimestampInput.svelte
  │   │   ├── DateInput.svelte
  │   │   └── DurationInput.svelte
  │   └── containers/                  # Container components
  │       ├── TimestampCard.svelte
  │       └── ActionButtonGroup.svelte
  ├── lib/
  │   ├── stores/                      # State management
  │   │   └── timestamp.svelte.ts
  │   └── types/                       # Type definitions
  │       └── timestamp.ts
  ├──routes/
  │   └── +page.svelte                 # Page component (state owner)
  └── utils/
      └── converters.ts                # Utils
      └── formators.ts
```

##

- Development server

```bash
pnpm run dev
# or with browser opening
pnpm run dev -- --open
```

- Build and deployment

```bash
pnpm run build
pnpm run preview  # Preview production build
```
