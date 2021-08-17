import React from 'react'
import '../App.css'
import './Contact.css'

function Contact() {
    return (
        <div className="contact">
            <div className="contactcontainer">
                <h1>Contact Us for Order</h1>
                <h3>At this moment, you can place your order by contacting us or message us via <a className="facebook" href="https://www.facebook.com/milly.simandjuntak/">Facebook</a> or <a className="facebook" href="https://www.facebook.com/milly.simandjuntak/">Messanger</a>, <a className="instagram" href="https://instagram.com/milly_simandjuntak">Instagram</a>, and Whatsapp +62-811-8300-746.
                <br></br><span className="hint">*Hint: Facebook, Messanger, and Instagram text can be pressed.</span></h3>
                <img src="images/cakelogowh.png" alt="logo" />
                <div className="line"></div>
                <p>© Copyright 2021 Matthew Gabriel Hasiholan. All rights reserved</p>
            </div>
        </div>
    )
}

export default Contact
