import { useState, useEffect } from "react";
import './style.css'


function App() {
  const [value, setValue] = useState('');
  const [messageList, setMessageList] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  }
 
  const handleSubmit = (event) => {
    setMessageList(prev => [...prev, {id: prev.length, text: value, author: 'user'}]);
    event.preventDefault();
  }
  
  useEffect(() => {    
      if((messageList[messageList.length-1]?.author) === 'user') {
        setTimeout(() => 
          setMessageList(prev => [...prev, {id: prev.length, text: 'This is automatic answer', author: 'robot'}])
        , 1500)
      }
  }, [messageList]);


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <input type="submit" value="Отправить" />
      </form>
      <div className="message-list">
        {messageList.map((obj) => (
          <div key={obj.id}>
            <span className="author">{obj.author}</span>
            <div className="message" >{obj.text}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
