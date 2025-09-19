# React User Profiles Application

This project is a responsive web application built as a solution to a ReactJS developer coding assignment. The application fetches user data from a public API, displays the profiles in a clean, card-based interface, and allows for basic operations like editing and deleting user information.

---

## Live Demo

**You can view the live application here: [https://fetching-user-profiles.vercel.app/](https://fetching-user-profiles.vercel.app/)**

---

## Key Features

* **Fetch & Display Data:** Fetches 10 user profiles from the JSONPlaceholder API on initial load.
* **Dynamic Avatars:** Generates unique, customized avatars for each user using the DiceBear API.
* **CRUD Functionality:** Users can be **deleted** from the list, and their core details (**name, email, phone, website**) can be **edited** through a modal form.
* **Interactive UI:** Includes a "like" button for user engagement and a loading indicator while fetching data.
* **Responsive Design:** The layout is fully responsive and adapts seamlessly to various screen sizes (mobile, tablet, and desktop) using a grid system.

---

## Tech Stack

* **React.js:** For building the user interface with functional components and hooks (`useState`, `useEffect`, `useCallback`).
* **Ant Design:** A comprehensive UI library used for components like Cards, Modals, Forms, and the responsive Grid system.
* **HTML5 & CSS3:** For structuring and adding custom styling.
* **Git & GitHub:** For version control and source code management.
* **Vercel:** For continuous deployment and hosting.

---

## API Endpoints

The application relies on the following free, public APIs:

* **User Data:** `https://jsonplaceholder.typicode.com/users`
* **Avatars:** `https://api.dicebear.com/8.x/avataaars/svg?seed={{username}}`

> **Note on the Avatar API:** The avatar URL provided in the original assignment document (`/v2/`) was outdated and no longer functional. I have researched the latest DiceBear API documentation and implemented the current, working endpoint to ensure full functionality.

---

## Getting Started

To run this project locally, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Sumanth-2305/Fetching-user-profiles.git](https://github.com/Sumanth-2305/Fetching-user-profiles.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Fetching-user-profiles
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm start
    ```

The application will now be running on `http://localhost:3000`.
