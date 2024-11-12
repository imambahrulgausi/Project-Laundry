import Image from "next/image";
import Layanan1 from "../../img/cucikering.jpg";
import Layanan2 from "../../img/cucissetrika.jpg";
import Layanan3 from "../../img/setrikaja.jpg";
import Layanan4 from "../../img/cuciexpress.jpg";

export default function Produk() {
  const products = [
    { id: 1, name: 'Cuci Kering / Kg', image: Layanan1, price: 'Rp 4.000', estimatedTime: '3 Jam' },
    { id: 2, name: 'Cuci Setrika / Kg', image: Layanan2, price: 'Rp 5.000', estimatedTime: '5 Jam' },
    { id: 3, name: 'Setrika Aja / Kg', image: Layanan3, price: 'Rp 6.000', estimatedTime: '2 Jam' },
    { id: 4, name: 'Cuci Express / Kg', image: Layanan4, price: 'Rp 8.000', estimatedTime: '7 Jam' },
  ];

  return (
    <main className="w-full flex flex-col items-center justify-center bg-[#8da8ac] p-8 min-h-screen">
      <h2 className="text-2xl font-bold text-[#FFFF] mb-8">Paket Laundry</h2>
      <div className="flex justify-center gap-12 flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="bg-[#FFFF] rounded-lg shadow-md p-4 w-60">
            <div className="rounded-lg overflow-hidden h-52">
              <Image
                src={product.image}
                alt={`Foto Produk ${product.id}`}
                layout="responsive"
                width={300}
                height={250}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="mt-4 bg-[#afc5c3] p-2 rounded-t-lg">
              <p className="text-center font-bold text-gray-800">{product.name}</p>
            </div>
            <div className="bg-[#afc5c3] p-2 rounded-b-lg">
              <p className="text-center font-semibold text-gray-700">{product.price}</p>
              <p className="text-center text-sm text-gray-600">Estimasi Pengerjaan: {product.estimatedTime}</p>
            </div>
            <div className="mt-4">
              <button className="w-full py-2 bg-[#4caf50] text-white rounded-lg font-semibold hover:bg-[#45a049]">
                Pesan Sekarang
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
