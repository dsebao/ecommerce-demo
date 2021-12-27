import {useState} from 'react';

const Navbar = ({cart, totalItems}) => {
  const [openPanel, setOpenPanel] = useState(false);
  const openCartPanel = () => {
    setOpenPanel(!openPanel);
  }

  const classPanel = openPanel ? 'block' : 'hidden';

  return (
    <header className="text-gray-600 body-font shadow-sm">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-gray-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">MusikStore</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="" className="mr-5 hover:text-gray-900">Link</a>
          <a href="" className="mr-5 hover:text-gray-900">Link</a>
          <a href="" className="mr-5 hover:text-gray-900">Link</a>
        </nav>
        <div className="relative">
          <button onClick={openCartPanel} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          My Cart
          <span className="rounded-xl bg-purple-700 text-white ml-1 text-sm h-5 w-5 inline-block">{ totalItems }</span></button>
          <div className={`absolute ${classPanel} right-0 mt-2 p-4 w-72 bg-white rounded-md shadow-xl z-20`}>
            <h3 className='text-lg text-bold'>Your cart</h3>
            <p>Total: </p>
            <button className="mt-2 bg-yellow-400 text-gray-900 hover:bg-yellow-400 py-2 px-5 rounded-md p-3">Checkout</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
