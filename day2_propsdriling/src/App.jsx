function Profile(props) {
  return (
    <div style={{ border: '2px solid green', padding: '15px'}}>
      <h4>👤 Profile Component</h4>
      <p style={{ margin: 0 }}>Logged in as: <strong>{props.user}</strong></p>
    </div>
  );
}
function Header(props) {
  return (
    <div style={{ border: '2px solid orange', padding: '15px', marginTop: '10px', }}>
      <h3 style={{ margin: '0 0 5px 0' }}> Header Component</h3>
      <p style={{ fontSize: '12px', color: 'gray', margin: '0 0 10px 0' }}>(Just passing data to Profile...)</p>
      <Profile user={props.user} />
    </div>
  );
}
function Layout(props) {
  return (
    <div style={{ border: '2px solid blue', padding: '15px'}}>
      <h2 style={{ margin: '0 0 5px 0' }}> Layout Component</h2>
      <p style={{ fontSize: '12px', color: 'gray', margin: '0 0 10px 0' }}>(Just passing data to Header...)</p>
      
      {/* Passing it down */}
      <Header user={props.user} />
    </div>
  );
}
function App() {
  const loggedInUser = "Dr. Naveen (Cardiology)";

  return (
    <div style={{ border: '2px solid black', padding: '20px' }}>
      <h1 style={{ margin: '0 0 10px 0' }}> App Component</h1>
      <p>Initial data starts here: <strong>{loggedInUser}</strong></p>
      <Layout user={loggedInUser} />
    </div>
  );
}

export default App;