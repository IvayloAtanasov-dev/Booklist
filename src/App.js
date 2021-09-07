import "./styles.css";
import Navbar from "./components/Navbar";
import Booklist from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";

export default function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
      </ThemeContextProvider>
    </div>
  );
}
