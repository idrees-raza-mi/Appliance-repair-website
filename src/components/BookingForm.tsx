"use client";

import { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    appliance: '',
    description: '',
    time: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Your booking request has been submitted! We will contact you shortly.');
    setFormData({ name: '', phone: '', appliance: '', description: '', time: '' });
  };

  return (
    <section id="contact" className="bg-gray-800 dark:bg-gray-800 py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-white">Book a Service</h2>
          <p className="mt-3 text-lg text-white dark:text-white">Fill out the form below to schedule a repair.</p>
        </div>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white dark:text-white">Full Name</label>
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 dark:text-white" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white dark:text-white">Phone Number</label>
              <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 dark:text-white" />
            </div>
            <div>
              <label htmlFor="appliance" className="block text-sm font-medium text-white dark:text-white">Appliance Type</label>
              <select name="appliance" id="appliance" required value={formData.appliance} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 dark:text-white">
                <option value="">Select an appliance</option>
                <option value="Fridge">Fridge</option>
                <option value="Washing Machine">Washing Machine</option>
                <option value="Oven">Oven</option>
                <option value="Stove">Stove</option>
                <option value="Vacuum Cleaner">Vacuum Cleaner</option>
                <option value="Dishwasher">Dishwasher</option>
                <option value="Microwave">Microwave</option>
                <option value="Dryer">Dryer</option>
                <option value="Water Heater">Water Heater</option>
              </select>
           </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-white dark:text-white">Description of Issue</label>
              <textarea name="description" id="description" rows={4} required value={formData.description} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-gray-800 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 dark:text-white"></textarea>
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-white dark:text-white">Preferred Service Time</label>
              <input type="datetime-local" name="time" id="time" required value={formData.time} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-gray-800 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 dark:text-white" />
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-500">Submit Request</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
