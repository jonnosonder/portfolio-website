import "./Header.css"
import Burger from '../components/Burger';
import Settings from '../components/Settings';

const Header = () => {
  return (
    <div className="headerDiv">
      <Burger />
      <Settings />
    </div>
  );
};

export default Header;