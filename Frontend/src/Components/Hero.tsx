import React from 'react';
import { LineChart, BarChart, PieChart } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gray-900">Loan Defaults:</span>
              <span className="block text-blue-600 mt-2">A Silent Financial Crisis</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Detect borrower risk <span className="text-orange-500 font-medium">before</span> it's too late. 
              Our AI-powered early warning system helps lenders protect their portfolio and preserve trust.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all hover:scale-105 font-medium">
                Get Started
              </button>
              <button className="border-2 border-gray-300 px-6 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all">
                Learn More
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-500 flex items-center">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              In FY24, Indian NBFCs saw a 20% rise in personal loan defaults among low-income groups.
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 relative">
            <div className="relative bg-gray-50 rounded-2xl p-6 shadow-xl">
              <div className="absolute -right-4 -top-4 bg-blue-100 p-4 rounded-lg">
                <LineChart className="h-10 w-10 text-blue-600" />
              </div>
              <div className="absolute -left-4 -bottom-4 bg-orange-100 p-4 rounded-lg">
                <BarChart className="h-10 w-10 text-orange-500" />
              </div>
              <div className="absolute right-1/4 -bottom-8 bg-green-100 p-4 rounded-lg">
                <PieChart className="h-10 w-10 text-green-600" />
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Default Risk Score</span>
                    <span className="text-xs text-gray-500">Updated 3m ago</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{width: '78%'}}></div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs">
                    <span>Low</span>
                    <span className="text-red-500 font-medium">High (78%)</span>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="text-sm font-medium mb-2">Alert Factors:</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="inline-block h-2 w-2 rounded-full bg-red-500 mt-1.5 mr-2"></span>
                      <span>Income dropped 40% over 2 months</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-2 w-2 rounded-full bg-red-500 mt-1.5 mr-2"></span>
                      <span>Missed last EMI payment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-2 w-2 rounded-full bg-orange-500 mt-1.5 mr-2"></span>
                      <span>Increased spending in non-essential categories</span>
                    </li>
                  </ul>
                  <button className="mt-4 text-blue-600 text-sm font-medium hover:underline w-full text-left">
                    View detailed analysis →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};