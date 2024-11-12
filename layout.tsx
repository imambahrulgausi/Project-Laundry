import Link from "next/link";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">


      <div className="flex">
        <div className="flex-grow">
          {children}
        </div>

        <nav className="w-24 bg-green-800 h-full">
          <ul className="text-white p-5">
            <Link href="/Components/profile">
            <li className="mb-2 cursor-pointer hover:text-black">Profile</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}
