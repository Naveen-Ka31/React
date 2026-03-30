import { useState } from 'react';

function PatientCard() {

  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', width: '300px', fontFamily: 'Arial' }}>
      <h3>Patient: Naveen</h3>
      <p>Status: Ward 4 Admitted</p>

      <button 
        onClick={()=>setShowDetails(!showDetails)}
        style={{ cursor: 'pointer', padding: '5px 10px', marginBottom: '10px' }}
      >

        {showDetails ? "Hide Medical Details" : "Show Medical Details"}
      </button>

      {showDetails &&(
        <div style={{ padding: '10px', backgroundColor: '#f9f9f9', borderLeft: '3px solid blue' }}>
          <p><strong>Blood Type:</strong> O+</p>
          <p><strong>Allergies:</strong> Penicillin</p>
          <p><strong>Assigned Doctor:</strong> Dr. Sharma</p>
        </div>
      )}

    </div>
  );
}

export default PatientCard;