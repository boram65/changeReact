import "./Default.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div id="menu">
      <div class="header_logo">
        <h1>W H E R E &nbsp; P L A C E</h1>
      </div>
      <div class="header_menu">
        <Link to="/hotPost">
          <span>인기 게시물</span>
        </Link>
        <Link to="/locationSearch">
          <span>위치 검색</span>
        </Link>
        <Link to="/tagSearch">
          <span>태그 검색</span>
        </Link>
      </div>
    </div>
  );
}

export default App;
