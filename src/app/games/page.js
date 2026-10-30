import { games } from '../../data/content';
import GameCard from '../../components/GameCard';
export default function GamesPage(){return <section className="shell page-shell"><div className="eyebrow">MHD / GAME LIBRARY</div><h1>کتابخانه بازی‌ها</h1><p>بازی‌های منتخب نسخه نمایشی. فیلترها، جست‌وجوی کامل و دیتابیس بازی‌ها در مرحله دوم توسعه اضافه می‌شوند.</p><div className="game-grid" style={{marginTop:32}}>{games.map(game=><GameCard key={game.slug} game={game}/>)}</div><div className="notice">اطلاعات و امتیازهای این صفحه نمونه هستند و به منبع زنده متصل نیستند.</div></section>}
