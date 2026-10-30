'use client';
import Link from 'next/link';
import { useState } from 'react';

const links = [['خانه','/'],['بازی‌ها','/games'],['اخبار','/news'],['جامعه','/community'],['فروشگاه','/store']];
export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="shell header-inner">
    <Link href="/" className="brand" aria-label="MHD Gaming Hub"><span className="brand-mark">M<span>H</span>D</span><span className="brand-name">IRANIAN <b>GAMING HUB</b></span></Link>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="باز و بسته کردن منو" aria-expanded={open}><span/><span/><span/></button>
    <nav className={open ? 'main-nav nav-open' : 'main-nav'}>{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}</nav>
    <Link className="header-cta" href="/pc-checker">ابزار بررسی سیستم <span>↙</span></Link>
  </div></header>;
}
