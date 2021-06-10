# How to run?

## 1. Install required dependencies
Run the following command at the root directory

`npm install` (npm) or `yarn` (yarn)

## 2. Start with `development` mode

### 2.1. Create config file

Navigate to `/src/pre-start/env` and create an `development.env` file including all required configs as given in `example.env`

### 2.3. Start

`npm run start` (npm) or `yarn start` (yarn)

## 3. Start with `production` mode

### 3.1. Create config file

Navigate to `src/pre-start/env` and create/update `production.env` file as you wish. Please make sure that the file including all required configs as given in `example.env`.

### 3.2 Bundle

`npm run build` (npm) or `yarn build` (yarn)

This creates an `dist` folder containing minimized and transpiled resources.

### 3.3. Start

`npm run serve` (npm) or `yarn serve` (yarn)

## 4. Enjoy!!!

You've done! Visit the homepage at `<your-url>:<your-port>` (e.g., `localhost:3000`) to see the result.
