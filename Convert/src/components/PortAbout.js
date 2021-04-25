import React from 'react';
import {Icon} from './Icon';

 
export default function PortAbout(){
    return(
        <div class="port-about" id="port-about">
            <div class="about-container">
             <Icon/>
                <div class="about-card">
                    <h2>About me</h2>
                    <p>I’m graduated from FPT University, I love Frontend Designed. I wanna become a Front-end Team leader.
                        Further more, to be a
                        Project Manager.</p>
                    <div class="about-tags">
                        <span class="a-tag">Html</span>
                        <span class="a-tag">Css</span>
                        <span class="a-tag">Javascript</span>
                        <span class="a-tag">C#</span>
                        <span class="a-tag">Java</span>
                        <span class="a-tag">Figma</span>
                    </div>
                    <a><span>Download CV PDF</span></a>
                </div>
            </div>
        </div>
    )
}