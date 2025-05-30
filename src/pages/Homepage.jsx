import { AiOutlinePlus } from "react-icons/ai"; 
import HeroSection from "../components/HeroSection"

export default function HomePage() {
    return (
        <div>
            <HeroSection/>

            <CategoryPreviews/>

            <ProductList/>

        </div>
    )
}



function CategoryPreviews(){
    const callouts = [
        {
          name: 'Clothes',
          description: 'T-Shirt Basic',
          imageSrc: 'https://down-id.img.susercontent.com/file/id-11134207-7r98o-lzj5wyfeahuwf1',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: '#',
        },
        {
          name: 'Clothes and Outer',
          description: 'Windbreaker Jacket',
          imageSrc: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/464024/item/goods_09_464024_3x4.jpg?width=600',
          imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
          href: '#',
        },
        {
          name: "Accessories",
          description: 'Belt',
          imageSrc: 'https://www.aignermunich.co.id/media/catalog/product/cache/d7ed22e8ffd4d1896e1cce971f9faefc/t/m/tm24070015101-1.jpg',
          imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
          href: '#',
        },
      ]
    return(
        <div className="bg-gray-100">
      <div className="w-full  sm:px-6 lg:px-8">
        <div className="max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          
          <h2 className="text-2xl font-bold text-gray-900 font-gothic text-left">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative font-gothic">
                <img
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    )
}


function ProductCard({ image, name, price }) {
  return (
    <div className="flex flex-col h-full">
      <div className="relative w-full h-72">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-md" />
        <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:scale-110 transition">
          <AiOutlinePlus />
        </button>
      </div>
      <div className="mt-2 text-sm font-medium text-slate-800 text-center">{name}</div>
      <div className="text-sm text-slate-500 text-center">Rp  {price}</div>
    </div>
  );
}


function ProductList() {
  const products = [
    {
      name: "Socks Cotton",
      price: 30000,
      image: "https://cdn11.bigcommerce.com/s-sr2gbw/images/stencil/1280x1280/products/80/17197/Foot-Forms-2020---Crew-Socks--White__58965.1710360133.jpg?c=2",
    },
    {
      name: "Overalls Denim",
      price: 350000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv8Btcsv5Ds7eSIloDMS5gYYGrTwLx0JRnqMfefc-i-L7Gd2mGKqrkwJJu1eLxPRg40nA&usqp=CAU",
    },
    {
      name: "Chinos Pants",
      price: 320000,
      image: "https://ryusei.co.id/cdn/shop/products/10007574_1.jpg?v=1675682656",
    },
    {
      name: "Windbreaker Jacket",
      price: 450000,
      image: "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/464024/item/goods_09_464024_3x4.jpg?width=600",
      
    },
    {
      name: "Puffer Vest",
      price: 600000,
      image: "https://euro.mattandnat.com/cdn/shop/files/FW23-outerwear-rhett-black-1.jpg?v=1714498818",
    },
  ];
  return (
    <div className="flex justify-center px-4 py-8 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-15 max-w-7xl">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

 
