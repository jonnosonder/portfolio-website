import "./SettingsPanel.css"
import { useContext, useState } from 'react';
import { GlobalContext } from '../GlobalContext';

const SettingsPanel = () => {
    const { 
        isSettingsActive,
        toggleBackgroundActive,
        ballCountValue, ballRadiusValue, ballSpeedValue,
        setBallCountValue, setBallRadiusValue, setBallSpeedValue
    } = useContext(GlobalContext);

    const [openIndex, setOpenIndex] = useState(-1);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const ballCountValueChange = (e) => {
        setBallCountValue(e.target.value);
    };

    const ballRadiusValueChange = (e) => {
        setBallRadiusValue(e.target.value);
    };

    const ballSpeedValueChange = (e) => {
        setBallSpeedValue(e.target.value);
    };

    const setDefualtBallValues = () => {
        setBallCountValue(40);
        setBallRadiusValue(2);
        setBallSpeedValue(1.5);
    }

    return (
        <>
        <div className={`asignSpace ${isSettingsActive ? "activeSpace" : "notActiveSpace"}`}></div>
        <div className={`panel ${isSettingsActive ? "active" : "notActive"}`}>
            <div className="contents">
                <h3 className="settingPanelh3">Settings</h3>
                <p id="settingsDiscribtion">Have some fun fine tunning the page!</p>
                
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
                        <p className="SettingPanelP">Toggle Background</p>
                        <label className="switch">
                            <input type="checkbox" onChange={() => {toggleBackgroundActive();}}></input>
                            <span className="slider"></span>
                        </label>

                        <p className="SettingPanelP">Ball Count</p>
                        <input className="sliderSettingsInput" type="range" min="1" max="500" value={ballCountValue} onChange={ballCountValueChange}></input>

                        <p className="SettingPanelP">Ball Radius</p>
                        <input className="sliderSettingsInput" type="range" min="1" max="20" value={ballRadiusValue} onChange={ballRadiusValueChange}></input>

                        <p className="SettingPanelP">Ball Speed</p>
                        <input className="sliderSettingsInput" type="range" min="1" max="10" value={ballSpeedValue} onChange={ballSpeedValueChange}></input>
                    
                        <button 
                            className="settingsRestartButton"
                            onClick={setDefualtBallValues}    
                        >
                        Restart
                        </button>
                    </div>
                </div>
                
                <div className="dropdown">
                    <button className="dropdown-title" onClick={() => toggle(0)}>
                        Fonts
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
                        <p className="SettingPanelP">Header</p>
                        <p className="SettingPanelP">Text</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default SettingsPanel;