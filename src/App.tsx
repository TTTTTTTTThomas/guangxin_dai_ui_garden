import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={{ 
        padding: '20px', 
        backgroundColor: '#f5f5f5', 
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>
          🎉 Guangxin Dai UI Component Library
        </h1>
        <p style={{ color: '#666', fontSize: '18px', marginBottom: '30px' }}>
          Your React component library is successfully deployed with Docker!
        </p>
        
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button style={{ 
            padding: '12px 24px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}>
            Primary Button
          </button>
          
          <button style={{ 
            padding: '12px 24px', 
            backgroundColor: '#6c757d', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}>
            Secondary Button
          </button>
          
          <button style={{ 
            padding: '12px 24px', 
            backgroundColor: '#dc3545', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}>
            Danger Button
          </button>
          
          <button style={{ 
            padding: '12px 24px', 
            backgroundColor: '#e0e0e0', 
            color: '#999', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'not-allowed',
            fontSize: '16px'
          }} disabled>
            Disabled Button
          </button>
        </div>
        
        <div style={{ marginTop: '40px', maxWidth: '600px' }}>
          <h2 style={{ color: '#333', marginBottom: '15px' }}>✅ Project Status</h2>
          <ul style={{ textAlign: 'left', color: '#666' }}>
            <li>✅ React + TypeScript setup complete</li>
            <li>✅ Styled-components implemented</li>
            <li>✅ Docker containerization working</li>
            <li>✅ Nginx serving on port 8083</li>
            <li>✅ All 9 components created</li>
            <li>✅ Storybook configuration ready</li>
            <li>✅ Test files implemented</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
