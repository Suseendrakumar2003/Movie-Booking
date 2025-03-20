# Movie Booking App

This is a movie booking application built with React and Vite. It allows users to browse movies, filter by genres, search, sort, and book tickets. The app also supports user authentication and theme toggling.

## Features

- **Movie Browsing**: Browse a list of movies with details like title, genres, description, rating, and duration.
- **Filtering**: Filter movies by genres.
- **Search**: Search movies by title.
- **Sorting**: Sort movies by release date, title, and popularity.
- **Booking**: Book tickets for movies.
- **Authentication**: User login and signup functionality.
- **Theme Toggle**: Switch between dark and light themes.

## Tech Stack

- **Frontend**: React, React Router, Tailwind CSS
- **Backend**: Supabase (for authentication)
- **Build Tool**: Vite
- **Linting**: ESLint

## Project Structure

```plaintext
project/
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
├── .bolt/
│   └── config.json
├── public/
│   └── vite.svg
└── src/
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── assets/
    │   └── react.svg
    ├── components/
    │   ├── BookingModal.jsx
    │   ├── FilterPanel.jsx
    │   ├── MovieCard.jsx
    │   ├── Navbar.jsx
    │   └── SearchSort.jsx
    ├── context/
    │   ├── AuthContext.jsx
    │   └── ThemeContext.jsx
    ├── data/
    │   └── movies.js
    ├── pages/
    │   ├── Home.jsx
    │   ├── Login.jsx
    │   └── SignUp.jsx
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/movie-booking-app.git
   cd movie-booking-app/project
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Create a `.env` file** in the project directory and add your Supabase credentials:
   ```sh
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```
   *Note: Get your Supabase credentials from [Supabase](https://supabase.io/)*

### Running the App

To start the development server:
```sh
npm run dev
```

## Deployment

To deploy the app (e.g., on Vercel or Netlify):

1. **Build the project:**
   ```sh
   npm run build
   ```
2. **Deploy using your preferred hosting service**

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the **MIT License**.

---

### Screenshots (Optional)
Include screenshots of your app in a `screenshots/` directory and reference them here.

```markdown
![Home Page](screenshots/home.png)
![Movie Details](screenshots/movie-details.png)
```

Feel free to customize this README file further as needed! 🚀

