import "./SettingsPanel.css"
import { useContext, useState } from 'react';
import { GlobalContext } from '../GlobalContext';

const SettingsPanel = () => {
    const { isSettingsActive } = useContext(GlobalContext);


    const [openIndex, setOpenIndex] = useState(-1);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
        <div className={`asignSpace ${isSettingsActive ? "activeSpace" : "notActiveSpace"}`}></div>
        <div className={`panel ${isSettingsActive ? "active" : "notActive"}`}>
            <div className="contents">
                <h3>Settings</h3>
                <p id="settingsDiscribtion">Have some fun fine tunning the page!</p>
                <div className="dropdown">
                    <button className="dropdown-title" onClick={() => toggle(0)}>
                        Appearence
                        {openIndex === 0 ? (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M6 15L12 9L18 15" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        ) : (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        )}
                    </button>
                    <div className={`dropdown-content ${openIndex === 0 ? 'open' : ''}`}>
                        <p>Color Scheme:</p>
                        <p>Text Size:</p>
                        <p>Text Font:</p>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropdown-title" onClick={() => toggle(1)}>
                        Background
                        {openIndex === 1 ? (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M6 15L12 9L18 15" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        ) : (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        )}
                    </button>
                    <div className={`dropdown-content ${openIndex === 1 ? 'open' : ''}`}>
                        <p>Ball Count:</p>
                        <p>Ball Radius:</p>
                        <p>Ball Speed:</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default SettingsPanel;