import Link from "../components/Link";
import {ReactComponent as LOGO} from '../images/logo.svg';
import { dataUl } from "./Nav";
import Images from "../images/Images";

const Footer = () => {
  const icons = [
    {id: 1, icon: Images.facebook},
    {id: 2, icon: Images.twitter},
    {id: 3, icon: Images.pinterest},
    {id: 4, icon: Images.instagram},


  ]
  return(
    <footer className='footer'>
      <div className='container cont-all'>
        <div className='cont-nav'>
          <div className='cont-img'>
            <LOGO />
          </div> 
          <div>
            <ul>
                {
                dataUl.map(({id, data}) => (
                  <li key={id}>
                    <Link content={data} />
                  </li>
                ))
                }
              </ul>
          </div>
        </div>
        <div className='cont-icons'>
          <div className='icons'>
            {icons.map(({id,icon}) => (
              <div key={id}>
                <a href='#' className='icon'>
                <img src={icon} alt="icon" loading="lazy" /></a>
              </div>
            ))}
          </div>
          <div>
              <p className='copyright-text'>© 2021 Loopstudios. All rights reserved.</p>
          </div>
        </div>
      </div> 
    </footer>
  )
}
export default Footer;