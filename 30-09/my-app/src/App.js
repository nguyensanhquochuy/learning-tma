import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';

import React from 'react';
class App extends React.Component {
  render() {
    return (
      <div>
        <MyComponent></MyComponent>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       hello
//       <MyComponent></MyComponent>
//     </div>
//   );
// }

export default App;
