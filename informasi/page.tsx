import Image from "next/image";
import Link from "next/link"; // Impor Link dari Next.js
import Foto from "..//../img/laundry2.jpg";

export default function ProfilPage() {
  return (
    <div className="flex flex-col items-center p-8 bg-blue-100 min-h-screen w-full">
      <main className="w-full max-w-3xl overflow-hidden">
        <div className="relative mb-4">
          <Image
            src={Foto}
            width={400}
            height={200} // Disesuaikan untuk mencocokkan rasio gambar
            className="w-full h-auto object-cover"
            alt="Tumpukan sampah yang menunjukkan pentingnya pengelolaan sampah yang baik"
          />
        </div>

        {/* Header positioned below the image */}
        <header className="flex flex-col items-start ml-5">
          <h1 className="text-3xl font-bold mb-2 hover:text-blue-700">
            LAUNDRY
          </h1>
        </header>

        {/* Konten Artikel */}
        <article className="p-6 text-justify leading-relaxed text-gray-800">
          <section className="mb-6">
            <p>
            Laundry adalah layanan yang menawarkan pencucian dan perawatan pakaian serta barang lainnya, 
            yang kini semakin populer karena gaya hidup modern yang sibuk. Banyak orang memilih jasa 
            laundry untuk menghemat waktu dan mendapatkan hasil cuci yang lebih bersih, terutama bagi 
            pakaian dengan bahan sensitif. Jenis layanan laundry mencakup cuci kering, cuci setrika, 
            setrika saja, dan cuci express. Bisnis laundry menawarkan peluang usaha yang menjanjikan 
            dengan permintaan yang terus meningkat, modal yang relatif terjangkau, dan biaya operasional 
            yang dapat dikelola. Untuk sukses, penting memilih lokasi strategis, menjaga kualitas layanan, 
            serta berinovasi dengan teknologi dan promosi yang tepat.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
