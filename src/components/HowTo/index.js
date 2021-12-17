import './styles.scss'

import Img1 from 'assets/images/howto-1.png'
import Img2 from 'assets/images/howto-2.png'
import Img3 from 'assets/images/howto-3.png'
import CheckedMark from 'assets/images/table-check-1.png'
import UnCheckedMark from 'assets/images/table-check-2.png'

export default function HowTo() {
  const cardData = [
    {
      title: 'A friend to practice with anytime, anywhere',
      content: 'The magic of learning from a person meets the convenience of an app. There for you always',
      image: Img1,
    },
    {
      title: 'Digital conversations for real world connections',
      content: 'Advanced AI designed to immerse you in the language, so you have the confidence to go out and speak in the real-world',
      image: Img2,
    },
    {
      title: 'Entire learning experience evolving with you',
      content: 'Giving you real-time feedback and dynamically creating lessons - just for you, every time',
      image: Img3,
    }
  ]

  const featureData = [
    {
      title: 'Conversational learning',
      values: [true, false, true]
    },
    {
      title: 'Personalized feedback',
      values: [true, false, true]
    },
    {
      title: 'Anytime, anywhere practice',
      values: [true, true, false]
    },
    {
      title: 'Optimized learning using digital intelligence',
      values: [true, true, false]
    },
    {
      title: 'Less than a typical food delivery order',
      values: [true, true, false]
    }
  ]

  return (
    <div className="howto-wrapper" id="howto">
      <div className="dash-title">
        <div className="dash" />
        <div className="title">How It Works</div>
        <div className="dash" />
      </div>
      <div className="card-wrapper">
        {cardData.map((cd, idx) =>
          <div className='card' key={`hiw-card-${idx}`}>
            <img src={cd.image} alt={cd.title} />
            <div className="title">{cd.title}</div>
            <div className="desc">{cd.content}</div>
          </div>
        )}
      </div>
      <table className="feature-table">
        <thead>
          <tr>
            <th>FEATURE</th>
            <th width='18%'>KLEO</th>
            <th width='18%'>OTHER APPS</th>
            <th width='18%'>IN-PERSON</th>
          </tr>
        </thead>
        <tbody>
          {featureData.map((fd, idx) => 
            <tr key={`table-row-${idx}`}>
              <td>{fd.title}</td>
              <td><img src={fd.values[0] ? CheckedMark : UnCheckedMark} alt="checked" /></td>
              <td><img src={fd.values[1] ? CheckedMark : UnCheckedMark} alt="checked"/></td>
              <td><img src={fd.values[2] ? CheckedMark : UnCheckedMark} alt="checked"/></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}