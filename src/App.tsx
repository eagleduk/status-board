import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/info">info</Link>
            </li>
            <li>
              <Link to="/calendar">calendar</Link>
            </li>
            <li>
              <Link to="/address">address</Link>
            </li>
          </ul>
        </nav>
      </header>
      App.tsx <Outlet />
      <footer>&copy; SJ.LEE</footer>
    </div>
  );
}

export default App;
