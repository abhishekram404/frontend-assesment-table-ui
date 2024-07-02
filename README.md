# ReactJS Assessment Project

This project is a ReactJS application developed to convert a Figma design into reactive React JS components using various technologies like React, TypeScript, Styled Components, and others. The project also includes setting up webpack, linting, formatting, and testing to ensure code quality and maintainability.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [Running the Project](#running-the-project)
5. [Project Structure](#project-structure)
6. [Scripts and Commands](#scripts-and-commands)
7. [Linting and Formatting](#linting-and-formatting)
8. [API Integration](#api-integration)
9. [Deployment](#deployment)
10. [Contributing](#contributing)
11. [License](#license)

## Project Overview

This project is built to convert a given Figma design into functional ReactJS components. The application uses a variety of libraries and tools to demonstrate best practices in frontend development.

## Technologies Used

- **ReactJS**: For building the UI components.
- **Styled Components**: For styling the UI components.
- **React Query**: For data fetching and state management.
- **Vite**: For bundling the project.
- **Eslint, Prettier**: For code linting and formatting.
- **Fake APIs**: [MockAPI](https://www.mockapi.io/) for data and API simulation.

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (version 14 or above)
- npm or yarn

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies**:

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

## Running the Project

To start the development server:

Using npm:

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

The application should now be running on `http://localhost:5173`.

## Project Structure

```plaintext
.
├── public              # Public assets
├── src
│   ├── assets          # Project asset files
│   ├── components      # React components
│   ├── hooks           # Custom hooks
│   ├── pages           # Pages of the application
│   ├── types          # Global types and interfaces
│   ├── utils           # Utility functions
│   ├── routes.tsx       # Routing configuration of react-router
│   └── main.tsx        # Main entry point
├── .eslintrc.cjs        # Eslint configuration
├── vite.config.js   # Vite configuration
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation
```

## Scripts and Commands

- **`dev`**: Runs the development server.
- **`build`**: Builds the project for production.
- **`lint`**: Lints the project files.
- **`preview`**: Runs the production build locally.

### Using npm

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

### Using yarn

```bash
yarn dev
yarn build
yarn lint
yarn preview
```

## Linting and Formatting

This project uses Eslint, Stylelint, and Prettier for linting and formatting.

- **Eslint**: For JavaScript and TypeScript linting.
- **Prettier**: For consistent code formatting.

To run linting and formatting:

Using npm:

```bash
npm run lint
```

Or using yarn:

```bash
yarn lint
```

## API Integration

For API integration and data fetching, the project uses React Query along with fake APIs from [MockAPI](https://www.mockapi.io/).

## Deployment

For deployment, you can use platforms like Vercel, Netlify, or any other hosting service that supports Next.js applications.

## Contributing

Contributions are welcome! Please follow the standard Git workflow:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push to your branch.
5. Open a pull request.

## License

This project is licensed under the MIT License.

---

Feel free to modify this README to better fit your project's specifics or any additional instructions you might have.

### Links to Dependencies

- **React Query**: [@tanstack/react-query](https://tanstack.com/query/v4)
- **Styled Components**: [styled-components](https://styled-components.com/)
- **Iconify**: [@iconify/react](https://iconify.design/docs/react/)

Let me know if you need any more details or modifications!
