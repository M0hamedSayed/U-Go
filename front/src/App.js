<<<<<<< Updated upstream
import './App.css';

function App() {
  return (
    <div className="App">

    </div>
=======
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginLayout from './layouts/LoginLayout/LoginLayout';
import HomePage from './Pages/HomePage/HomePage';
// const LoginLayout = lazy(()=> )
function App() {
  return (
    <Suspense>
      {/* <LoginLayout /> */}

      <Routes>
        <Route path='/'>
          <Route path='/login' element={<LoginLayout />} />
          <Route path='/dashboard' element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
>>>>>>> Stashed changes
  );
}

export default App;
