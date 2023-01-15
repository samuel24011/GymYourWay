import Card from "../UI/Card"

const Trainer = ({image, name, job, socials}) => {
  return (
    <Card className="trainer">
        <div className="trainer__img">
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className="trainer__socials">
            {
                socials.map(({icon, Link}, index)=>{
                    return <a key={index} href={Link} target="_blank" rel='noreferrer noopener'>{icon}</a>
                })
            }
        </div>

    </Card>

  )
}

export default Trainer