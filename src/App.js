import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar.component';
import User from './components/users.component';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Navbar}/>
      <Route path={"/users/:id"} component={User} />
    </Router>
  );
}

export default App;
