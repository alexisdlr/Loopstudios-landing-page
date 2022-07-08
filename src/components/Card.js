const Card = ({content, img}) => {
  return(
    <div className='card'>
      <img src={img} alt='card-image' />
      <h2 className='card_title'>
       {content}
      </h2>
    </div>
  )
}
export default Card;