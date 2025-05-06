import React, { useState } from 'react';
import { LineChart, BarChart3, PieChart, AlertTriangle } from 'lucide-react';

export const Demo = () => {
  const [activeTab, setActiveTab] = useState('analytics');
  
  return (
    <section id="demo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Demo: Minimum Viable Flow</h2>
          <p className="text-lg text-gray-600">
            See how our AI-powered system transforms raw financial data into actionable insights.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b">
            <button 
              onClick={() => setActiveTab('analytics')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === 'analytics' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Analytics Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('ai')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === 'ai' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              AI Component
            </button>
            <button 
              onClick={() => setActiveTab('alerts')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === 'alerts' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Risk Alerts
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'analytics' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 md:col-span-2 bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-lg font-medium mb-3">Monthly Income Trend</h3>
                  <div className="h-64 flex items-center justify-center bg-white rounded-lg p-4 border border-gray-200">
                    <div className="w-full">
                      <div className="relative h-40">
                        {/* Chart Bars */}
                        <div className="absolute bottom-0 left-0 w-1/6 h-[30%] bg-blue-200 rounded-t"></div>
                        <div className="absolute bottom-0 left-[16.666%] w-1/6 h-[70%] bg-blue-300 rounded-t"></div>
                        <div className="absolute bottom-0 left-[33.333%] w-1/6 h-[85%] bg-blue-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[50%] w-1/6 h-[75%] bg-blue-500 rounded-t"></div>
                        <div className="absolute bottom-0 left-[66.666%] w-1/6 h-[40%] bg-blue-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[83.333%] w-1/6 h-[30%] bg-red-400 rounded-t"></div>
                        
                        {/* Trend line */}
                        <div className="absolute bottom-[30%] left-0 right-0 h-0.5 bg-blue-600 z-10"></div>
                        <div className="absolute bottom-[30%] right-[8.333%] h-10 w-0.5 bg-red-500 z-20"></div>
                      </div>
                      
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-red-600 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    Income dropped 40% in the last month
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-medium mb-3">Expense Categories</h3>
                    <div className="h-32 flex items-center justify-center bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-end h-20 w-full space-x-2">
                        <div className="h-[60%] bg-green-300 w-1/5 rounded-t"></div>
                        <div className="h-[30%] bg-blue-300 w-1/5 rounded-t"></div>
                        <div className="h-[25%] bg-yellow-300 w-1/5 rounded-t"></div>
                        <div className="h-[50%] bg-red-300 w-1/5 rounded-t"></div>
                        <div className="h-[20%] bg-purple-300 w-1/5 rounded-t"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-medium mb-3">EMI Payment Success</h3>
                    <div className="h-32 flex items-center justify-center bg-white rounded-lg p-4 border border-gray-200">
                      <div className="grid grid-cols-6 gap-1 w-full">
                        <div className="h-6 bg-green-400 rounded"></div>
                        <div className="h-6 bg-green-400 rounded"></div>
                        <div className="h-6 bg-green-400 rounded"></div>
                        <div className="h-6 bg-green-400 rounded"></div>
                        <div className="h-6 bg-yellow-400 rounded"></div>
                        <div className="h-6 bg-red-400 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'ai' && (
              <div className="space-y-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-lg font-medium mb-3">Default Risk Prediction Model</h3>
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-medium">Customer ID: #8742</span>
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                        High Risk (78%)
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Income Instability</span>
                          <span className="text-sm font-medium">40%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-red-400 rounded-full" style={{width: '40%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Payment History</span>
                          <span className="text-sm font-medium">25%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-orange-400 rounded-full" style={{width: '25%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Discretionary Spending</span>
                          <span className="text-sm font-medium">13%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-yellow-400 rounded-full" style={{width: '13%'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t">
                      <h4 className="font-medium mb-2">SHAP Value Explanation</h4>
                      <p className="text-sm text-gray-600">
                        The model identified 3 key factors contributing to high risk:
                        income drop (40%), missed EMI (25%), and increased luxury expenses (13%).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'alerts' && (
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-100 p-4 rounded-lg">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-red-100 rounded-full p-2">
                        <AlertTriangle className="h-6 w-6 text-red-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-red-700">High Risk Alert - Customer #8742</h3>
                      <p className="text-sm text-gray-700 mt-1">
                        Income dropped 40% over 2 months, missed last EMI payment
                      </p>
                      <div className="mt-3 flex space-x-3">
                        <button className="bg-white text-red-600 border border-red-200 px-3 py-1.5 rounded text-sm font-medium">
                          Contact Customer
                        </button>
                        <button className="bg-red-600 text-white px-3 py-1.5 rounded text-sm font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-lg">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-yellow-100 rounded-full p-2">
                        <AlertTriangle className="h-6 w-6 text-yellow-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-yellow-700">Medium Risk Alert - Customer #5629</h3>
                      <p className="text-sm text-gray-700 mt-1">
                        Increasing credit card usage, delayed previous EMI by 5 days
                      </p>
                      <div className="mt-3 flex space-x-3">
                        <button className="bg-white text-yellow-600 border border-yellow-200 px-3 py-1.5 rounded text-sm font-medium">
                          Contact Customer
                        </button>
                        <button className="bg-yellow-600 text-white px-3 py-1.5 rounded text-sm font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-700 mb-3">Portfolio Risk Overview</h3>
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-center">
                      <div className="w-32 h-32 relative rounded-full flex items-center justify-center bg-gray-50">
                        <div className="absolute inset-0">
                          <div className="absolute top-0 left-0 w-1/2 h-1/2 rounded-tl-full border-t-8 border-l-8 border-red-500"></div>
                          <div className="absolute top-0 right-0 w-1/2 h-1/2 rounded-tr-full border-t-8 border-r-8 border-yellow-500"></div>
                          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-bl-full border-b-8 border-l-8 border-green-500"></div>
                          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-br-full border-b-8 border-r-8 border-blue-500"></div>
                        </div>
                        <div className="text-2xl font-bold">542</div>
                      </div>
                      
                      <div className="ml-8">
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                            <span className="text-sm">High Risk: 8%</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                            <span className="text-sm">Medium Risk: 12%</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                            <span className="text-sm">Low Risk: 64%</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                            <span className="text-sm">Very Low Risk: 16%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};