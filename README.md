# Frontend - React App

This is the frontend of the project, built using **React** and **Tailwind CSS**. The app provides features such as file uploading, viewing uploaded files, and displaying modal dialogs. It communicates with a backend API to upload files and retrieve file-related data.

## Features

- **File Upload**: Users can upload files to the server.
- **File List**: Displays a list of files uploaded to the server.
- **Modal Dialogs**: File upload and file list are displayed in modals.
- **Page Blur**: When the modal is open, the background page is blurred to focus attention on the modal content.
- **File Count**: The count of uploaded files is dynamically shown in the UI.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling the components.
- **Axios**: HTTP client for making API requests to the backend.

## Prerequisites

Before starting the project, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository**:

   ```bash
   git clone <your-repository-url>
   cd <project-folder>

    # Navigate to the frontend directory
    cd frontend
    ```
2. **Install dependencies**:

   ```bash
   npm install
   ```
3. **Start the development server**:

   ```bash
    npm start
    ```

## Folder Structure

The project structure is organized as follows:

- **public**: Contains the static assets and HTML file.
- **src**: Contains the React components, styles, and assets.
  - **assets**: Contains images and other static assets.
  - **components**: Contains the React components.
  - **styles**: Contains the Tailwind CSS styles.
  - **App.js**: Main component that renders the app.
  - **index.js**: Entry point of the app.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
