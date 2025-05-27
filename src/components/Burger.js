import "./Burger.css"
import { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';


const Burger = () => {
  const { isBurgerActive, toggleBurgerExpanded } = useContext(GlobalContext);

  return (
    <>
      <div className={`circle ${isBurgerActive ? "expanded" : ""}`}></div>

      <div className="content">{isBurgerActive && (
        <div className="burgerItems">
          <p id="burgerName">Jonathan Kwok</p>
          <span id="rectangle"></span>
          <button 
            className="burgerBtn"
            onClick={toggleBurgerExpanded}
          >Overview</button>
          <button className="burgerBtn">Experience</button>
          <button className="burgerBtn">Cerfificates</button>
          <button className="burgerBtn">Skills</button>
        </div>
      )}</div>

      <div style={{height:'3em'}}>
        <label className="hamburger" htmlFor="hamburger" id='hamburgerButton'>
            <input
              type="checkbox"
              id="hamburger"
              checked={isBurgerActive}
              onChange={toggleBurgerExpanded}
            />
            <svg viewBox="0 0 32 32">
            <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
            </svg>
        </label>
      </div>

      <style>{`
        .content {
          display: flex;
          justify-content: center;
          text-align: center;
          flex-direction: column;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: opacity 0.6s cubic-bezier(0.8, 0, 0.3, 1) 0.1s;
          z-index: 20;
          align-items: center;
            opacity: ${isBurgerActive ? 1 : 0};
            pointer-events: ${isBurgerActive ? "auto" : "none"};
        }
      `}</style>
    </>
  );
};

export default Burger;