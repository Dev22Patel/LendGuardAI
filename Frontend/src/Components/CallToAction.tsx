import React from 'react';
// import { ArrowRight } from 'lucide-react';

export const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Predict Loan Defaults Before They Happen?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Schedule a demo to see how our AI-powered early warning system can transform your lending operations.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
             
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};