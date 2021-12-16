import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Quotemark from 'assets/images/quote_mark.svg'
import './styles.scss'

const testimonialsData = [
  {
    name: "Peter",
    employee: "co-author of National German Exam and teacher with 30 years’ experience",
    profile_image: 'https://kleo-website-assets.s3.us-east-2.amazonaws.com/peter.jpg',
    feedback: "It’s as close as you can get to having a teacher in the classroom giving you feedback.",
  },
  {
    name: "Jessie",
    employee: "mom and entrepreneur",
    profile_image: 'https://kleo-website-assets.s3.us-east-2.amazonaws.com/jessie.jpg',
    feedback: "Love, love, love the interactive element of immediate feedback and practicing like you're with a live coach . . . or a live friend.",
  },
  {
    name: "Anonymous",
    employee: "tester in the UK",
    profile_image: 'https://kleo-website-assets.s3.us-east-2.amazonaws.com/shelly.jpg',
    feedback: "That was sick...The interactive experience, particularly the videos made it easier to learn. Felt like you're talking with a person rather than just using an app.",
  },
  {
    name: "Shelly",
    employee: "long-time Duolingo user",
    profile_image: 'https://kleo-website-assets.s3.us-east-2.amazonaws.com/shelly.jpg',
    feedback: "I’ve been doing Duolingo for 4 years and I’ve liked it a lot, so, honestly, I was skeptical of another language App. However, I prefer Kleo's format - I like interacting with real people, and it seems to get to the heart of what’s important to know.",
  },
  {
    name: "Nimrod",
    employee: "newly interested in learning Spanish",
    profile_image: 'https://kleo-website-assets.s3.us-east-2.amazonaws.com/shelly.jpg',
    feedback: "Last week I went to the farmers market and there was a lady selling tamales. The app kicked in and I told her quiero tamales por favor. Man, she got so happy she spoke Spanish to me as if I knew what she was saying.",
  },
  {
    name: "Kali",
    employee: "regular language app user",
    profile_image: 'https://kleo-website-assets.s3.us-east-2.amazonaws.com/kali.jpg',
    feedback: "I like the interaction much more than Babbel and Rosetta Stone. Very engaging. Love love!!",
  }
]

export default function Testimonials() {
  return (
    <div className="testimonials-wrapper">
      <div className="dash-title">
        <div className="dash" />
        <div className="title">Testimonials</div>
        <div className="dash" />
      </div>
      <CarouselProvider
        naturalSlideWidth={630}
        naturalSlideHeight={270}
        totalSlides={testimonialsData.length}
        visibleSlides={1}
        currentSlide={0}
        className="td-carousel"
      >
        <Slider onFocus={(e) => console.log(e)}>
          {testimonialsData.map((td, index) => 
            <Slide index={index} key={index}>
              <div className="quote">
                <img src={Quotemark} alt="Quote" />
              </div>
              <div className="info">
                <div className="feedback">
                  {td.feedback}
                </div>
                <div className="profile">
                  <img src={td.profile_image} alt={td.name} />
                  <div className="profile_text">
                    <div className="name">{td.name}</div>
                    <div className="employee">{td.employee}</div>
                  </div>
                </div>
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