import { MdDarkMode } from "react-icons/md";

const Navbar = ({ onToggleTheme }) => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <h1>
            Wt's the <span> Weather</span>
          </h1>
        </div>

        <button onClick={onToggleTheme} className="btn">
          <MdDarkMode />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
