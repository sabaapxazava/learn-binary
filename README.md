
---

# Binary Operations Challenge

Binary Operations Challenge is a React-based web application featuring interactive challenges related to binary numbers. Users can engage in different game modes that test their skills in understanding and manipulating binary representations of numbers using XOR and AND operations.

## Features

- **XOR Challenge**: Decode binary numbers using the XOR operation.
- **AND Challenge**: Decode binary numbers using the AND operation.
- **Binary Quiz**: Answer binary-related questions to test your knowledge.
- **Score Tracking**: Monitor your performance with integrated scoring functionality.
- **Dynamic Gameplay**: Randomized challenges for continuous engagement.

## Prerequisites

- Node.js (version 12 or above)
- npm (version 6 or above)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/sabaapxazava/learn-binary.git
```

2. Navigate to the project directory:

```bash
cd learn-binary
```

3. Install the required dependencies:

```bash
npm install
```

## Usage

1. Start the development server:

```bash
npm run dev
```

2. Open your web browser and navigate to `http://localhost:3000` to access the application.

3. Select a game mode (XOR or AND) and follow the on-screen instructions to play the Binary Operations Challenge.

## Project Structure

- `src/`: Contains the main source code files for the React application.
  - `pages/`: Contains individual page components for routing.
  - `routes/`: Contains route configuration and navigation components.
  - `components/`: Contains React components for different game modes.
  - `utils/`: Contains utility functions for generating and manipulating binary numbers using XOR and AND operations.
  - `context/`: Contains context providers for managing game state and scoring.
  - `styles/`: Contains stylesheets and CSS modules for styling components.
  - `App.tsx`: Main application component orchestrating game modes.
- `public/`: Contains public assets and `index.html` file.
- `package.json`: Contains project metadata and dependencies.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---
