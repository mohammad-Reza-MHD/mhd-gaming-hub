import Link from 'next/link';
import { games, news } from '../data/content';
import GameCard from '../components/GameCard';
import SectionTitle from '../components/SectionTitle';

export default function HomePage() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" /> خانه‌ی گیمرهای ایرانی</div>
          <h1>بازی فقط سرگرمی نیست؛<br /><span>دنیای توئه.</span></h1>
          <p>کشف بازی‌های تازه، دنبال‌کردن خبرها و شناخت بهتر دنیای گیم؛ همه در یک خانه با امضای MHD.</p>
          <div className="hero-actions">
            <Link className="btn btn-gold" href="/games">کشف بازی‌ها <span>←</span></Link>
            <Link className="btn btn-ghost" href="/pc-checker">بررسی سیستم من</Link>
          </div>
          <div className="hero-stats">
            <div><strong>01</strong><span>مرجع فارسی گیم</span></div>
            <i />
            <div><strong>∞</strong><span>ماجراجویی بی‌پایان</span></div>
          </div>
        </div>
        <div className="hero-art" aria-label="تصویر گرافیکی فضای گیمینگ">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="hero-monogram">M<span>H</span>D</div>
          <div className="hero-chip chip-top">MHD / GAMING HUB</div>
          <div className="hero-chip chip-bottom"><span className="chip-dot" /> LEVEL UP YOUR WORLD</div>
          <div className="hero-cross">✳</div>
        </div>
      </section>

      <section className="shell feature-strip">
        <Link href="/games"><span className="feature-icon">◈</span><span><b>کتابخانه بازی‌ها</b><small>بازی بعدی‌ات را پیدا کن</small></span><span className="feature-arrow">↙</span></Link>
        <Link href="/pc-checker"><span className="feature-icon">⌘</span><span><b>سیستم من اجرا می‌کند؟</b><small>مشخصاتت را مقایسه کن</small></span><span className="feature-arrow">↙</span></Link>
        <Link href="/news"><span className="feature-icon">▤</span><span><b>نبض دنیای گیم</b><small>خبرها و رویدادها</small></span><span className="feature-arrow">↙</span></Link>
      </section>

      <section className="shell section-block">
        <SectionTitle kicker="PICK YOUR NEXT WORLD" title="بازی‌های منتخب" description="چند مقصد برای شروع ماجراجویی بعدی." link="/games" linkText="تمام بازی‌ها" />
        <div className="game-grid">{games.slice(0, 3).map(game => <GameCard key={game.slug} game={game} />)}</div>
      </section>

      <section className="news-band">
        <div className="shell news-layout">
          <div className="news-intro"><div className="eyebrow">MHD / DISPATCH</div><h2>از دنیای گیم<br /><span>عقب نمون.</span></h2><p>آخرین موضوعات دنیای بازی را در یک نگاه دنبال کن. موارد این نسخه نمونه‌ی نمایشی هستند.</p><Link href="/news" className="text-link">رفتن به بخش اخبار <span>←</span></Link></div>
          <div className="news-list">{news.slice(0, 3).map((item, i) => <Link href="/news" className="news-row" key={item.id}><span className="news-index">0{i + 1}</span><span className="news-content"><small>{item.category} · {item.date}</small><b>{item.title}</b><em>{item.summary}</em></span><span className="news-arrow">↗</span></Link>)}</div>
        </div>
      </section>

      <section className="shell community-cta">
        <div><div className="eyebrow">BUILT FOR PLAYERS</div><h2>این دنیا با <span>جامعه‌اش</span> زنده است.</h2><p>در نسخه‌های بعدی، پروفایل گیمرها، گفت‌وگوها و امتیازدهی کاربران به MHD اضافه می‌شود.</p></div>
        <Link className="btn btn-ghost" href="/community">آشنایی با جامعه MHD <span>↙</span></Link>
      </section>
    </>
  );
}
