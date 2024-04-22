# My Website

This is a brief description of your website.

## File Structure

- `src/`: This is where all the source code for the application lives.
  - `components/`: This directory contains all the React components.
    - `Router.tsx`: This file is responsible for routing and lazy loading of components.
    - `home/`: This directory contains components related to the home screen.
    - `placement/`: This directory contains components related to the placement test.
    - `game/`: This directory contains components related to the game.
  - `lib/`: This directory contains utility functions and configurations.
- `vite.config.ts`: This is the configuration file for Vite.
- `package.json`: This file contains the list of project dependencies and scripts.
- `.tours/`: This directory contains the CodeTour files.
- `README.md`: This is the file you're reading right now!

## Navigating the Code

The entry point of the application is `src/components/Router.tsx`. This file uses React Router to define the application's routes. Each route corresponds to a different screen in the application, and each screen is implemented as a React component.

## Tools and Frameworks Used

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.
- [Firebase](https://firebase.google.com/): A platform for building web and mobile applications.
- [Vite](https://vitejs.dev/): A build tool that is faster and leaner than traditional ones.

## Getting Started

To get started with development, follow these steps:

1. Clone the repository.
2. Install the dependencies with `yarn`.
3. Start the development server with `yarn dev`.

Please refer to the `package.json` file for a full list of scripts available.

## Contributing

Contributions are welcome! Please read the contributing guidelines before getting started.