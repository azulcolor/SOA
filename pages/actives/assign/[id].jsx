import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from '../../../styles/general.module.css'

export default function Assing() {

    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
      <h2>Activos</h2>
      <p>Lista de activos disponibles</p>
      <div className={styles.list}>
        <h3>1</h3>
        <p>lealpastelin@gmail.com</p>
        <p>Area</p>
        <p>Edad: 30</p>
        <div>
          <Link href={'/'} className={styles.assign}>
            Asignar activo
          </Link>
          <Link href={'/'} className={styles.delete}>
            Eliminar activo
          </Link>
        </div>
      </div>
      <div className={styles.list}>
        <h3>1</h3>
        <p>lealpastelin@gmail.com</p>
        <p>Area</p>
        <p>Edad: 30</p>
        <div>
          <Link href={'/'} className={styles.assign}>
            Asignar activo
          </Link>
          <Link href={'/'} className={styles.delete}>
            Eliminar activo
          </Link>
        </div>
      </div>
      <div className={styles.list}>
        <h3>1</h3>
        <p>lealpastelin@gmail.com</p>
        <p>Area</p>
        <p>Edad: 30</p>
        <div>
          <Link href={'/'} className={styles.assign}>
            Asignar activo
          </Link>
          <Link href={'/'} className={styles.delete}>
            Eliminar activo
          </Link>
        </div>
      </div>
    </div>
    )
}

