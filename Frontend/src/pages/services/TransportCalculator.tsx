import React, { useState } from 'react';

const TransportCalculator: React.FC = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState<'calculator' | 'transporters'>('calculator');

  // Available destinations
  const destinations = [
    'Hisar', 'PANIPAT', 'SIRSA', 'GURGAON', 'FARIDABAD', 'DELHI', 'JAIPUR'
  ];

  // State for calculator inputs
  const [pickupLocation, setPickupLocation] = useState('Hisar');
  const [dropLocation, setDropLocation] = useState('Hisar');
  const [commodityType, setCommodityType] = useState('Wheat');
  const [quantity, setQuantity] = useState(10);
  const [vehicleType, setVehicleType] = useState('Open Truck');

  // Sample transporters data
  const transporters = [
    {
      id: 1,
      name: 'Sharma Transport',
      vehicles: ['Truck', 'Tempo'],
      experience: '10 years',
      contact: '+91 98765 43210',
      rating: 4.2,
      pricePerKm: 15,
    },
    {
      id: 2,
      name: 'Rundown Logistics',
      vehicles: ['Heavy Truck', 'Container'],
      experience: '8 years',
      contact: '+91 87654 32109',
      rating: 4.0,
      pricePerKm: 18,
    },
    {
      id: 3,
      name: 'City Movers',
      vehicles: ['Mini Truck', 'Tempo'],
      experience: '5 years',
      contact: '+91 76543 21098',
      rating: 4.5,
      pricePerKm: 12,
    }
  ];

  // Calculate fare based on inputs
  const calculateFare = () => {
    // Simple calculation - in a real app, this would use distance API
    const baseRate = vehicleType === 'Open Truck' ? 15 : 18;
    return quantity * baseRate * 100; // Assuming ₹100 per ton per km as example
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-blue-700 p-6 text-white">
          <h1 className="text-2xl font-bold">Transport Services</h1>
          <p className="opacity-90">Efficient logistics solutions for all your needs</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            className={`py-4 px-6 font-medium ${activeTab === 'calculator' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-500'}`}
            onClick={() => setActiveTab('calculator')}
          >
            Fare Calculator
          </button>
          <button
            className={`py-4 px-6 font-medium ${activeTab === 'transporters' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-500'}`}
            onClick={() => setActiveTab('transporters')}
          >
            Available Transporters
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'calculator' ? (
            <div className="calculator-tab">
              <h2 className="text-xl font-semibold mb-4">Calculate Transport Fare</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pickup Location
                  </label>
                  <select
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    {destinations.map((dest) => (
                      <option key={`pickup-${dest}`} value={dest}>
                        {dest}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Drop Location
                  </label>
                  <select
                    value={dropLocation}
                    onChange={(e) => setDropLocation(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    {destinations.map((dest) => (
                      <option key={`drop-${dest}`} value={dest}>
                        {dest}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Commodity Type
                </label>
                <select
                  value={commodityType}
                  onChange={(e) => setCommodityType(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Wheat">Wheat</option>
                  <option value="Rice">Rice</option>
                  <option value="Cement">Cement</option>
                  <option value="Steel">Steel</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity (tons)
                </label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  min="1"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Vehicle Type
                </label>
                <select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Open Truck">Open Truck</option>
                  <option value="Closed Truck">Closed Truck</option>
                  <option value="Container">Container</option>
                  <option value="Tempo">Tempo</option>
                </select>
              </div>

              <button className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-200">
                Calculate Fare
              </button>

              {pickupLocation && dropLocation && (
                <div className="mt-6 p-4 bg-blue-50 rounded-md">
                  <h3 className="text-lg font-semibold text-blue-800">Estimated Fare</h3>
                  <p className="text-2xl font-bold mt-2">₹{calculateFare().toLocaleString()}</p>
                  <p className="text-sm text-gray-600 mt-1">For {quantity} tons of {commodityType}</p>
                  <p className="text-sm text-gray-600">From {pickupLocation} to {dropLocation}</p>
                </div>
              )}
            </div>
          ) : (
            <div className="transporters-tab">
              <h2 className="text-xl font-semibold mb-6">Available Transporters</h2>

              <div className="space-y-6">
                {transporters.map(transporter => (
                  <div key={transporter.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg">{transporter.name}</h3>
                        <div className="mt-2 text-sm">
                          <span className="font-medium">Vehicles: </span>
                          {transporter.vehicles.join(', ')}
                        </div>
                        <div className="mt-1 text-sm">
                          <span className="font-medium">Experience: </span>
                          {transporter.experience}
                        </div>
                        <div className="mt-1 text-sm">
                          <span className="font-medium">Contact: </span>
                          {transporter.contact}
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center justify-end">
                          <span className="text-yellow-500 mr-1">★</span>
                          <span className="font-medium">{transporter.rating}</span>
                        </div>
                        <div className="mt-2 text-xl font-bold">₹{transporter.pricePerKm}/km</div>
                        <button className="mt-3 bg-green-600 text-white py-2 px-4 rounded-md text-sm hover:bg-green-700 transition duration-200">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransportCalculator;