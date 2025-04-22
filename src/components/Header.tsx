import { FaMosque } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-emerald-800 text-white py-4 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <FaMosque className="size-8 mr-3 text-amber-300" />
        <h1 className="text-3xl font-bold" style={{ fontFamily: 'Amiri, serif' }}>
          Prayer Times
        </h1>
      </div>
    </header>
  );
};

export default Header;