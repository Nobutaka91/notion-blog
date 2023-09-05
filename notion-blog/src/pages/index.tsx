import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <h1 className="text-gray-500 font-md bg-red-500">hello json</h1>
    </div>
  );
}
