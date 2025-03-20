import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import BookingModal from './BookingModal';
import toast from 'react-hot-toast';

function MovieCard({ movie }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();
  const { colors } = useTheme();

  const handleBooking = () => {
    if (!user) {
      toast.error('Please login to book tickets');
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <>
      <div 
        className="card hover:transform hover:scale-105 transition-transform duration-200"
        style={{ backgroundColor: colors.secondary }}
      >
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2" style={{ color: colors.text }}>{movie.title}</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            {movie.genres.map(genre => (
              <span
                key={genre}
                className="px-2 py-1 text-xs rounded"
                style={{ backgroundColor: colors.accent, color: colors.text }}
              >
                {genre}
              </span>
            ))}
          </div>
          <p className="text-sm mb-2" style={{ color: colors.text }}>{movie.description}</p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm" style={{ color: colors.text }}>Rating: {movie.rating}/10</span>
            <span className="text-sm" style={{ color: colors.text }}>{movie.duration}</span>
          </div>
          <button
            onClick={handleBooking}
            className="btn-primary w-full"
          >
            Book Now
          </button>
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        movie={movie}
      />
    </>
  );
}

export default MovieCard;