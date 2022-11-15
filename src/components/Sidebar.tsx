import styles from './Sidebar.module.css'

import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="//unsplash.it/256/72" />

      <div className={styles.profile}>
        <Avatar src={'//github.com/ldgmaia.png'} />

        <strong>Diego Maia</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
        <PencilLine size={20} />
          Editar seu perfil
          </a>
      </footer>
    </aside>
  )
}
