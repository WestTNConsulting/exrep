import Logo from '../images/Logo.png'


function CTA(){
    return(
        <div className="cta">
            <a href="mailto:amanda.whitehorn@westtn.consulting" className="cta-btn cta-btn-email">
                <span className="cta-btn-icon">
                    <svg width="40" height="40" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.10241 4.70721L8.50001 7.90561L14.8976 4.70721C14.8739 4.29957 14.6953 3.9164 14.3983 3.63619C14.1012 3.35598 13.7083 3.19994 13.3 3.20001H3.70001C3.29167 3.19994 2.89876 3.35598 2.60175 3.63619C2.30473 3.9164 2.12609 4.29957 2.10241 4.70721Z" fill="#b9212a"/>
                    <path d="M14.9 6.49441L8.50001 9.69441L2.10001 6.49441V11.2C2.10001 11.6244 2.26858 12.0313 2.56864 12.3314C2.86869 12.6314 3.27566 12.8 3.70001 12.8H13.3C13.7244 12.8 14.1313 12.6314 14.4314 12.3314C14.7314 12.0313 14.9 11.6244 14.9 11.2V6.49441Z" fill="#b9212a"/>
                    </svg>
                </span>
            </a>
            <a href="https://westtn.consulting/" className="cta-btn cta-btn-web">
            <span className="cta-btn-logo">
                    <img src={Logo} width="65" height="65" viewBox="0 0 25 25" fill="none"/>
                </span>
            </a>
            <a href="tel:(901)471-0451 " className="cta-btn cta-btn-email">
            <span className="cta-btn-icon">
        <svg width="2em" height="2em" viewBox="0 0 512 512" stroke="#fff" stroke-width="4" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"fill="#b9212a"/>  

        </svg>
    </span>
            </a>
        </div>    
    );
}
export default CTA;