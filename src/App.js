import './App.css';
import 'tachyons';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Students from './components/Students/Students';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/students' element={<Students />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
