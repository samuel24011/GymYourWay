import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'

const Gallery = () => {
  const galleryLength = 15;
  const images = []

  for(let i = 1; i <= galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`))

  }
  
  return (
   <>
<Header title="Our Gallery" image={HeaderImage}>
  Every session is a time to move toward your goals and also a time to have so much fun
</Header>
<section className="gallery">
  <div className="container gallery__container">
    {
      images.map((image, index)=> {
        return <article key={index}>
          <img src={image} alt={`Gallery Imag ${index + 1}`} />
        </article>
      })
    }
  </div>
</section>

   </>
  )
}

export default Gallery;