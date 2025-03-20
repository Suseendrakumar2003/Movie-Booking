import { useTheme } from '../context/ThemeContext';
import { genres } from '../data/movies';

function FilterPanel({ selectedGenres, onGenreChange, onClearFilters }) {
  const { colors } = useTheme();

  return (
    <div className="p-4 rounded-lg mb-6" style={{ backgroundColor: colors.secondary }}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold" style={{ color: colors.text }}>Filters</h3>
        {selectedGenres.length > 0 && (
          <button
            onClick={onClearFilters}
            className="text-sm text-highlight hover:underline"
          >
            Clear Filters
          </button>
        )}
      </div>
      <div className="space-y-2">
        {genres.map(genre => (
          <label key={genre} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedGenres.includes(genre)}
              onChange={() => onGenreChange(genre)}
              className="form-checkbox text-highlight"
            />
            <span style={{ color: colors.text }}>{genre}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default FilterPanel;