import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

function Navbar() {
  const { user, logout } = useAuth();
  const { isDarkMode, toggleTheme, colors } = useTheme();

  return (
    <nav style={{ backgroundColor: colors.secondary }} className="py-4 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold" style={{ color: colors.text }}>
          MovieBox
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-opacity-80"
            style={{ backgroundColor: colors.accent }}
          >
            {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
          </button>
          {user ? (
            <>
              <span style={{ color: colors.text }}>{user.email}</span>
              <button
                onClick={logout}
                className="btn-primary"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <Link to="/login" className="btn-primary">
                Login
              </Link>
              <Link to="/signup" className="btn-primary">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;