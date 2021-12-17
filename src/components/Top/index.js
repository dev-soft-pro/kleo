import AppleImage from 'assets/images/apple.png'
import Demo from 'assets/images/demo.png'
import './styles.scss'
export default function Top() {
  return (
    <div className="graphic-top" id="home">
      <div className="top-content">
        <div className="top-text">
          <div className="title">What if a tutor and an app had a baby?</div>
          <div className="content">
            Kleo captures the magic of learning from a person - in your phone. 
            A friend that guides you through a world where you can learn without limits and practice without judgement. 
            Talk with Kleo anywhere, be understood everywhere</div>
        </div>
        <div className="apple-get">
          <div className="title">Get the App</div>
          <img src={AppleImage} alt="apple-link" />
        </div>
        <div className="signup-form">
          <div className="title">
            Sign up to get announcements: like new language or the Android release
          </div>
          <div className="input">
            <input type="text" />
            <button type="button">Meet Kleo</button>
          </div>
        </div>
      </div>
      <img className="image-demo" src={Demo} alt="Demo" />
    </div>
  )
}