# DailyAlly

DailyAlly is a modern, responsive landing page for a local services platform. It is built with React + Vite and styled with Tailwind CSS v4.

The app showcases the full marketing flow for the product:

- Hero and value proposition
- Service categories
- How it works flow
- Trust/safety section
- Provider recruitment CTA
- Testimonials carousel
- Waitlist banner
- FAQ
- Footer and floating quick actions

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- PostCSS + Autoprefixer
- Lucide React (icons)

## Features

- Fully componentized React UI
- Responsive layouts for mobile, tablet, and desktop
- Dark mode toggle with persistence using localStorage
- Smooth scroll behavior for in-page navigation
- Auto-scrolling testimonials row with hover-to-pause behavior
- Asset-based visuals for branding and section illustrations

## Project Structure

```text
.
|-- img/                     # Local image assets (logo, people, hero graphics, etc.)
|-- public/                  # Public static assets
|-- src/
|   |-- components/          # Page sections and reusable UI pieces
|   |   |-- Navbar.jsx
|   |   |-- Hero.jsx
|   |   |-- PopularCategories.jsx
|   |   |-- HowItWorks.jsx
|   |   |-- WhyDailyAlly.jsx
|   |   |-- ProviderCTA.jsx
|   |   |-- Testimonials.jsx
|   |   |-- WaitlistBanner.jsx
|   |   |-- FAQ.jsx
|   |   |-- Footer.jsx
|   |   |-- FloatingActions.jsx
|   |
|   |-- App.jsx              # Main page composition + dark mode state
|   |-- main.jsx             # React app bootstrap
|   |-- index.css            # Tailwind import + custom theme variables + animations
|-- index.html               # Vite entry HTML
|-- postcss.config.js        # PostCSS/Tailwind config wiring
|-- vite.config.js           # Vite config
|-- package.json             # Scripts and dependencies
```

## Prerequisites

Install one of the following:

- Node.js 18+ (recommended: latest LTS)
- npm, pnpm, or yarn

## Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd pro
```

### 2. Install dependencies

Using pnpm:

```bash
pnpm install
```

Using npm:

```bash
npm install
```

Using yarn:

```bash
yarn install
```

## Running the Project

Start development server:

Using pnpm:

```bash
pnpm dev
```

Using npm:

```bash
npm run dev
```

Using yarn:

```bash
yarn dev
```

Vite will print a local URL (commonly http://localhost:5173).

## Available Scripts

From `package.json`:

- `dev` -> Starts the Vite development server
- `build` -> Creates a production build in `dist/`
- `preview` -> Serves the production build locally

Examples:

```bash
pnpm build
pnpm preview
```

## Styling and Theme

Tailwind CSS v4 is imported in `src/index.css`.

Custom tokens are defined for:

- Font family
- Brand accent colors
- Primary colors

Dark mode behavior:

- Controlled in `src/App.jsx`
- Toggles the `dark` class on `<html>`
- Persists selected mode in `localStorage` under key `theme`

## Icons and Images

- Icons are from `lucide-react`
- Image assets are stored in `img/`
- Components import local image assets directly for section visuals and avatars

## Build and Deployment

### Create production bundle

```bash
pnpm build
```

Output is generated in `dist/`.

### Preview production build locally

```bash
pnpm preview
```

### Deploy options

The generated `dist/` folder can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- Azure Static Web Apps
- Any static hosting provider

## Development Notes

- Keep section components focused and presentational where possible
- Store reusable visual tokens in `src/index.css`
- Keep assets in `img/` and import them explicitly in components
- Use semantic headings and `alt` text for accessibility

## Troubleshooting

### Port already in use

Run dev server on another port:

```bash
pnpm dev -- --port 5174
```

### Dependency issues

Delete `node_modules` and lockfile (if needed), then reinstall:

```bash
rm -rf node_modules
pnpm install
```

On Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
pnpm install
```

## Roadmap Ideas

- Connect waitlist form to backend API
- Replace placeholder testimonial text with real user data
- Add route-based pages for services and provider onboarding
- Add unit and component tests
- Add CI for lint/build checks

## License

No license file is currently included. Add a `LICENSE` file if you plan to open-source the project.
