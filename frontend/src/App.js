// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//frontend/src/app.js
// import React, { Component } from 'react';

// class App extends Component {
//     state = {
//         posts: []
//     };

//     async componentDidMount() {
//         try {
//             const res = await fetch('http://127.0.0.1:8000/api/');
//             const posts = await res.json();
//             this.setState({
//                 posts
//             });
//         } catch (e) {
//             console.log(e);
//         }
//     }

//     render() {
//         return (
//             <div>sssssssssssssssssssssssssssss
//                 {this.state.posts.map(item => (
//                     <div key={item.id}>
//                         <h1>{item.title}</h1>
//                         <span>{item.content}</span>
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }

// export default App;

// import './App.css';

// function App() {
//   const name = 'React';
//   return <div className="App">Hello {name}</div>;

// }

// export default App;

// import { Component } from 'react';

// class App extends Component {
//     render() {

//         const name = 'React';
//         return (
//             <div className='react'>
//                 <h1>{name}</h1>
//             </div>
//         );
//     }
// }

import { useState } from 'react';
import Info from "./Info";

const App = () => {
  const [ visible , setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => {setVisible(!visible)}}>
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};

export default App;