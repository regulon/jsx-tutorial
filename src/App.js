import React from 'react';
import './App.css';

const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: "😃",
    name: "Cara Sonriendo"
  },
  {
    emoji: "🎉",
    name: "Cañón De Confeti"
  },
  {
    emoji: "💃",
    name: "Mujer Bailando"
  },
];

function App() {
  const greeting = "greeting";
  const displayAction = false;
  return (
    <div className='container'>
    <h1 id={greeting}>Hello, World!</h1>
    {displayAction && <p>I'm writing JSX</p>}
    <ul>
      {
        emojis.map(emoji => (<li key={emoji.name}>
          <button onClick={displayEmojiName}>
            <span role='img' aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
          </button>
        {/*<li>
        <button onClick={displayEmojiName}>
          <span role='img' aria-label='Cara Sonriendo' id='Cara Sonriendo'>😃</span>
        </button>
        </li>
        <li>
          <button onClick={displayEmojiName}>
            <span role='img' aria-label='Cañón De Confeti' id='Cañón De Confeti'>🎉</span>
          </button>
        </li>
        <li>
          <button onClick={displayEmojiName}>
            <span role='img' aria-label='Mujer Bailando' id='Mujer Bailando'>💃</span>
          </button>
        </li> */}
          </li>
        ))
      }
    </ul>
  </div>
  );
}

export default App;
