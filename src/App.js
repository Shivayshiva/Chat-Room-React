import "./App.css";
import { useState, useEffect } from "react";
import { getDatabase, ref, push, set, onChildAdded } from "firebase/database";

function App() {
  const [name, setName] = useState("");
  const [chats, setChats] = useState([]);
  const [msg, setMsg] = useState("");
  const db = getDatabase();
  const chatListRef = ref(db, "chats");

  useEffect(() => {
    onChildAdded(chatListRef, (data) => {
      setChats((chats) => [...chats, data.val()]);
    });
  }, []);

  const sendChat = () => {
    const chatRef = push(chatListRef);
    set(chatRef, { name, message: msg });
    // const c = [...chats];
    // c.push({name, message:msg});
    // setChats(c);
    setMsg("");
  };

  return (
    <div>
      {name ? null : (
        <div className="input-div">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Name"
            onBlur={(e) => setName(e.target.value)}
          />
        </div>
      )}
      {name ? (
        <div>
          <h1>User:{name}</h1>
          <div className="chat-container">
            {chats.map((c) => (
              <div className={`container ${c.name === name ? "me" : ""}`}>
                <p className="chatbox">
                  <strong>{c.name}:</strong>
                  <span>{c.message}</span>
                </p>
              </div>
            ))}
            {/* <div className='container'>
            <p className='chatbox'>
              <strong>name:</strong>
              <span>chat message</span>
            </p>
        </div> */}
        </div>
        <div className="btm">
            <input
              type="text"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Enter Your Messae"
            />
            <button onClick={() => sendChat()}>Send.</button>
        </div>
      </div>
      ) : null}
    </div>
  );
}

export default App;
