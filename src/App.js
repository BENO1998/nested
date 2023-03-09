import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { createContext } from 'react';
import { arts } from './Data';
import NestedList from './NestedList';
import DataProvider from './DataContext';
import Topbar from './Topbar';

function App() {

  return (
    <DataProvider>
      <Topbar/>
      <NestedList/>
    </DataProvider>
  );
}

export default App;
