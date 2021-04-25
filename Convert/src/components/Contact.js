import React from 'react';

export default function Contact(){
    return(
        <div class="port-contact" id="port-contact">
        <div class="contact-container">
            <div class="contact-tags">
                <div class="contact-tag">
                    <div class="contact-ic circle">
                       <div class="address-img"></div>
                    </div>
                    <strong>Address</strong>
                    <p>Danang, Vietnam</p>
                </div>
                <div class="contact-tag">
                    <div class="contact-ic circle">
                        < div class="email-img"></div>
                    </div>
                    <strong>Email</strong>
                    <p>Vnsking7899@gmail.com</p>
                </div>
                <div class="contact-tag">
                    <div class="contact-ic circle">
                    <div class="phone-img"></div>
                    </div>
                    <strong>Phone</strong>
                    <p>0901181100</p>
                </div>
            </div>
            <div class="contact-f-lt">
                <form class="contact-form" id="contact-form">
                    <div class="nm-name">
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/>
                    </div>
                    <input type="text" placeholder="Your email" class="email-ip"/>
                    <textarea rows="4" cols="50" name="comment" form="contact-form" class="message-ip"
                        placeholder="Your Message"></textarea>
                    <input type="submit" value="Send"/>
                </form>
                <div class="map-cc">

                </div>
            </div>
        </div>
    </div>)
}