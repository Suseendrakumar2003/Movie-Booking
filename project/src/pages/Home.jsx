import { useState, useMemo } from 'react';
import MovieCard from '../components/MovieCard';
import FilterPanel from '../components/FilterPanel';
import SearchSort from '../components/SearchSort';
import { movies } from '../data/movies';
import { useTheme } from '../context/ThemeContext';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [sortBy, setSortBy] = useState('releaseDate-desc');
  const [currentPage, setCurrentPage] = useState(1);
  const { colors } = useTheme();
  
  const moviesPerPage = 4;

  const handleGenreChange = (genre) => {
    setSelectedGenres(prev =>
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedGenres([]);
    setCurrentPage(1);
  };

  const filteredAndSortedMovies = useMemo(() => {
    // Filter by search term and genres
    let filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedGenres.length === 0 || 
       selectedGenres.some(genre => movie.genres.includes(genre)))
    );

    // Sort movies
    const [sortKey, sortDirection] = sortBy.split('-');
    filtered.sort((a, b) => {
      let comparison = 0;
      switch (sortKey) {
        case 'releaseDate':
          comparison = new Date(a.releaseDate) - new Date(b.releaseDate);
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'popularity':
          comparison = a.popularity - b.popularity;
          break;
        default:
          comparison = 0;
      }
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [movies, searchTerm, selectedGenres, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedMovies.length / moviesPerPage);
  const currentMovies = filteredAndSortedMovies.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <aside className="lg:w-64">
        <FilterPanel
          selectedGenres={selectedGenres}
          onGenreChange={handleGenreChange}
          onClearFilters={clearFilters}
        />
      </aside>
      <main className="flex-grow">
        <SearchSort
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {currentMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        {filteredAndSortedMovies.length > moviesPerPage && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? 'bg-highlight text-white'
                    : 'hover:bg-accent'
                }`}
                style={{
                  backgroundColor: currentPage === i + 1 ? colors.highlight : colors.secondary,
                  color: colors.text
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;