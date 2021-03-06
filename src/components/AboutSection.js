import React from "react";
import home1 from '../img/home1.png'
import styled from 'styled-components'

const AboutSection = () => {
    return(
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>we work to make</h2>
                    </Hide>
                     <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                     <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veniam dolorum nostrum voluptates distinctio inventore laborum vel nemo dolor possimus! Vel nemo nostrum, porro optio adipisci facilis dolorum molestiae necessitatibus!</p>
                <button>contact us</button>
            </Description>
            <Image>
                <img src={home1} alt="the guy with camera" />
            </Image>
        </About>

    )
}
//styled components

const About = styled.div`
min-height:90vh;
display:flex;
align-items:center;
justify-content:space-between;
padding:5rem 10rem;
color:#fff
`

const Description = styled.div`
flex:1;
padding-right:5rem;
h2{
    font-size:lighter
}
`
const Image = styled.div`
    flex:1;
    overfloe:hidden;
    img{
        width:100%;
        height:80vh;
        object-fit:cover
        
    }
`

const Hide = styled.div`
overflow:hidden
`
export default AboutSection