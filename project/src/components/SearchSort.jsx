import { useTheme } from '../context/ThemeContext';
import { sortOptions } from '../data/movies';

function SearchSort({ searchTerm, onSearchChange, sortBy, onSortChange }) {
  const { colors } = useTheme();

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="input flex-grow"
        style={{ backgroundColor: colors.secondary, color: colors.text }}
      />
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="input md:w-64"
        style={{ backgroundColor: colors.secondary, color: colors.text }}
      >
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchSort;