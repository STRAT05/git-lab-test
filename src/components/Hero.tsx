import React from 'react';
import { Truck, Shield, CreditCard } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to ShopHub
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Discover amazing products at unbeatable prices
          </p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            Shop Now
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
            <p className="text-blue-100">Free shipping on orders over $50</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure Payment</h3>
            <p className="text-blue-100">Your payment information is safe</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <CreditCard className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Easy Returns</h3>
            <p className="text-blue-100">30-day return policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}