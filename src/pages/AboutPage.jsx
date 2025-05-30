import React from "react";

export default function AboutPage() {
  return (
    <section className="bg-white border border-gray-100 rounded-xl mt-20 mb-20 mx-6 shadow-lg">
      <div className="container px-6 py-12 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <h2 className="text-3xl font-semibold text-gray-800 lg:text-4xl font-gothic">
              About Us
            </h2>

            <p className="mt-4 text-gray-600">
              Selamat datang di Clothing Store – Tempatnya Fashion Berkualitas
              dan Gaya Terkini!
            </p>

            <p className="mt-4 text-gray-600">
              Kami adalah toko clothing yang menghadirkan berbagai pilihan
              pakaian trendi dan berkualitas tinggi untuk pria dan wanita.
              Dengan semangat untuk menginspirasi gaya hidup penuh percaya diri,
              kami menghadirkan produk-produk pilihan mulai dari kaos, kemeja,
              jaket, celana, hingga aksesoris fashion.
            </p>

            <p>
              Didirikan pada tahun 2024, Clothhing Store hadir
              sebagai solusi bagi kamu yang ingin tampil stylish tanpa
              mengorbankan kenyamanan. Setiap koleksi kami dipilih dan dirancang
              dengan cermat untuk mengikuti tren mode terbaru, tanpa melupakan
              nilai klasik yang tak lekang oleh waktu.
            </p>

            <p>
              Kami percaya bahwa setiap orang layak untuk tampil keren dan
              percaya diri setiap hari. Terima kasih telah menjadi bagian dari
              perjalanan kami. Yuk, temukan gaya kamu bersama kami!
            </p>

            <div className="mt-6">
              <a
                href="#"
                className="inline-block px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 lg:mx-6 mt-8 lg:mt-0">
            <img
              className="w-full rounded-lg shadow-md"
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1470&q=80"
              alt="Team working together"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
