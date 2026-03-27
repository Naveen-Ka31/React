import { createContext, useContext } from 'react';

const UserContext = createContext();

function Profile() {
  const user = useContext(UserContext);

  return (
    <div style={{ border: '2px solid green', padding: '15px', marginTop: '10px', backgroundColor: '#e6ffe6' }}>
      <h4> Profile Component</h4>
      <p style={{ margin: 0 }}>Logged in as: <strong>{user}</strong></p>
    </div>
  );
}
function Header() {
  return (
    <div style={{ border: '2px solid orange', padding: '15px', marginTop: '10px', backgroundColor: '#fff3e6' }}>
      <h3 style={{ margin: '0 0 5px 0' }}>🏢 Header Component</h3>
      <p style={{ fontSize: '12px', color: 'gray', margin: '0 0 10px 0' }}>(I am totally empty now! No props!)</p>
      <Profile />
    </div>
  );
}
function Layout() {
  return (
    <div style={{ border: '2px solid blue', padding: '15px', marginTop: '10px'}}>
      <h2 style={{ margin: '0 0 5px 0' }}>🗂️ Layout Component</h2>
      <p style={{ fontSize: '12px', color: 'gray', margin: '0 0 10px 0' }}>(I am totally empty too!)</p>
      <Header />
    </div>
  );
}

function App() {
  const loggedInUser = "Dr. Naveen (Cardiology)";

  return (
    <UserContext.Provider value={loggedInUser}>
      <div style={{ border: '2px solid black', padding: '20px' }}>
        <h1 style={{ margin: '0 0 10px 0' }}> App Component</h1>
        <p>I uploaded the data directly to the Context Provider.</p>
        <Layout />
      </div>
    </UserContext.Provider>
  );
}

export default App;