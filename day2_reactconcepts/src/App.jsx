function Child(props){
  return(
   <div style={{padding:'20px',border:'1px solid black'}}>
    <h3 >Child Conatiner</h3>
    <p style={{fontsize:'20px',color:'red'}}>
      Data recieved:<strong>{props.message}</strong>
    </p>
   </div>
  )
}

function App(){
  return(
    <div>
      <h2>Parent Child communication</h2>
      <p>This is parent component Below is Child component rendering the Child</p>
      <Child message="Hello This msg Sent from parent"/>
    </div>
  )
}

export default App
