import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../../Hooks/UserContext/UserContext';

import useMedia from '../../../Hooks/useMedia/useMedia';

import { ReactComponent as MinhasFotos } from '../../../Assets/img/feed.svg';
import { ReactComponent as Estatisticas } from '../../../Assets/img/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../../Assets/img/adicionar.svg';
import { ReactComponent as Sair } from '../../../Assets/img/sair.svg';

import styles from './UserHeaderNav.module.css';

const UserNav = () => {

  const { userLogout } = useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);

  const {pathname} = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  },[pathname])

  return (
    <>
    {/* botao mobile */}
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
        </button>
      )}

      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/conta" end activeClassName={styles.active}>
          <MinhasFotos />{mobile && 'minhas fotos'}</NavLink>
        <NavLink to="/conta/estatisticas" end activeClassName={styles.active}>
          <Estatisticas />{mobile && 'Estatisticas'}</NavLink>
        <NavLink to="/conta/postar" end activeClassName={styles.active}>
          <AdicionarFoto />{mobile && 'Postar Fotos'}</NavLink>

        <button onClick={userLogout}><Sair />{mobile && 'Sair'}</button>
      </nav>
    </>
  )
}

export default UserNav
