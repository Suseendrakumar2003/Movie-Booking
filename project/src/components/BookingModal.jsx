import { useState } from 'react';
import toast from 'react-hot-toast';

function BookingModal({ isOpen, onClose, movie }) {
  const [seats, setSeats] = useState(1);
  const [showTime, setShowTime] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Successfully booked ${seats} seats for ${movie.title}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-secondary rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Book Tickets - {movie.title}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Number of Seats</label>
            <input
              type="number"
              min="1"
              max="10"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              className="input w-full"
            />
          </div>
          <div>
            <label className="block mb-2">Show Time</label>
            <select
              value={showTime}
              onChange={(e) => setShowTime(e.target.value)}
              className="input w-full"
              required
            >
              <option value="">Select time</option>
              <option value="10:00">10:00 AM</option>
              <option value="13:00">1:00 PM</option>
              <option value="16:00">4:00 PM</option>
              <option value="19:00">7:00 PM</option>
            </select>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingModal;