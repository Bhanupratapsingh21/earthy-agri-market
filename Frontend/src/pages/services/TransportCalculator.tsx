import React, { useState } from 'react';

const TransportCalculator: React.FC = () => {
  // Available destinations
  const destinations = [
    'Hisar', 'PANIPAT', 'SIRSA', 'GURGAON', 'FARIDABAD', 'DELHI', 'JAIPUR'
  ];

  // State for calculator inputs
  const [weight, setWeight] = useState<number>(0);
  const [pickup, setPickup] = useState<string>('Hisar');
  const [drop, setDrop] = useState<string>('Hisar');

  // Calculate price based on weight
  const calculatePrice = (): number => {
    return weight * 3.5;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">
            Transport Calculator
          </h1>
          <p className="text-gray-600">
            Information about our transport services
          </p>
        </header>

        {/* Calculator Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">
            Transport Cost Calculator
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Pickup Destination */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pickup Destination
              </label>
              <select
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                {destinations.map((dest) => (
                  <option key={`pickup-${dest}`} value={dest}>
                    {dest}
                  </option>
                ))}
              </select>
            </div>

            {/* Drop Destination */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Drop Destination
              </label>
              <select
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                {destinations.map((dest) => (
                  <option key={`drop-${dest}`} value={dest}>
                    {dest}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Weight Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Weight (kg)
            </label>
            <input
              type="number"
              value={weight || ''}
              onChange={(e) => setWeight(Number(e.target.value))}
              min="0"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter weight in kilograms"
            />
          </div>

          {/* Price Calculation */}
          <div className="bg-blue-50 p-4 rounded-md">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-gray-700">
                Total Price:
              </span>
              <span className="text-2xl font-bold text-blue-700">
                ₹{calculatePrice().toFixed(2)}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Calculated at a fixed rate of ₹3.5 per kg
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">
            Contact Information
          </h2>

          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              TCI Freight, Hisar
            </h3>
            <p className="text-gray-600">
              PLOT NO.164,1,2,Mohna Mandi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Contact Numbers</h4>
              <p className="text-blue-600">7835047120</p>
            </div>

            <div>
              <h4 className="font-medium text-gray-700 mb-2">Email Addresses</h4>
              <p className="text-blue-600 break-words">Assr@tcifreight.in</p>
              <p className="text-blue-600 break-words">info@tciexpress.in</p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-medium text-gray-700 mb-2">Website</h4>
            <a
              href="https://share.google/C3KWvIMeQhQwW8axc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline break-words"
            >
              https://share.google/C3KWvIMeQhQwW8axc
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportCalculator;