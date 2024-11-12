import Image from "next/image";
import Foto4 from "../../img/logo1.png";

export default function TentangKami() {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center bg-[#F3F9F3] p-8 lg:space-x-12 h-auto">
      {/* Bagian Kiri: Gambar */}
      <div className="flex-shrink-0">
        <div className="rounded-lg overflow-hidden w-[300px] h-[300px]">
          <Image 
            src={Foto4} 
            alt="Logo Kami" 
            layout="responsive" 
            width={300} 
            height={300} 
            className="object-cover"
          />
        </div>
      </div>

      {/* Bagian Kanan: Teks */}
      <div className="lg:w-1/2 space-y-6 lg:pl-8">
        <section>
          <h2 className="text-4xl font-bold text-[#7BA428]">TENTANG KAMI</h2>
          <p className="mt-6 text-gray-700 text-justify text-lg leading-relaxed">
          Selamat datang di layanan laundry kami! Kami berdedikasi untuk memberikan layanan laundry
            yang cepat, bersih, dan berkualitas tinggi. Dengan peralatan modern dan bahan pembersih
            ramah lingkungan, kami memastikan pakaian Anda akan terlihat seperti baru.
            Sebagai bonus, kami juga menyediakan layanan antar-jemput gratis di wilayah Banyuwangi Kota,
            sehingga Anda dapat menikmati kemudahan dan kenyamanan tanpa perlu repot datang ke tempat kami.
          </p>
        </section>
      </div>
    </main>
  );
}
