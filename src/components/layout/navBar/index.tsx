import React, { useEffect, useState } from 'react';
import Logo from './logo';
import Link from 'next/link';
import ThemeSelector from '@/components/library/themeSelector';
import Dropdown from '@/components/library/dropdown';
import { CgWebsite, CgProfile, CgMail, CgPen } from 'react-icons/cg';
import { debounce } from '@/utils/debounce';
import { motion } from 'framer-motion';

const styles = require('./navBar.module.scss');

type NavBarProps = {};

const NavBar = (props: NavBarProps) => {
  const navItems = [
    {
      name: 'projects',
      link: '/#projects',
      icon: <CgWebsite />,
    },
    {
      name: 'work-experience',
      link: '/blog',
      icon: <CgPen />,
    },
    {
      name: 'contact',
      link: '/#contact',
      icon: <CgMail />,
    },
    {
      name: 'CV',
      link: 'https://drive.google.com/file/d/1ZhQGXjUzgBTV7JwgffXaeSLjski9L9u_/view?usp=sharing',
      icon: <CgProfile />,
    },
  ];

  // State for hide/show nav on scroll
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollAtTop, setScrollAtTop] = useState(true);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollPos = window.scrollY;
      const scrollBuffer = 50;
      const scrollMinDisplay = 5;

      setShowNav(
        // Show Nav either if scroll up by distance larger than scrollBuffer or within minDisplay range from top of page
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > scrollBuffer) ||
          currentScrollPos < scrollMinDisplay,
      );
      setScrollAtTop(currentScrollPos <= scrollBuffer);
      setPrevScrollPos(currentScrollPos);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, showNav, scrollAtTop]);

  const navVariants = {
    hide: {
      top: -100,
    },
    top: {
      top: 0,
    },
    scrolled: {
      top: 0,
      boxShadow: 'var(--shadow-elevation-medium)',
    },
  };

  return (
    <motion.nav
      className={styles.navContainer}
      variants={navVariants}
      initial={'top'}
      animate={!showNav ? 'hide' : scrollAtTop ? 'top' : 'scrolled'}
      layout
      transition={{
        delay: 0.2,
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <Link href={'/'} aria-label="home page">
        <Logo />
      </Link>
      <div className={styles.linksContainerSmall}>
        <Dropdown
          customMenuClassName={styles.navDropdown}
          options={[
            ...navItems.map((item) => {
              return (
                <Link
                  aria-label={item.name}
                  key={item.name}
                  href={item.link}
                  className={styles.dropdownItemContainer}
                >
                  <div className={styles.dropdownItem}>
                    {item.name}
                    {item.icon}
                  </div>
                </Link>
              );
            }),
            <ThemeSelector key="theme-selector" />,
          ]}
        />
      </div>
      <div className={styles.linksContainerLarge}>
        {navItems.map((item) => {
          return (
            <Link key={item.name} href={item.link} aria-label={item.name}>
              {item.name}
            </Link>
          );
        })}
        <ThemeSelector />
      </div>
    </motion.nav>
  );
};

export default NavBar;
