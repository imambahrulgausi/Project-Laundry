import Link from 'next/link';
import Image from 'next/image'; // Pastikan untuk mengimpor Image
import Foto from './img/foto5.png'; // Mengimpor gambar dari folder img

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-py-2 px-5">
      <div className="flex items-center">
        <Image 
          src={Foto} 
          alt="Logo Navbar" 
          width={150} 
          height={150} 
          className="mr-2"
        />
      </div>

      <ul className="flex space-x-6 ml-5 mt-2">
        <Link href="/">
          <li className="text cursor-pointer hover:text-gray-300">Beranda</li>
        </Link>
        <Link href="/Components">
          <li className="text cursor-pointer hover:text-gray-300">About</li>
        </Link>
        <Link href="/Components/komponen">
          <li className="text cursor-pointer hover:text-gray-300">Laundry</li>
        </Link>
        <Link href="/Components/informasi">
          <li className="text cursor-pointer hover:text-gray-300">Informasi</li>
        </Link>

        {/* Button Admin */}
        <Link href="/admin">
          <li className="text-white cursor-pointer hover:bg-blue-600 border border-blue-500 bg-blue-500 px-4 py-2 rounded-lg transition-colors">
            Admin
          </li>
        </Link>
      </ul>
    </nav>
  );
}
