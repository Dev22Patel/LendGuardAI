import React from 'react';
import { TrendingDown, Users, BadgeDollarSign } from 'lucide-react';

export const Benefits = () => {
  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why This Matters</h2>
          <p className="text-lg text-gray-600">
            Our solution provides substantial benefits across the entire financial ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* For Lenders */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <BadgeDollarSign className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">For Lenders</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500 mt-2 mr-3"></span>
                <span>Reduce Non-Performing Assets (NPAs)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500 mt-2 mr-3"></span>
                <span>Improve overall portfolio health</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500 mt-2 mr-3"></span>
                <span>Lower collection costs with proactive measures</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500 mt-2 mr-3"></span>
                <span>Maintain stronger customer relationships</span>
              </li>
            </ul>
          </div>
          
          {/* For Borrowers */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">For Borrowers</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-block h-2 w-2 rounded-full bg-orange-500 mt-2 mr-3"></span>
                <span>Avoid credit score damage</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block h-2 w-2 rounded-full bg-orange-500 mt-2 mr-3"></span>
                <span>Receive timely financial support</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block h-2 w-2 rounded-full bg-orange-500 mt-2 mr-3"></span>
                <span>Get personalized recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block h-2 w-2 rounded-full bg-orange-500 mt-2 mr-3"></span>
                <span>Maintain financial health long-term</span>
              </li>
            </ul>
          </div>
          
          {/* For AA Companies */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <TrendingDown className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">For AA Companies</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-500 mt-2 mr-3"></span>
                <span>Showcase real ROI of AA data</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-500 mt-2 mr-3"></span>
                <span>Enable cross-selling of intelligence tools</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-500 mt-2 mr-3"></span>
                <span>Build stronger relationships with financial institutions</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-500 mt-2 mr-3"></span>
                <span>Demonstrate value of data-driven decision making</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 font-medium">
            "Turning raw data into actionable financial foresight."
          </p>
        </div>
      </div>
    </section>
  );
};