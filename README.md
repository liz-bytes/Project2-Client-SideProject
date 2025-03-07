# 🚀 SpaceXplorer

### Explore SpaceX Launches and Missions

SpaceXplorer is a web application that allows users to explore SpaceX launch details, search for specific launches, and save their favorite missions.

---

## 📌 Project Overview

This project demonstrates:
Building a **React Single Page Application (SPA)** using **Vite**
**Fetching live SpaceX data** from an API
**React Context API** for state management
**React Router** for navigation
**Favorites feature** to save and manage favorite launches
**Responsive UI** with a dynamic search feature
**Footer Component** for consistent page information
**Styled** Components with **CSS**

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone <YOUR_GITHUB_REPO_URL>
cd Project2-Client-SideProject
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Run the Development Server

```sh
npm run dev
```

Your app will now be available at:
🌍 `http://localhost:5173/`

---

## 🏗️ Project Structure

```
/public                # Static assets (video, images)
/src
   ├── /assets         # Static assets
   ├── /components     # Reusable UI components
   │    ├── Favorites.css
   │    ├── Favorites.jsx
   │    ├── Footer.jsx
   │    ├── LaunchCard.css
   │    ├── LaunchCard.jsx
   │    ├── LaunchesList.css
   │    ├── LaunchesList.jsx
   │    ├── Navbar.css
   │    ├── Navbar.jsx
   │    ├── TodoLaunches.css
   │    ├── TodoLaunches.jsx
   ├── /context        # React Context API for state management
   │    ├── LaunchesContext.jsx
   ├── /pages          # Main pages
   │    ├── About.css
   │    ├── About.jsx
   │    ├── Home.css
   │    ├── Home.jsx
   │    ├── LaunchPage.css
   │    ├── LaunchPage.jsx
   │    ├── NotFound.jsx
   ├── /tests          # Unit and integration tests
   │    ├── setupTests.js
   ├── App.jsx         # Main application component
   ├── main.jsx        # React entry file
   │── App.css
   │── index.css
   ├── README.md       # Project documentation
   ├── .gitignore      # Git ignore rules
   ├── eslint.config.js # ESLint configuration
   ├── index.html      # Main HTML file
   ├── package.json    # Dependencies and scripts
   ├── package-lock.json # Dependency lock file
   ├── vite.config.js  # Vite configuration
```

---

## 🚀 Features

**Homepage (`Home.jsx`)**

- Displays a **welcome message**
- Includes an **embedded video** (`Spacex-Launch720.mp4`)

  **Launches Page (`LaunchPage.jsx`)**

- Users can **filter launches by location** (Vandenberg & Cape Canaveral)
- **Dynamically fetches data** from the SpaceX API
- Displays **mission details, flight number, and rocket info**

  **Launch Details (`LaunchCard.jsx`)**

- Displays **individual launch details**
- Includes a **Go Back button**

  **Favorites Page (`Favorites.jsx`)**

- Allows users to **save favorite launches**
- Users can **remove launches from favorites**
- Favorite launches persist during the session

  **To-Do List and Upcoming Launches (`TodoLaunches.jsx`)**

- Enables the user to keep Enter, Save, and Edit tasks necessary for upcoming or past launches.
- Enables the user to enter Enter and Save Upcoming Launch information such as Mission Name, Date, Location, and T-0.

  **React Context API (`LaunchesContext.jsx`)**

- Manages **global launch data**
- Filters launches based on user selection
- Handles **Favorites functionality**

  **Navigation (`Navbar.jsx`)**

- Links to **Home, Launches, Favorites, and About pages**
- Stays **visible across all pages**

  **Footer (`Footer.jsx`)**

- Displays **consistent footer information on all pages**

---

## 🔗 API Usage

This project uses the **SpaceX API (`https://api.spacexdata.com/v5/launches`)** to fetch live launch data.

Example API response:

```json
{
  "name": "Falcon 9 Launch",
  "date_utc": "2023-07-15T14:00:00.000Z",
  "rocket": "Falcon 9",
  "launchpad": "Vandenberg SFB",
  "success": true
}
```

---

## 🎨 Styling & UI

The project uses:
**Custom CSS (`Home.css`, `App.css`, `Favorites.css`, `Index.css`, `ToDoLaunches.css`, `Navbar.css`, `LaunchesList.css`, `LaunchesCard.css`)** for responsive design
**Grid-based layout** for launch cards
**Styled mission patches** for each launch

---

## 🐛 Troubleshooting

1️⃣ **Video Not Playing?**

- Ensure `Spacex-Launch720.mp4` is in the `/public` folder
- Try opening `http://localhost:5173/Spacex-Launch720.mp4` in the browser

2️⃣ **Launch Data Not Loading?**

- Check if the **API URL is correct** in `LaunchesContext.jsx`
- Restart the server with `npm run dev`

---

## Notion Link

[![Notion App](https://img.shields.io/badge/Notion-App-blue)](https://www.notion.so/1ab5b9eed32c80429742e4c20063429c?v=1ab5b9eed32c818dae79000c6da6a7a2&pvs=4)

## Screenshots

![Screenshot Description](public/Screenshot1.jpg)

[Screenshot Description](public/Screenshot2.png)

<img src="Screenshot3.png" width="600">

<img src="https://github.com/liz-bytes/Project2-Client-SideProject/tree/main/public/Screenshot3.png" width="600">

![Screenshot Description](public/Screenshot3.png)

![Screenshot Description](public/Screenshot4.png)

## 🤝 Contributing

Feel free to **fork** the repository and submit a **pull request**! Contributions are welcome.

---

## License

This project is licensed under the **MIT License**.

---

## Authors & Acknowledgments

Developed by **[Camilo, Harman, Liz, Omar]**
API provided by **SpaceX API**
