# Interactive Card Details Form

This project is a React application built with Vite. It features an interactive credit card details form with live preview and validation.

## Features

- **Live Card Preview:** See your card details update in real-time as you type.
- **Form Validation:** Input fields for cardholder name, card number, expiration date, and CVC with validation and error messages.
- **Responsive Design:** Looks great on both desktop and mobile devices.
- **Modern Stack:** Built with React 19, Vite, and Tailwind CSS.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn

## Tech Stack

- React 19
- Tailwind v4
- Vite
- ESLint
- pnpm

## Folder Structure

```
my-app/
├── public/
│   └── ...static assets...
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── CardDetails.jsx
│   │   └── CardPreview.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── README.md
└── ...other config files...
```

### Installation

1. Clone the repository:

   ```sh
   git clone <your-repo-url>
   cd my-app
   ```

2. Install dependencies:

   ```sh
   pnpm install
   # or
   npm install
   ```

### Running the App

Start the development server:

```sh
pnpm run dev
# or
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Building for Production

```sh
pnpm run build
# or
npm run build
```
Preview the production build:

```bash
pnpm run preview
```

The preview will be available at `http://localhost:4173`.

## Project Structure

- `src/components/CardDetails.jsx` – Card details form with validation
- `src/components/CardPreview.jsx` – Live card preview
- `src/App.jsx` – Main app component
- `public/` – Static assets

## Customization

You can customize styles using [Tailwind CSS](https://tailwindcss.com/). 
Assets are located in `src/assets/images/`.

## License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/).*