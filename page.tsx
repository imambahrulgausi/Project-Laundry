import Image from "next/image";
import Foto from "../img/laundry1.jpg"; // Pastikan path ini benar

export default function TentangKami() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-100 p-4">
      <div className=" max-w-4xl text-center shadow-lg rounded-lg p-6">
        <Image
          src={Foto}
          layout="responsive"
          width={600}
          height={500}
          className="w-full h-auto object-cover mb-4 rounded-lg"
          alt="Foto anak-anak GPS" // Deskripsi untuk aksesibilitas
        />
        <h1 className="text-4xl font-bold mb-4">Tentang Kami</h1>
        <p className="text-left mt-4">
        <h1 className="text-2xl font-bold mb-4">Visi:</h1>
        Menjadi layanan laundry terbaik yang memberikan kemudahan, kenyamanan, dan kualitas terbaik bagi setiap pelanggan, serta berkontribusi pada kebersihan dan kenyamanan hidup masyarakat.
        </p>
        <p className="text-left mt-4">
        <h1 className="text-2xl font-bold mb-4">Misi:</h1>
        1. Menyediakan layanan laundry dengan kualitas terbaik, menggunakan peralatan modern dan bahan pembersih yang ramah lingkungan untuk memberikan hasil yang bersih dan segar.
        </p>
        <p className="text-left mt-4">
        2. Menyediakan layanan yang cepat, tepat waktu, dan dapat diandalkan, dengan menjaga komunikasi yang baik dan responsif terhadap setiap kebutuhan pelanggan.
        </p>
        <p className="text-left mt-4">
        3. Menciptakan suasana yang nyaman dan bersih di setiap tempat usaha, dengan menjaga kebersihan pakaian dan lingkungan sekitarnya.
        </p>
        <p className="text-left mt-4">
        4. Selalu berinovasi dalam menghadirkan layanan yang sesuai dengan perkembangan teknologi dan tren, serta siap beradaptasi dengan kebutuhan dan preferensi pelanggan.
        </p>
        <p className="text-left mt-4">
        5. Mengedepankan penggunaan bahan ramah lingkungan dan proses yang berkelanjutan, untuk mendukung pengelolaan sumber daya alam dengan bijaksana.
        </p>
      </div>
    </main>
  );
}
