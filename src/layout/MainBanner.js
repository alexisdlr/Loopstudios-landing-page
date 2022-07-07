import Hero from '../images/desktop/image-hero.jpg';

const MainBanner = () => {
  return(
    <>
      <div className="main-bg">
        <img src={Hero} alt='Hero' />
      </div>
      <section className="container">
        <div className='container_text'>
          <h2 className='subtitle'>
            INMERSIVE EXPERIENCES THAT DELIVER
          </h2>
        </div>
      </section>
    </>
  )
}

export default MainBanner;