import { useState } from 'react';

function App() {
  const patients =[
    { id: 1, name: 'Rahul', type: 'Routine Checkup' },
    { id: 2, name: 'Anjali', type: 'Emergency' },
    { id: 3, name: 'Vikram', type: 'Routine Checkup' }
  ];

  if (patients.length === 0) {
    return (
      <div style={{ padding: '20px' }}>
        <p>No patients in the waiting room! The doctors can take a break.</p>
      </div>
    );
  }
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>OPD Waiting List</h2>
      
      <ul>
        {
        patients.map((patient) => (
          <li 
            key={patient.id} 
            style={{ 
              padding: '5px',
              color: patient.type === 'Emergency' ? 'red' : 'black',
              fontWeight: patient.type === 'Emergency' ? 'bold' : 'normal'
            }}
          >
            {patient.name} — {patient.type}
          </li>
        ))}
      </ul>


    </div>
  );
}

export default App;