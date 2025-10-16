# 21 Laws of Leadership Evaluation

A professional single-page React application for sales managers to complete the 21 Laws of Leadership evaluation.

## Features

- ✅ Clean, modern UI with Poppins font and branded colors (blue/orange/white)
- ✅ Complete evaluation form for all 21 laws (3 questions each)
- ✅ Clear rating scale (0 = Never, 1 = Rarely, 2 = Occasionally, 3 = Always)
- ✅ Progress tracking with visual indicator
- ✅ Manager name and date collection
- ✅ Downloadable HTML report (convertible to PDF)
- ✅ No data persistence - all data stored in component state only
- ✅ **Important: PDF output does NOT display any calculated scores**
- ✅ Fully responsive design for mobile and desktop

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

## How to Use

1. Enter your name and the evaluation date
2. Complete all 63 questions (21 laws × 3 questions each) using the 0-3 rating scale
3. Track your progress with the progress bar
4. Once all questions are answered, click "Download Evaluation Report"
5. Open the downloaded HTML file in your browser
6. Use **Print to PDF** (Ctrl+P or Cmd+P) to save as a PDF document

## Technology Stack

- React 18
- Vite
- Poppins Font (Google Fonts)
- Pure CSS (no external CSS frameworks)

## Design Specifications

### Colors
- Primary Blue: #1e40af
- Secondary Blue: #3b82f6
- Primary Orange: #ff6b35
- Secondary Orange: #ff8c61
- Background: Light blue/purple gradient

### Typography
- Font Family: Poppins
- Weights: 300 (light), 400 (regular), 600 (semi-bold), 700 (bold)

## License

Proprietary - For internal use only

