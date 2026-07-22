# Tic-Tac-Toe (React + Parcel)

A classic, interactive Tic-Tac-Toe game built entirely with React and bundled using Parcel. 

This project has been architecturally structured to cleanly separate frontend assets from the root directory, paving the way for seamless backend integration in the future.

## 📁 Project Structure

The workspace is organized to keep the frontend isolated and maintainable:

*   **`/frontend`**: Contains the entry point (`index.html`) and global styles (`style.css`).
*   **`/src`**: Contains all React components (`App.js`, `Board.js`, `Square.js`).
*   **`package.json`**: Configured with custom Parcel scripts to target the new frontend directory.

## 🚀 How to Run Locally

To get the development server running on your local machine:

1.  **Install dependencies:**
```bash
    npm install
```

2.  **Start the development server:**
```bash
    npm start
```
    *This will start a local server (typically at `http://localhost:1234`) with hot-reloading enabled.*

## 🛠️ Scripts

The `package.json` includes the following updated scripts to handle the modular folder structure:

*   `npm start`: Runs `parcel frontend/index.html` for local development.
*   `npm run build`: Runs `parcel build frontend/index.html` to generate a production-ready bundle in the `/dist` directory.

## 🌐 Deployment

This application is a 100% frontend project and is fully optimized for zero-configuration deployment on platforms like **Vercel**. 

To deploy:
1. Import the repository into Vercel.
2. Vercel will automatically detect the Parcel framework.
3. Ensure the Build Command is set to `npm run build` and the Output Directory is `dist`.
4. also deploy in vercel