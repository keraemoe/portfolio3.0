import { FaTelegram, FaGithub } from 'react-icons/fa';
import style from './Footer.module.scss';

export const socialLinks = [
  { href: 'https://t.me/keraemoe', icon: <FaTelegram size={30} /> },
  { href: 'https://github.com/keraemoe', icon: <FaGithub size={30} /> },
  { href: 'mailto:weekera@gmail.com', label: 'weekera@gmail.com' },
];

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="container">
        <div className={style.wrapper}>
          {socialLinks.map(({ href, icon, label }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={style.link}>
              {icon} {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
