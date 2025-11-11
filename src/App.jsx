import "./App.css";
import { useState } from "react";
import Header from "./Header/Header";
import Recommended from "./Recommended/Recommended";
import Products from "./Products/Products";
import products from "./db/data";
import Card from "./components/Card";
import Sidebar from "./Sidebar/Sidebar";

const App = () => {
  const [query, setQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("All Products");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleClick = (company) => {
    setSelectedCompany(company);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePrice = (e) => {
    setSelectedPrice(e.target.value);
  };

  const handleColors = (e) => {
    setSelectedColor(e.target.value);
  };

  const isPriceInRange = (price, priceRange) => {
    if (priceRange === "all") return true;
    if (priceRange === "$0 - 50") return price <= 50;
    if (priceRange === "$50 - $100") return price > 50 && price <= 100;
    if (priceRange === "$100 - $150") return price > 100 && price <= 150;
    if (priceRange === "over $150") return price > 150;

    return true;
  };

  const getFilteredProducts = () => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(query.toLowerCase());

      const matchesCompany =
        selectedCompany === "All Products" ||
        product.company === selectedCompany;

      const matchesCategory =
        !selectedCategory ||
        selectedCategory === "all" ||
        product.category === selectedCategory;

      const matchesPrice = isPriceInRange(product.newPrice, selectedPrice);

      const matchesColor =
        !selectedColor ||
        selectedColor === "all" ||
        product.color === selectedColor;

      return (
        matchesSearch &&
        matchesCompany &&
        matchesCategory &&
        matchesPrice &&
        matchesColor
      );
    });
  };

  const result = getFilteredProducts().map((product, index) => (
    <Card
      key={index}
      img={product.img}
      title={product.title}
      star={product.star}
      reviews={product.reviews}
      prevPrice={product.prevPrice}
      newPrice={product.newPrice}
    />
  ));

  return (
    <div className="grid">
      <div className="header-grid">
        <Header onChange={handleInputChange} inputValue={query} />
      </div>
      <div className="sidebar-grid">
        <Sidebar
          handleCategory={handleCategory}
          handlePrice={handlePrice}
          handleColors={handleColors}
        />
      </div>
      <div className="recommended-grid">
        <Recommended onClick={handleClick} currentCompany={selectedCompany} />
      </div>
      <div className="products-grid">
        <Products result={result} />
      </div>
    </div>
  );
};

export default App;
