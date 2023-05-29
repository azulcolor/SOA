import Link from 'next/link';
import styles from '../styles/general.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Tienda sin nombre</h1>
      <div>
        <Link href="/" className={styles.links}>Empleados</Link>
        <Link href="/activos" className={styles.links}>Activos</Link>
      </div>
    </header>
  );
}
