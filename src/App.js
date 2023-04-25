import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Default from "./components/Default";
import hotPost from "./components/HotPost";
import locationSearch from "./components/LocationSearch";
import tagSearch from "./components/TagSearch";

function App() {
  return (
    <div id="main">
      <BrowserRouter>
        <Default />
        <Routes>
          <Route path="/hotPost" component={<hotPost />} />
          <Route path="/locationSearch" component={<locationSearch />} />
          <Route path="/tagSearch" component={<tagSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
