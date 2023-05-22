import { Navbar } from "./components/Navbar/Navbar";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { SearchResults } from "./components/SearchResults/SearchResults";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <SearchBar />
        <SearchResults />
      </div>
    </div>
  );
}
