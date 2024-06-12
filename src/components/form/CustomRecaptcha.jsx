import ReCAPTCHA from 'react-google-recaptcha';

const  CustomRecaptcha=(sitekey)=>{

    return(<>
       <ReCAPTCHA sitekey={sitekey} />
    </>)
}

export default CustomRecaptcha;