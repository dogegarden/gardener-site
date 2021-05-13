import React from 'react'
import { Link, useParams } from 'react-router-dom';
import '../styles/globals.css';

const HeaderLink = ({ page, selected }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);
  let className = selected ? 'headerlink-no-link' : '';
  className += 'headerlink-title';

  return (
    <Link to={`/${page}`} className={className}>
      {title}
      <div className={selected ? 'headerlink-dot-active' : 'headerlink-dot'}>
        •
      </div>
    </Link>
  );
};

const Header = () => {
  const page = useParams().page || 'home';

  return (
    <div className='header'>
      <HeaderLink page='home' selected={page === 'home'} />
      <HeaderLink page='about' selected={page === 'about'} />
      <HeaderLink page='contact' selected={page === 'contact'} />
      <HeaderLink page='bot' selected={page === 'bot'} />
      <HeaderLink page='audio' selected={page === 'audio'} />
      <HeaderLink page='dogegarden' selected={page === 'dogegarden'} />
    </div>
  );
};

export default Header;

export default Header
