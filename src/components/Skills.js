import tech1 from "../assets/img/tech1.png";
import tech2 from "../assets/img/tech2.png";
import tech3 from "../assets/img/tech3.png";
import tech4 from "../assets/img/tech4.png";
import tech5 from "../assets/img/tech5.png";
import tech6 from "../assets/img/tech6.png";
import tech7 from "../assets/img/tech7.png";
import tech8 from "../assets/img/tech8.png";
import tech9 from "../assets/img/tech9.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>
Skilled in web development and app development, with a strong grasp of data analysis and visualization techniques.<br></br>Effective collaborator with a track record of contributing to impactful projects in the field of computer science and data analytics.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={tech1} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={tech2} alt="Image" />
                                <h5>C/C++</h5>
                            </div>
                          
                            <div className="item">
                                <img src={tech3} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={tech4} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={tech5} alt="Image" />
                                <h5>MERN</h5>
                            </div>
                            <div className="item">
                                <img src={tech6} alt="Image" />
                                <h5>Tensorflow</h5>
                            </div>
                            <div className="item">
                                <img src={tech7} alt="Image" />
                                <h5>NextJs</h5>
                            </div>
                            <div className="item">
                                <img src={tech8} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={tech9} alt="Image" />
                                <h5>Tailwind</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}