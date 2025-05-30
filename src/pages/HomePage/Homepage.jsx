export default function HomePage() {
    return (
        <div>
            <CategoryPreviews/>

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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900 font-gothic">Collections</h2>

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

 
