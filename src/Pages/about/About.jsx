import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'


const About = () => {
  return (
   <>
   <Header title="About Us" image={HeaderImage}>
   A state of the art gym for fitness lovers with a passion for variety. After
    noticing we could not find a studio that offered enough to consistently motivate us, we decided to 
    create one! GymYourWay is a fitness facility that provides a mix of instructor-led classes
    for improved strength, endurance, flexibility, and wellness. Mix and match weight training, boot 
    camp, hot yoga, hot barre, pilates, functional fitness, and more. Our classes cost less than a babysitter 
    and we offer that to our members for free! 
   </Header>

   <section className="about__story">
    <div className="container about__story-container">
      <div className="about__section-image">
        <img src={StoryImage} alt="our Story" />
      </div>
      <div className="about__section-content">
        <h1>Our Story</h1>
        <p>STARTING A GYM BUSINESS HAS BEEN A DREAM FOR A LONG TIME.  AFTER YEARS OF 
          RESEARCH AND ANALYSIS OF OTHER FITNESS CONCEPTS AND FRANCHISES, WE COULD NEVER 
          FIND EXACTLY WHAT WE WANTED IN THE MARKETPLACE. SO IN DECEMBER OF 2019 WE DECIDED TO DO 
          SOMETHING CRAZY AND WE MADE PLANS TO DEVELOP OUR OWN GYM CONCEPT. THE YEAR 2020 WAS TO BE ONE OF 
          TAKING RISKS IN THE PURSUIT OF DREAMS WHICH WE TOOK AND TODAY, GymYourWay IS UP AND RUNNING
          </p>
          
      </div>
    </div>
   </section>

   <section className="about__Vision">
    <div className="container about__Vision-container">
      <div className="about__section-content">
        <h1>Our Vision</h1>
        <p>Our vision is to create a community of like-minded 
          people who share in the mission of health and wellness for all. 
          We owe it to ourselves and our families to be healthy in mind, 
          body, and spirit. GymYourWay is run by a group of 
          trainers who own and share in this vision.  They are leaders 
          in their communities and the best at their craft.  
          Come join us for a class and join in the movement.
          </p>
          
      </div>
      <div className="about__section-image">
        <img src={VisionImage} alt="our Story" />
      </div>
    </div>
   </section>

   <section className="about__mission">
    <div className="container about__mission-container">
      <div className="about__section-image">
        <img src={MissionImage} alt="our mission ima" />
      </div>
      <div className="about__section-content">
        <h1>Our Mission</h1>
        <p>To become your first go-to fitness place as we will keep improving our facilities to meet your fitness need.
          </p>
          <p>To give you premium access while also reducing cost. We can bet we are among the few with low fee plans
            </p>
            <p>To become international, reaching various clients across the globe.
              </p>
          
      </div>
    </div>
   </section>
   </>
  )
}

export default About