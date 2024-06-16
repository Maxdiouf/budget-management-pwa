// src/components/Home.js
import React from 'react';
import supabase from '../supabaseClient';

const Home = () => {
  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      alert('User signed out successfully');
    } catch (error) {
      console.error('Error signing out: ', error.message);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Home;
