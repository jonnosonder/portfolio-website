import "./SettingsPanel.css"
import { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';

const SettingsPanel = () => {
    const { isSettingsActive } = useContext(GlobalContext);

    return (
        <div className={`panel ${isSettingsActive ? "active" : "notActive"}`}>
            <div className="contents">
                <h3><u>Settings</u></h3>
            </div>
        </div>
    );
}

export default SettingsPanel;