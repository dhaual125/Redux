// eslint-disable-next-line no-unused-vars
import React from 'react';

const Home = () => {
  const handleClick = () => {
    alert('Let\'s get started!');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Home Page</h1>
      <p style={styles.subtitle}>
        This is your starting point to explore our website and discover more.
      </p>
      <button style={styles.button} onClick={handleClick}>
        Get Started
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '15px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '25px',
    maxWidth: '500px',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#28a745',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Home;
