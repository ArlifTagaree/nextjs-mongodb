import React from 'react'
import styles from './styles/Nav.module.css'

function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navItem}>
        <ul>
          <li><a href='/'>My post</a></li>
          <li><a href='/'>Add Post</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav