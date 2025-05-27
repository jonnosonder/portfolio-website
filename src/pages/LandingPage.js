import './LandingPage.css';
import Header from '../components/Header';

const LandingPage = () => {
    return (
        <div className='landingPageDiv'>
        <Header />
        <section id="hero">
            <div style={{justifyContent:"center", margin: "30px"}}>
                <p className='name_hi'>Hi, my name is</p>
                <h1>Jonathan Kwok</h1>
                <p className="toCenterWhenSmall">Computer Science with Artificial Intelligence (BSc)</p>
                <p className="toCenterWhenSmall">Undergraduate Student @ Loughborough University</p>
            </div>
            <div className='heroSocials column'>
                <div id="toColapse">
                    <div className="box" onClick={() => window.open("https://github.com/jonnosonder", "_blank")}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="github">
                            <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                        </svg>
                    </div>

                    <div className="box" onClick={() => window.open("https://www.linkedin.com/in/jonathan-kwok-6a9b98363/", "_blank")}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="linkedin">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </div>
                </div>

                <div id="toColapse">
                    <div className="box" onClick={() => window.location.href = `mailto:jonnosonder@gmail.com`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                        </svg>
                    </div>

                    <div className="box" onClick={() => window.open("https://github.com/jonnosonder/portfolio-website", "_blank")}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="code">
                            <path d="M16 3.383l-.924-.383-7.297 17.617.924.383 7.297-17.617zm.287 3.617l6.153 4.825-6.173 5.175.678.737 7.055-5.912-7.048-5.578-.665.753zm-8.478 0l-6.249 4.825 6.003 5.175-.679.737-6.884-5.912 7.144-5.578.665.753z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>

        <section id="experience">

        </section>

        <section id="certificates">

        </section>

        <section id="3dmodeling">

        </section>

        <section id="skills">

        </section>
        </div>
  );
};

export default LandingPage;