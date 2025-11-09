import "./App.css";
import { useState } from "react";
import Header from "./Header/Header";
import Recommended from "./Recommended/Recommended";
import Products from "./Products/Products";
import products from "./db/data";
import Card from "./components/Card";
import Button from "./components/Button";
import Sidebar from "./Sidebar/Sidebar";

const App = () => {
  const filters = ["All Products", "Nike", "Adidas", "Puma", "Vans"];
  const [currentFilter, setCurrentFilter] = useState("All Products");

  const handleFilter = (filter) => {
    setCurrentFilter(filter);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
  };

  const result = products.map((d) => (
    <Card
      key={d.title}
      img={d.img}
      title={d.title}
      star={d.star}
      reviews={d.reviews}
      prevPrice={d.prevPrice}
      newPrice={d.newPrice}
    />
  ));

  const recommended = filters.map((filter) => (
    <Button
      key={filter}
      title={filter}
      onClick={() => handleFilter(filter)}
      isCurrent={currentFilter === filter}
    />
  ));

  return (
    <div className="grid">
      <div className="header-grid">
        <Header />
      </div>
      <div className="sidebar-grid">
        <Sidebar onChange={handleChange} />
      </div>
      <div className="recommended-grid">
        <Recommended recommended={recommended} />
      </div>
      <div className="products-grid">
        <Products result={result} />
      </div>
    </div>
  );
};

export default App;
