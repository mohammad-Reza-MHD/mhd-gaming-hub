import Link from 'next/link';
export default function SectionTitle({ kicker, title, description, link, linkText }) { return <div className="section-heading"><div><div className="eyebrow">{kicker}</div><h2>{title}</h2>{description && <p>{description}</p>}</div>{link && <Link className="text-link" href={link}>{linkText} <span>←</span></Link>}</div>; }
