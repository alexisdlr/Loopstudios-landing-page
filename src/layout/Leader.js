import interactive from '../images/desktop/image-interactive.jpg'
const Leader = () => {
  return(
    <section className="leader">
      <div className="container">
          <img src={interactive} alt='interactive image' />
          <div className='container_cont-text'>
            <h2 className='container_title'>THE LEADER IN INTERACTIVE VR</h2>
            <p className='container_parag'>
              Founded in 2011, Loopstudios has been producing world-class virtual reality 
              projects for some of the best companies around the globe. Our award-winning 
              creations have transformed businesses through digital experiences that bind 
              to their brand.
            </p>
        </div>
      </div>
     
    </section>
  )
}
export default Leader;