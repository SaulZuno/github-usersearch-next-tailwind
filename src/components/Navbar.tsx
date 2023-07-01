import SunIcon from "./icons/SunIcon"

const Navbar = () => {
  return (
    <header className="flex mb-8 items-center space-x-2 pt-8">
      <h1 className="text-white text-3xl font-bold flex-grow">devfinder</h1>
        <span className='text-white uppercase'>Light</span>
        <button>
          <SunIcon 
          className="fill-white"
          width={25}

          />
        </button>
    </header>
  )
}

export default Navbar