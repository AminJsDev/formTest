# React + TypeScript + Vite + Material-UI

A modern React application with Material-UI, featuring a clean component architecture and RTL support.

## Project Structure

```
src/
├── components/
│   ├── common/              # Reusable UI components
│   │   ├── ActionButton.tsx
│   │   └── BalanceCard.tsx
│   ├── layout/              # Layout components
│   │   ├── AppHeader.tsx
│   │   └── BottomNavigation.tsx
│   └── features/            # Feature-specific components
│       ├── ActionButtonsGroup.tsx
│       ├── TransactionList.tsx
│       ├── TransactionListItem.tsx
│       └── TransactionsBottomSheet.tsx
├── hooks/                   # Custom React hooks
│   └── useBottomSheet.ts
├── types/                   # TypeScript type definitions
│   └── transaction.ts
├── theme/                   # MUI theme configuration
│   └── theme.ts
└── pages/                   # Page components
    └── HomePage.tsx
```

## Features

- Material-UI components with custom theme
- RTL (Right-to-Left) support for Persian/Arabic
- Custom hooks for reusable logic
- TypeScript for type safety
- Modular component architecture
- Responsive design

## Getting Started

```bash
npm install
npm run dev
```

## Architecture Benefits

- **Separation of Concerns**: Components are organized by purpose (common, layout, features)
- **Reusability**: Common components can be used across the app
- **Maintainability**: Clear structure makes it easy to find and update code
- **Scalability**: Easy to add new features without cluttering existing code
- **Type Safety**: TypeScript interfaces ensure data consistency
