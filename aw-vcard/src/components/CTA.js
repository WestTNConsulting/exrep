import Logo from '../images/Logo.png'


function CTA(){
    return(
        <div className="cta">
            <a href="mailto:amanda.whitehorn@westtn.consulting" className="cta-btn cta-btn-email">
                <span className="cta-btn-icon">
                    <svg width="20" height="20" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.10241 4.70721L8.50001 7.90561L14.8976 4.70721C14.8739 4.29957 14.6953 3.9164 14.3983 3.63619C14.1012 3.35598 13.7083 3.19994 13.3 3.20001H3.70001C3.29167 3.19994 2.89876 3.35598 2.60175 3.63619C2.30473 3.9164 2.12609 4.29957 2.10241 4.70721Z" fill="#b9212a"/>
                    <path d="M14.9 6.49441L8.50001 9.69441L2.10001 6.49441V11.2C2.10001 11.6244 2.26858 12.0313 2.56864 12.3314C2.86869 12.6314 3.27566 12.8 3.70001 12.8H13.3C13.7244 12.8 14.1313 12.6314 14.4314 12.3314C14.7314 12.0313 14.9 11.6244 14.9 11.2V6.49441Z" fill="#b9212a"/>
                    </svg>
                </span>
                <span className="cta-btn-text">Email</span>
            </a>
            <a href="https://www.linkedin.com/in/amanda-whitehorn-b333b544/" className="cta-btn cta-btn-web">
            <span className="cta-btn-logo">
                    <img src={Logo} width="65" height="65" viewBox="0 0 25 25" fill="none"/>
                </span>
            </a>
            <a href="tel:(901)471-0451 " className="cta-btn cta-btn-email">
            <span className="cta-btn-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" stroke="#fff" stroke-width="2" stroke-linejoin="round" fill="#b9212a" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 216.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </svg>
    </span>
                <span className="cta-btn-text">Work Phone</span>
            </a>
        </div>    
    );
}
export default CTA;