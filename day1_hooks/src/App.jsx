import { useState ,useEffect} from 'react'

function App() {
  const [text, setText] = useState('')

   useEffect(() => {
      console.log("Component mounted! Effect is working.");
             }, []);
  return (
    <div style={{padding: '20px', fontFamily: 'Arial' }}>
      <h1>Welcome to Day 1 Tasks</h1>
      <div style={{ margin: '20px 0' }}>
        <p>Type something below:</p>
        <input 
          type="text" 
          placeholder="Type here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ padding: '8px', width: '200px' }}
        />
      </div>
      <h3 style={{ color: 'blue' }}>Live Output: {text}</h3>
      <button style={{ padding: '10px 20px', cursor: 'pointer', marginTop: '10px' }}>
        Click Me!
      </button>
     </div>
  )
}

export default App