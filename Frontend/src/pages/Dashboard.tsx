import React from 'react';
import { motion } from 'framer-motion';
// import { useAuth } from '../context/AuthContext';
import { Demo } from '../Components/Demo';
import { Navbar } from '../Components/Navbar';

export const Dashboard = () => {
//   const { signOut } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      <Navbar showAuthButtons={false} />
      <main className="pt-20">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <button
              // onClick={() => signOut()}
              className="bg-white text-gray-600 px-4 py-2 rounded-lg border hover:bg-gray-50 transition-colors"
            >
              Sign Out
            </button>
          </div>
          <Demo />
        </div>
      </main>
    </motion.div>
  );
};