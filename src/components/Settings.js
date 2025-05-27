import "./Settings.css"
import { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';

const Settings = () => {
    const { isSettingsActive, toggleSettingsExpanded } = useContext(GlobalContext);
    
    return (
        <div style={{height:'3em'}}>
            <label className="setting" htmlFor="setting" id='SettingsButton'>
                <input
                    type="checkbox"
                    id="setting"
                    checked={isSettingsActive}
                    onChange={toggleSettingsExpanded}
                />
                <span className="bar bar1"></span>
                <span className="bar bar2"></span>
                <span className="bar bar3"></span>  
            </label>
        </div>
    )
}

export default Settings;