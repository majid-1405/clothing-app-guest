import { AiOutlineDown } from "react-icons/ai"; 
import { AiOutlineUp } from "react-icons/ai"; 
import { useState } from "react";


const faqs = [
  {
    Tanya: "Bisakah saya membatalkan pemesanan kapan saja?",
    Jawab:
      "Ya, Anda dapat membatalkan kapan saja tanpa ada pertanyaan yang diajukan saat Anda membatalkan, tetapi kami akan sangat menghargai jika Anda memberi kami masukan.",
  },
  {
    Tanya: "Metode pembayaran apa saja yang tersedia?",
    Jawab:
      "Kami menerima pembayaran melalui transfer bank, e-wallet (OVO, GoPay, Dana), kartu kredit, dan pembayaran COD (Cash on Delivery) di beberapa area.",
  },
  {
    Tanya: "Apakah saya bisa menukar atau mengembalikan barang?",
    Jawab:
      "Ya, kamu bisa menukar atau mengembalikan barang dalam waktu 7 hari setelah barang diterima, selama barang belum dipakai dan label masih terpasang.",
  },
  {
    Tanya: "Berapa lama pengiriman dilakukan?",
    Jawab:
      "Pengiriman standar memakan waktu 2-5 hari kerja tergantung lokasi. Kami juga menyediakan opsi pengiriman ekspres untuk wilayah tertentu.",
  },
  {
    Tanya: "Apakah ukuran produk sesuai dengan standar lokal?",
    Jawab:
      "Kami menggunakan standar ukuran lokal (Indonesia). Panduan ukuran tersedia di setiap halaman produk untuk membantu kamu memilih ukuran yang tepat.",
  },
  
];

function FAQItem({ Tanya, Jawab }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <div className="pt-6 pb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-black  font-gothic rounded-lg "
      >
        {Tanya}
        {isOpen ? (
            <AiOutlineUp className="size-5 text-black  font-gothic"/>
          
        ) : (
            <AiOutlineDown className="text-black  font-gothic"/>
          
        )}
      </button>
      {isOpen && (
        <div className="w-full overflow-hidden transition-[height] duration-300">
          <p className="text-black  font-gothi">{Jawab}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
    return (
        <div className="bg-gray-100">
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto  mt-30">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="max-w-xs">
              <br />
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tighttext-black font-gothic">
                FAQs
              </h2>
              <p className="mt-1 hidden md:block text-black font-gothic">
                Jawabs to the most frequently asked Tanyas.
              </p>
            </div>
          </div>
  
          <div className="md:col-span-3">
            <div className="divide-y divide-gray-200 dark:divide-neutral-700">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} Tanya={faq.Tanya} Jawab={faq.Jawab} />
              ))}
            </div>
          </div>
        </div>
      </div>
        </div>
      
    );
  }

