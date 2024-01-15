
import './navigation.scss';
import { NavLink } from "react-router-dom";

const links = [
  { link: '/', text: 'Home' },
  { link: 'shop', text: 'Shop' },
  { link: 'plantCare', text: 'Plant Care' },
  { link: 'blogs', text: 'Blogs' }
]

type Props = {
  open: boolean;
  setOpen: (bool: boolean) => void
}

const Navigation: React.FC<Props> = ({ open, setOpen }) => {

  const activeLink = 'navigation__link navigation__link--active';
  const normalLink = 'navigation__link';

  return (
    <nav className={`${open ? 'navigation navigation--active' : 'navigation'}`}>
      <ul className="navigation__list">

        {links.map(link => {
          return (
            <li className="navigation__item" key={link.text}>
              <NavLink to={link.link} className={({ isActive }) => isActive ? activeLink : normalLink} onClick={() => setOpen(false)}>{link.text}</NavLink>
            </li>
          )
        })}
        
      </ul>
    </nav>
  );
}

export default Navigation;