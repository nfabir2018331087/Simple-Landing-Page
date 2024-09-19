export default function Arrival(){

    const products = [
        { id: 1, name: 'Army Green Active Short Sleeve', price: '$34.95', discount: '$34.95', image: '/cap1.jpeg' },
        { id: 2, name: 'Army Green Active Short Sleeve', price: '$34.95', discount: '$34.95', image: '/cap2.jpeg' },
        { id: 2, name: 'Army Green Active Short Sleeve', price: '$34.95', discount: '$34.95', image: '/cap2.jpeg' },
        { id: 3, name: 'Army Green Active Short Sleeve', price: '$34.95', discount: '$34.95', image: '/cap3.jpeg' },
      ];


    return (
        <div className="bg-gray-100 h-full w-full">
        <h1 className="font-montserrat text-4xl pt-20 pl-6 md:pl-16 lg:pl-32 text-black font-semibold">NEW ARRIVAL</h1>
        <div className="relative pt-4 pb-16 pl-2 md:pl-10 lg:pl-24 ">
        <div className="flex overflow-x-auto space-x-8 py-4 p-2 md:p-4 lg:p-8 scrollbar-hide">
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-72 bg-white text-black rounded-lg p-2 transform duration-300 hover:scale-105">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover rounded-lg"
              />
              <div className="font-inter">
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
    )
}