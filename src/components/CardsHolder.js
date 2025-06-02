import './CardsHolder.css';
import Card from './Card';
import AnimatedSection from '../animation/AnimatedSection';

const CardsHolder = ({ cardsData, dataType }) => {

    return (
        <div className='cardsBoxesDiv'>
            {cardsData.map((oneCardData, index) => (
                <AnimatedSection key={index} delay={index * 0.2 + 0.1}>
                    <Card cardInformation={oneCardData} cardType={dataType}/>
                </AnimatedSection>
            ))}
        </div>
    );
};

export default CardsHolder;