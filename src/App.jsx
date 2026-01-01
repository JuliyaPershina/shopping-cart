import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {


  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <Header />
      <h1>Product Catalog 🛒</h1>
      <ProductList />
    </div>
  );
}

export default App;
