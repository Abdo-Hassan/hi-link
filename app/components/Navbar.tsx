import Link from 'next/link';
import Logo from '../../public/hilink-logo.svg';
import User from '../../public/user.svg';
import Menu from '../../public/menu.svg';
import Image from 'next/image';
import { NAV_LINKS } from '@/constants';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
      <Link href='/'>
        <Image src={Logo} alt='logo' width={74} height={29} />
      </Link>

      <ul className='hidden h-full gap-11 lg:flex'>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all  '>
            {link.label}
          </Link>
        ))}
      </ul>

      <div className='lg:flexCenter hidden'>
        <Button
          type='button'
          title='Login'
          icon={User}
          variant='btn_dark_green'
        />
      </div>

      <Image
        src={Menu}
        alt='Menu'
        width={32}
        height={32}
        className='inline-block cursor-pointer lg:hidden'
      />
    </nav>
  );
};

export default Navbar;
