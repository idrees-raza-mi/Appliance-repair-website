"use client";

import { useState } from 'react';
import { Star, User } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([
    { id: 1, name: "Sarah Johnson", rating: 5, comment: "Excellent service! Fixed my washing machine in under an hour. Very professional and affordable.", date: "2024-01-15" },
    { id: 2, name: "Mike Chen", rating: 5, comment: "Great experience with the AC repair. Technician was knowledgeable and fixed the issue quickly.", date: "2024-01-10" },
    { id: 3, name: "Lisa Rodriguez", rating: 4, comment: "Good service overall. The fridge repair was done well, though it took a bit longer than expected.", date: "2024-01-05" }
  ]);

  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name.trim() && newReview.comment.trim()) {
      const review: Review = { id: reviews.length + 1, name: newReview.name, rating: newReview.rating, comment: newReview.comment, date: new Date().toISOString().split('T')[0] };
      setReviews([review, ...reviews]);
      setNewReview({ name: '', rating: 5, comment: '' });
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={16} className={`${i < rating ? 'text-blue-400 fill-current' : 'text-gray-500'}`} />
    ));
  };

  return (
    <section id="reviews" className="bg-gray-900 py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Customer Reviews</h2>
          <p className="mt-2 text-lg text-gray-300">See what our customers say about our services</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Write a Review</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <input type="text" id="name" value={newReview.name} onChange={(e) => setNewReview({ ...newReview, name: e.target.value })} className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-1 focus:ring-gray-500 focus:border-transparent bg-gray-700 text-white" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Rating</label>
                <div className="flex space-x-1">
                  {[1,2,3,4,5].map((star) => (
                    <button key={star} type="button" onClick={() => setNewReview({ ...newReview, rating: star })} className="focus:outline-none">
                      <Star size={24} className={`${star <= newReview.rating ? 'text-blue-400 fill-current' : 'text-gray-500'} hover:text-blue-400 transition-colors`} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-300 mb-2">Your Review</label>
                <textarea id="comment" rows={4} value={newReview.comment} onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })} className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-1 focus:ring-gray-500 focus:border-transparent bg-gray-700 text-white" placeholder="Share your experience with our service..." required />
              </div>
              <button type="submit" className="w-full bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-emerald-500/40 transition-colors">Submit Review</button>
            </form>
          </div>
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-white mb-2">Recent Reviews</h3>
            {reviews.map((review) => (
              <div key={review.id} className="bg-gray-800 p-5 rounded-xl shadow-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                      <User size={20} className="text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{review.name}</h4>
                      <div className="flex items-center space-x-1">{renderStars(review.rating)}</div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">{review.date}</span>
                </div>
                <p className="text-gray-300">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
