import Link from '../components/Link';
import {ReactComponent as LOGO} from '../images/logo.svg';

const dataUl = [
  {id: 1,data:'About'},
  {id: 2,data:'Careers'},
  {id: 3,data:'Events'},
  {id: 4,data:'Products'},
  {id: 5,data:'Support'}
]

const Nav = () => {
  return(
    <header className='container'>
      <nav className='nav'>
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
      </nav>
    </header>
  )
}
export default Nav;