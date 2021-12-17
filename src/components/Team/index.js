import './styles.scss'

export default function Team() {
  const members = [
    {
      name: 'Michiyo Kawasaki',
      role: 'CEO',
      photo: 'https://kleo-website-assets.s3.us-east-2.amazonaws.com/jessie.jpg',
      description: 'Raised in a biracial and bilingual household, experienced the connection and also the separation that language can bring in ways big and small. Persistently faced the fear of feeling stupid when trying to speak Japanese in the real-world. Driven to create a powerful solution to help conquer the foreign language freeze and unleash the joy of connecting through language',
    },
    {
      name: 'Michiyo Kawasaki',
      role: 'CEO',
      photo: 'https://kleo-website-assets.s3.us-east-2.amazonaws.com/peter.jpg',
      description: 'Raised in a biracial and bilingual household, experienced the connection and also the separation that language can bring in ways big and small. Persistently faced the fear of feeling stupid when trying to speak Japanese in the real-world. Driven to create a powerful solution to help conquer the foreign language freeze and unleash the joy of connecting through language',
    },
    {
      name: 'Michiyo Kawasaki',
      role: 'CEO',
      photo: 'https://kleo-website-assets.s3.us-east-2.amazonaws.com/shelly.jpg',
      description: 'Raised in a biracial and bilingual household, experienced the connection and also the separation that language can bring in ways big and small. Persistently faced the fear of feeling stupid when trying to speak Japanese in the real-world. Driven to create a powerful solution to help conquer the foreign language freeze and unleash the joy of connecting through language',
    },
    {
      name: 'Michiyo Kawasaki',
      role: 'CEO',
      photo: 'https://kleo-website-assets.s3.us-east-2.amazonaws.com/jessie.jpg',
      description: 'Raised in a biracial and bilingual household, experienced the connection and also the separation that language can bring in ways big and small. Persistently faced the fear of feeling stupid when trying to speak Japanese in the real-world. Driven to create a powerful solution to help conquer the foreign language freeze and unleash the joy of connecting through language',
    },
    {
      name: 'Michiyo Kawasaki',
      role: 'CEO',
      photo: 'https://kleo-website-assets.s3.us-east-2.amazonaws.com/kali.jpg',
      description: 'Raised in a biracial and bilingual household, experienced the connection and also the separation that language can bring in ways big and small. Persistently faced the fear of feeling stupid when trying to speak Japanese in the real-world. Driven to create a powerful solution to help conquer the foreign language freeze and unleash the joy of connecting through language',
    }
  ]

  return (
    <div className="team-wrapper" id="team">
      <div className="dash-title">
        <div className="dash" />
        <div className="title">Our Team</div>
        <div className="dash" />
      </div>
      <div className="mission-wrapper">
        <div className="title">Our Mission</div>
        <div className="content">
          We aim to cultivate connection through learning and conversation. 
          Let’s get talking to each other. Kleo is the new way to learn languages. 
          Your personal coach you can practice speaking with anytime and receive instant, personalized feedback. 
          Without judgements or limits, Kleo gets you ready to speak in the real world
        </div>
      </div>
      <div className="members-wrapper">
        {members.map((member, index) =>
          <div className="member-item" key={`member-${index}`}>
            <div className="left">
              <div className="left-content">
                <div className="photo">
                  <img src={member.photo} alt={member.name} />
                </div>
                <div className="name">{member.name}</div>
                <div className="role">{member.role}</div>
              </div>
            </div>
            <div className="separator" />
            <div className="right">
              {member.description}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}