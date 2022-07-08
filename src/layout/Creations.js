import Images from "../images/Images";
import Card from "../components/Card";
import Link from "../components/Link";
const Creations = () => {
  const dataCards= [
    {id:1 , title: 'DEEP EARTH', img: Images.earth},
    {id:2 , title: 'NIGHT ARCADE', img: Images.night},
    {id:3 , title: 'SOCCER TEAM VR', img: Images.soccer},
    {id:4 , title: 'THE GRID', img: Images.grid},
    {id:5 , title: 'FROM UP ABOVE VR', img: Images.above},
    {id:6 , title: 'POCKET BOREALIS', img: Images.pocket},
    {id:7, title: 'THE CURIOSITY', img: Images.curiosity},
    {id:8, title: 'MAKE IT FISHEYE', img: Images.fisheye},


  ]
  return(
    <section className='container container-creations'>
        <div className='container-creations_text'>
          <h2>OUR CREATIONS</h2> <Link content='SEE ALL' />
          
        </div>
      <div className='creations'>
        { 
      dataCards.map(({id, title, img}) => (
          <Card
          key={id}
          content={title}
          img={img}
          />
        ))
        }
      </div>
    </section>
  )
}
export default Creations;