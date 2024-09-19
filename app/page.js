import Navbar from "./components/Navbar";
import Buy1Get1 from "./components/Buy1Get1";
import PatDavid from "./components/PatDavid";
import Collection from "./components/Collection";
import Arrival from "./components/Arrival";
import Future from "./components/Future";
import Believe from "./components/Believe";
import Product from "./components/Product";
import Support from "./components/Support";
import Footer from "./components/Footer";

export default function Home() {

  const products = [
    { id: 1, name: 'Army Green Active Short Sleeve', price: '$34.95', discount: '$34.95', image: '/img1.png' },
    { id: 2, name: 'Army Green Active Short Sleeve', price: '$34.95', discount: '$34.95', image: '/img2.png' },
    { id: 3, name: 'Army Green Active Short Sleeve', price: '$34.95', discount: '$34.95', image: '/img3.jpeg' },
    { id: 4, name: 'Army Green Active Short Sleeve', price: '$34.95', discount: '$34.95', image: '/img4.png' },
    { id: 5, name: 'Army Green Active Short Sleeve', price: '$34.95', discount: '$34.95', image: '/img3.jpeg' },
  ];

  return (
    <div>
      <Navbar />
      <div className="bg-red-600 h-full w-full">
        <h1 className="absolute font-actOfRejection text-4xl md:text-7xl lg:text-8xl pt-32 md:pt-40 lg:pt-48 pl-4 md:pl-16 lg:pl-32 text-gray-300 opacity-50">Future Looks Bright!</h1>
        <div className="relative pt-36 md:pt-44 lg:pt-56 px-6 md:pl-24 lg:pl-40 ">
        <div className="flex overflow-x-auto space-x-4 p-6 scrollbar-hide">
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-60 bg-red-600 text-black rounded-lg pb-12 transform duration-300 hover:scale-105">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover rounded-lg"
              />
              <div className="font-inter text-white">
                <h3 className="text-sm py-1">{product.name}</h3>
                <p className="text-sm py-1">
                {product.price} <span className="line-through text-gray-400">{product.discount}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      <Buy1Get1 />
      <PatDavid />
      <Collection />
      <Arrival />
      <Future />
      <Believe />
      <Product />
      <Support />
      <Footer />
    </div>
  );
}
