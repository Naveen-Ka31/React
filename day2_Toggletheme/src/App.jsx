import { useState, createContext, useContext } from 'react';


const ThemeContext = createContext();




function ThemeBox() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const boxStyle = {
    padding: '20px',
    border: '2px solid gray',
    marginTop: '20px',
    // backgroundColor: theme === 'dark' ? '#333' : '#fff',
    // color: theme === 'dark' ? '#fff' : '#000',
    backgroundColor: '#ffffff',
    color: '#000000',
    borderRadius: '8px'
  };

  return (
     <div style={{border:"1px solid black",padding:'20px',marginTop:'20px'}}>
    {/* //<div style={boxStyle}> */}
      <h3>Current Theme: {theme}</h3>

      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const pageStyle = {
    backgroundColor: theme === 'dark' ? '#333' : '#fbfbfb',
    color: theme === 'dark' ? '#fff' : '#000',
    height: '100vh',
    padding: '20px'
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={pageStyle}>
        <h2>Day 2: Theme Toggle</h2>
        <ThemeBox />
      </div>
    </ThemeContext.Provider>
  );
  
}

export default App;