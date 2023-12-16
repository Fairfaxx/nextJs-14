'use client';

import Link from 'next/link';
import styles from './ActiveLink.module.scss';
import { usePathname } from 'next/navigation';
import { log } from 'console';
interface LinkPros {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: LinkPros) => {
  const activeLink = usePathname();
  console.log(activeLink, path);

  return (
    <>
      <Link
        className={`${styles.link} ${
          activeLink === path && styles['active-link']
        }`}
        href={path}
      >
        {text}
      </Link>
    </>
  );
};
