import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/general.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h2>Empleados</h2>
      <p>Lista de empleados</p>
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
  );
}
