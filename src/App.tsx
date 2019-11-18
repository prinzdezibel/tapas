import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tapas</h1> 
        <pre>
          {JSON.stringify(process.env)}
        </pre>
      </header>
    </div>
  );
}

export default App;
