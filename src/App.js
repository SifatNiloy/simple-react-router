import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Friends from './component/Friends/Friends';
import About from './component/About/About';
import Header from './component/Header/Header';
import FriendDetail from './component/FriendDetail/FriendDetail';
import Culture from './component/Culture/Culture';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/friend/:friendId" element={<FriendDetail></FriendDetail>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/culture" element={<Culture />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
