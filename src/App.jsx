import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ErrorImage from '../src/assets/error/404.jpeg';
import './App.css';
import ErrorLoader from './ErrorLoader';
import TestAPI from './TestAPI';
import Category from './components/Category';
import Aside from './components/aside/Aside';
import Main from './components/main/Main';
import Suggestions from './components/main/Suggestions';
import Navbar from './components/nav/Navbar';
import Player from './components/play/Player';
import SearchResult from './components/search/SearchResult';
import ContextProvider from './context/ContextProvider';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RequireAuth from './components/require-auth';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Navbar />
        <div className='flex items-start'>
          <Aside />
          <div className='overflow-y-scroll h-[calc(100dvh-70px)] w-full'>
            <Suggestions />
            <Routes>
              <Route
                path='*'
                element={
                  <ErrorLoader
                    image={ErrorImage}
                    errorMsg={
                      'The page you are looking for could not be located. It may have been moved or deleted.'
                    }
                  />
                }
              />
              <Route element={<RequireAuth />}>
                <Route path='/' element={<Main />} />
                <Route path='player/:vId/:catId' element={<Player />} />
                <Route path='search/:q' element={<SearchResult />} />
              </Route>
              <Route path='signup' element={<Signup />} />
              <Route path='login' element={<Login />} />

              <Route path='category/:catId' element={<Category />} />
              <Route path='test' element={<TestAPI />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
