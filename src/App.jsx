import './resetGlobal/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import NuevoVideo from './pages/nuevoVideo';
import GlobalContextVideosProvider from './context/GlobalContextVideos';

function App() {



  return (
   

    <GlobalContextVideosProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nuevoVideo" element={<NuevoVideo />} />
        </Routes>
      </Router>
    </GlobalContextVideosProvider>

    
  );
}

export default App;
