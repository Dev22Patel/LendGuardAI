import React from 'react';
import { Database, TrendingUp, BarChartBig, Zap, Bell } from 'lucide-react';

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Early Warning System</h2>
          <p className="text-lg text-gray-600">
            Our solution aggregates financial data in real-time to predict and prevent loan defaults before they happen.
          </p>
        </div>
        
        <div className="relative">
          {/* Flow diagram */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Account Aggregator Data</h3>
              <p className="text-gray-600">
                Securely aggregates user bank data via Account Aggregator framework with user consent.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Redshift Analytics</h3>
              <p className="text-gray-600">
                Uses powerful data warehousing to track financial trends and behavior patterns over time.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <BarChartBig className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ML Prediction Model</h3>
              <p className="text-gray-600">
                Trains AI to predict default risk with detailed explanations about contributing factors.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dashboards & Alerts</h3>
              <p className="text-gray-600">
                Provides intuitive dashboards and proactive alerts to lenders for timely interventions.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-blue-600 font-medium italic">
            "Helps lenders act before defaults occur, saving money & preserving trust."
          </p>
        </div>
      </div>
    </section>
  );
};