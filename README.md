# Persian Banking App UI

A React + TypeScript application that replicates a Persian banking app home screen with a modern, clean design.

## Features

- **Header Section**: Dark navy background with title "خانه" and navigation icons
- **Balance Display**: Large balance amount with "موجودی" label and eye icon
- **Action Buttons**: Two circular buttons for "گزارش مالی" and "شارژ حساب"
- **Transaction List**: White rounded panel with transaction items
- **Bottom Navigation**: Fixed bottom bar with 5 navigation icons
- **Responsive Design**: Centered mobile-first layout (max-width: 428px)

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS Modules
- Lucide React (for icons)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── BalanceSection.tsx
│   ├── ActionButtons.tsx
│   ├── TransactionItem.tsx
│   └── BottomNav.tsx
├── pages/
│   └── HomePage.tsx
├── styles/
│   ├── homepage.module.css
│   ├── header.module.css
│   ├── balanceSection.module.css
│   ├── actionButtons.module.css
│   ├── transactionItem.module.css
│   └── bottomNav.module.css
├── App.tsx
└── main.tsx
```

## Design Details

- **Header Background**: `#0B1E46` (Dark Navy)
- **Primary Accent**: `#FFD700` (Yellow/Gold)
- **Transaction Highlight**: `#FFF9C4` (Light Yellow)
- **Text Colors**: White for header, Dark gray for content
- **RTL Support**: Full right-to-left layout for Persian text

## Notes

- The page is designed to match a mobile banking app interface
- All text is in Persian (Farsi)
- The layout is responsive and centered
- Bottom navigation is fixed at the bottom of the screen

# formTest
