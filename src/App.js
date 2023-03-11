import "./App.css";
import NavBar from "./components/NavBar";

const products = [
  {
    id: 1,
    title: "Milk",
    category: "Dairy",
    createdAt: "2023-03-11T15:35:58.482Z",
  },
  {
    id: 2,
    title: "Cheese",
    category: "Dairy",
    createdAt: "2023-03-11T15:36:08.475Z",
  },
  {
    id: 3,
    title: "Butter",
    category: "Dairy",
    createdAt: "2023-03-11T15:36:18.601Z",
  },
];

const categories = [
  {
    id: 1,
    title: "Dairy",
    createdAt: "2023-03-11T15:33:01.751Z",
  },
];

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
