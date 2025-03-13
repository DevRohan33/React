import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 space-y-6">
      <h3 className="text-2xl font-semibold text-white">Counter App</h3>
      <Counter step={1} />
    </div>
  );
}

export default App;
