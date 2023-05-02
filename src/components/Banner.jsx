

import { useState, useEffect } from "react";

import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/makhan3.png"
export const Banner = ()=>{

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Basketteur", "Photographe" ];
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [text, setText] = useState('');
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)

        return () => {clearInterval(ticker)}
    },[text,delta,tick])
    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
          }
      
          if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
          } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
          }

    }
return(
<section className="banner bg-danger" id="home">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 col-lg-7">
                <span className="tagLine Tagline"> Welcome to my Portfolio</span>
                <h1>{`Hi I'm Makhan `}<span className="text-wrap">{text}</span></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button onClick={()=> console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button>
            </div>
            <div className="col-md-6 col-lg-5">
                <img src={headerImg} alt="Headder Img" />
            </div>
        </div>
    </div>
</section>
)
}