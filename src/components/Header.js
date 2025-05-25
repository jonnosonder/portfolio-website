import Burger from '../components/Burger';

const Header = ({ isBurgerActive, setIsBurgerActive }) => {
  return (
    <div>
      <Burger 
        expanded={isBurgerActive}
        setExpanded={setIsBurgerActive}
      />
    </div>
  );
};

export default Header;