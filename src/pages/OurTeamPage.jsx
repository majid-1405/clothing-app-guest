export default function OurTeamPage() {
  return (
    <section className="bg-white border border-gray-100 rounded-xl mt-30 mb-20 mx-6">
      <div className="container px-6 py-6 mx-auto">
        <div className="xl:flex xl:items-center xl:-mx-4">
          <div className="xl:w-1/2 xl:mx-4">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl font-gothic">
              Our Team
            </h1>
            <p className="max-w-2xl mt-4 text-gray-700">
              Di balik setiap koleksi keren dan layanan terbaik kami, ada tim
              hebat yang bekerja dengan penuh semangat. Kami percaya bahwa
              kekuatan sebuah brand tidak hanya dari produk, tetapi juga dari
              orang-orang yang berdedikasi di dalamnya. Inilah tim di balik
              Clothing Store:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
            <div>
              <img
                className="object-cover rounded-xl aspect-square"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="John Doe"
              />
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize font-gothic">
                Muhammad Majid Avindra
              </h1>
              <p className="mt-2 text-gray-500 capitalize ">
                Full stack developer
              </p>
            </div>

            <div>
              <img
                className="object-cover rounded-xl aspect-square"
                src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Mia"
              />
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize font-gothic">
                Mia
              </h1>
              <p className="mt-2 text-gray-500 capitalize ">Graphic Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
