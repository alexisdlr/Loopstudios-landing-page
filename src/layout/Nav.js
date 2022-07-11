import Link from '../components/Link';
import {ReactComponent as LOGO} from '../images/logo.svg';
import {ReactComponent as Burger} from '../images/icon-hamburger.svg';
import { ReactComponent as Close } from "../images/icon-close.svg";
import {useState} from 'react';
import Button from '../components/Button';


export const dataUl = [
  {id: 1,data:'About'},
  {id: 2,data:'Careers'},
  {id: 3,data:'Events'},
  {id: 4,data:'Products'},
  {id: 5,data:'Support'}
]

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <header className={isOpen ? "container open" : "container"}>
      <nav className={isOpen ? "nav open" : "nav"}>
        <div className='cont-img'>
          <LOGO />
        </div>
        <ul className='nav_ul'>
          {
            dataUl.map(({id, data}) => (
              <li key={id}>
                <Link content={data} />
              </li>
            ))
          }
        </ul>
        <Button className={isOpen ? "hamburger open" : "hamburger"}
					content={isOpen ? (
						<Close onClick={() => setIsOpen(false)} />
					) : (
						<Burger onClick={() => setIsOpen(true)} />
					)}
				/>
      </nav>
    </header>
  )
}
export default Nav;