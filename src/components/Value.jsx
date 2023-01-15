 import Image from '../images/values.jpg'
 import SectionHead from './SectionHead'
 import {GiCutDiamond} from 'react-icons/gi'
 import { values } from '../data'
 import Card from '../UI/Card'

const Value = () => {
  return (
    <section className='values'>
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="Values mage" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond/>} title="Values"/>
          <p className='peeTag'>
            We are driven by the values listed below as it has helped us through the years
          </p>
          <div className="values__wrapper">
            {
              values.map(({id, icon, title,desc})=>{
                return <Card key={id}className="values__value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>

                </Card>
              })
            }
          </div>
        </div>
        </div> 

    </section>
  )
}

export default Value