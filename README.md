# Todo List Demo

A simple and elegant todo list application built with Next.js, React, and Shadcn/UI components.

## Features

- Add new tasks with an input field
- Mark tasks as complete with a checkbox
- Delete tasks you no longer need
- Clean and modern UI using Shadcn/UI components
- Fully responsive design
- Keyboard support (press Enter to add tasks)
- Built with TypeScript for type safety
- Uses Zod for runtime schema validation

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- pnpm (v8 or higher)

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd todo-list-demo
```

2. Install dependencies:
```bash
pnpm install
```

## Running the Application

To start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Tech Stack

- [Next.js](https://nextjs.org) - React framework
- [React](https://reactjs.org) - UI library
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- [Shadcn/UI](https://ui.shadcn.com) - UI component library
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Zod](https://zod.dev) - Schema validation

## Project Structure

```
todo-list-demo/
├── app/
│   └── page.tsx          # Home page
├── lib/
│   └── schema.ts         # Todo item schema definition
├── components/
│   └── TodoList.tsx      # Main todo list component
└── ...configuration files
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).
