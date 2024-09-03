import NewCopy from './components/new-copy';
import './App.css';
import Templates from './components/templates';
import { useState, useEffect } from "react";


function App() {
  
  const [templates, setTemplates] = useState([{title: 'Test', template: 'Testing to see if the copy and past works', key: 1}, {title: 'Second Test', template:'This is the second test', key: 2},{title: 'Third Test', template:'This is the third test', key: 3}])
  


  useEffect(() => {
    fetch("/api/getTemplates", {
      headers: {
      "Content-Type": "application/json",
      },
      method: "post",
  })
  .then(res => {
    return res.json()
  })
  .then(data => {
    console.log(data)
    setTemplates(data)
  })
  }, [])



  return (
    <div className="App">
      <header>Home</header>
      <div className='new-copy'>
        <NewCopy 
          templates = {templates}
          setTemplates = {setTemplates}
        />
      </div>
      <div className='line'></div>
      <Templates 
          templates = {templates}
      />
    </div>
  );
}

export default App;