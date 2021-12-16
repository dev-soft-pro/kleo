import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import './styles.scss'
import { useEffect, useState, useLayoutEffect, useMemo, useContext } from "react";
import LessonMark from 'assets/images/lesson-mark.png';
export default function Lessons() {
  const lessons = [
    { title: 'Expressing your wants' },
    { title: 'Talking about yourself' },
    { title: 'Asking questions' },
    { title: 'What you have' },
    { title: 'The gender of words' },
    { title: 'Using the "is" equivalent' },
    { title: 'Negating' },
    { title: 'Calibrating formality' },
    { title: 'What can be done' },
    { title: 'Finding your way' },
    { title: 'To be or to be' },
    { title: 'What has to be done' },
    { title: 'Speaking about the present (AR verbs, Part 1)' },
    { title: 'Speaking about the present (AR verbs, Part 2)' },
    { title: 'Building the plural' },
    { title: 'Describing your world' },
    { title: 'What there is' },
    { title: 'Speaking about the present (ER verbs)' },
    { title: 'Speaking about the present (IR verbs)' },
    { title: 'Speaking more efficiently' },
    { title: 'Asking about cost' },
    { title: 'Going places' },
    { title: 'Doing & making things' },
    { title: 'Giving commands' },
    { title: 'The recipient of an action' },
    { title: 'Expressing possession' },
    { title: "What's happening right now" },
    { title: 'Speaking about the past (AR verbs)' },
    { title: 'Speaking about the past (ER/IR verbs)' },
    { title: 'Being in the past' },
    { title: 'Speaking about the future' }
  ]
  
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      console.log(window.innerWidth)
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const visibleLessons = useMemo(() => {
    const width = size[0]
    console.log(width)
    let res = 3;
    if (width < 768) 
      res = 1;
    else if (width < 992)
      res = 2;
    console.log(res)
    return res;
  }, [size]);

  return (
    <div className="lessons-wrapper">
      <div className="dash-title">
        <div className="dash" />
        <div className="title">Our Lessons</div>
        <div className="dash" />
      </div>
      <CarouselProvider
        naturalSlideWidth={330}
        naturalSlideHeight={440}
        totalSlides={lessons.length}
        visibleSlides={visibleLessons}
        currentSlide={0}
        className="lesson-carousel"
      >
        <Slider>
          {lessons.map((lesson, index) => 
            <Slide index={index} key={index}>
              <div className="lesson-image">
                <img className="img" src={require(`assets/images/lessons/${index + 1}.jpg`)} alt="lessons" />
                <img className="mark" src={LessonMark} alt="mark" />
              </div>
              <div className="lesson-no">{index + 1}</div>
              <div className="lesson-name">
                <div className="title">{lesson.title}</div>
                <div className="learn">Learn the skill</div>
              </div>
            </Slide>
          )}
        </Slider>
        <div className="first-mask" />
        <div className="last-mask" />
        <ButtonBack className="slider-back-white"></ButtonBack>
        <ButtonNext className="slider-next-white"></ButtonNext>
      </CarouselProvider>
    </div>
  )
}