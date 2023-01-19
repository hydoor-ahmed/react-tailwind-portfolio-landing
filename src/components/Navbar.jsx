const Navbar = ({ dark, setDark }) => {
  return (
    <nav>
      <div className="container py-4 flex justify-between items-center text-lg">
        <div>
          <h1>HAIDAR AHMED</h1>
        </div>

        <div className="flex items-center">
          <button className="mr-2 text-2xl" onClick={() => setDark(!dark)}>
            <i className="bx bxs-moon"></i>
          </button>
          <a
            href="#"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-1.5 px-2.5 rounded"
          >
            RESUME
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
