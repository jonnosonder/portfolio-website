import './Card.css';
import { useState } from 'react';

const Card = ({cardInformation}) => {
    const [isEnlarged, setIsEnlarged] = useState(false);

    const descriptionLines = cardInformation.description.split("\n");

    const handleEnlarge = () => {
        setIsEnlarged(true);
    };

    const handleClose = () => {
        setIsEnlarged(false);
    };

    return (
        <>
            <div className='infoCard' onClick={handleEnlarge}>
                <p className='card_title'>{cardInformation.title}</p>
                <span className='card_rectangle'></span>
                <p className='card_company'>{cardInformation.company}</p>
                <p className='card_time'>{cardInformation.employement}</p>
                <p className='card_time'><i>{cardInformation.start_date} — {cardInformation.end_date}</i></p>
                <img className='card_image' alt='' src={cardInformation.image_path}></img>
                <svg className='card_enlarge_button' onClick={handleEnlarge} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 13h-4v-9h-9v-4h13v13zm-24 11h13v-4h-9v-9h-4v13z"/></svg>
            </div>
            {isEnlarged && (
            <div className="enlarged-card-overlay" onClick={handleClose}>
                <div className="enlarged-card" onClick={(e) => e.stopPropagation()}>
                    <p className='card_title'>{cardInformation.title}</p>
                    <span className='card_rectangle'></span>
                    <p className='card_company'>{cardInformation.company}</p>
                    <p className='card_time'>{cardInformation.employement}</p>
                    <p className='card_time'><i>{cardInformation.start_date} — {cardInformation.end_date}</i></p>
                    <div className='card_description_div'>
                        {descriptionLines.map((line, index) => (
                            <p className='card_description' key={index}>{line}</p>
                        ))}
                    </div>
                    <img className='card_image' alt='' src={cardInformation.image_path}></img>
                    <svg className='card_close_button' onClick={handleClose} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/></svg>
                </div>
            </div>
            )}
        </>
    );
}

export default Card;