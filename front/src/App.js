import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainContent from './layouts/MainContent/MainContent';

const LoginLayout = lazy(() => import('./layouts/LoginLayout/LoginLayout'));
const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));

function App() {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Routes>
        <Route path='/'>
          <Route path='/login' element={<LoginLayout />} />
          <Route path='/' element={<HomePage />} >
            <Route index element={<MainContent title={'dashboard'} />} />
            <Route path='analytics' element={<MainContent title={'analytics'} />} />
            <Route path='suppliers' element={<MainContent title={'suppliers'} />} />
            <Route path='cities' element={<MainContent title={'cities'} />} />
            <Route path='vehicles' element={<MainContent title={'vehicles'} />} />
            <Route path='offices' element={<MainContent title={'offices'} />} />
            <Route path='map' element={<MainContent title={'map'} />} />
            <Route path='trips' element={<MainContent title={'trips'} />} />
            <Route path='passengers' element={<MainContent title={'passengers'} />} />
            <Route path='employees' element={<MainContent title={'employees'} />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
