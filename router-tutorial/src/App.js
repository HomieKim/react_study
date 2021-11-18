import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import Home from './Home';
import About from './About';
import { Link } from 'react-router-dom';

const App = ()=>{
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact/>
      <Route path={['/about', '/info']} component={About}/>
    </div>
  )
}

export default App;
