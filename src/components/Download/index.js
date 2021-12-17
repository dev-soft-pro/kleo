import AppleImage from 'assets/images/apple.png'
import DemoImage from 'assets/images/demo-foot.png'
import './styles.scss'

export default function Manage() {
  return (
    <div className="manage-wrapper" id="download">
      <div className="manage-content">
        <div className="title">
          Manage your projects from your mobile
        </div>
        <div className="content">
          Download the app to get friend that guides you through a world where you can learn without limits and practice without judgement.
        </div>
        <div className="apple-get">
          <div className="title">Get the App</div>
          <img src={AppleImage} alt="apple-link" />
        </div>
      </div>
      <div className="manage-image">
        <img src={DemoImage} alt='Demo' />
      </div>
    </div>
  )
}