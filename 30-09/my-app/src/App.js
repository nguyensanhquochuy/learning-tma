import logo from './logo.svg';
import './App.css';
import MyComponent from './components/test/MyComponent';
import React from 'react';
import Header from './components/Header/Header';
import { Link, Outlet } from 'react-router-dom';


const App = () => {
  return (
    <div>
      {/* <MyComponent></MyComponent> */}

      <div className='app-container'>
        <div className='header-container'>
          <Header />
        </div>
        <div className='main-container'>
          <div className='side-nav-container'>

          </div>
          <div className='app-content'>
            <Outlet />
          </div>
        </div>
      </div>

      {/* <div>
        test link
        <div>
          <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
            <Link to="/users">Go to User page</Link >
          </button>
          <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
            <Link to="/admins">Go to Admin page</Link >
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default App;
