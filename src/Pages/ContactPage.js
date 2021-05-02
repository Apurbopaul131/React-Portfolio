import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.700327595181!2d-0.13858868403737226!3d50.836714467337785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585104ec1fe1b%3A0x28b5349b15ce0c4d!2sLondon%20Road%20(Brighton)%20Train%20Station%20-%20Southern%20Railway!5e0!3m2!1sen!2suk!4v1611468671158!5m2!1sen!2suk" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect" style={{}}>
                    <ContactItem icon={phone} text1={'+8801786661735'} text2={'+08801629217129'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'apurbopaul131@gmail.com'}  title={'Email'}/>
                    <ContactItem icon={location} text1={'416/2 iqbal road,dhaka'} text2={'Bangladesh'} title={'Address'}/>
                </div>
               <div style={{marginTop:"50px"}}>
               <form action="mailto:apurbopaul131@gmail.com" method="post" enctype="multipart/form" name="Email test form">
                       <p>Name:</p>
                       <input type="text" size="24" name="VisitorName"/>
                       <br/>
                       <p>Message:</p>
                      
                       <textarea name="VisitorComment" cols="20" rows="4"></textarea>
                       <br/>
                       <input type="submit" value="Submit" style={{padding:"5px",backgroundColor:"green",borderRadius:"5px"}}/>
                   </form>
               </div>
            </div>
        </div>
    )
}

export default ContactPage;
