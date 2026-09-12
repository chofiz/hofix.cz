import NetworkCanvas from "./components/NetworkCanvas";
import Logo from "./components/Logo";
import styles from "./page.module.css";

const PILLARS = [
  {
    no: "01",
    title: "Sítě & end-user support",
    tag: "25 let v IT",
    body: "Správa firemní sítě, počítačů a periferií. Helpdesk pro lidi, kteří potřebují, aby to fungovalo — ne vysvětlování, proč zrovna teď nefunguje. Stará škola, spolehlivě. Nehraju si na serverového mága, ale vím, co umím a co ne.",
    points: [
      "správa sítě & WiFi",
      "helpdesk & end-user support",
      "servis počítačů & notebooků",
      "konzultace & SLA",
    ],
  },
  {
    no: "02",
    title: "Analýza procesů",
    tag: "Procesy",
    body: "Nejvíc mě baví kouknout na to, jak firma reálně funguje, najít zbytečné kroky a ukázat, kde se dá ušetřit čas a nervy. Méně nástrojů, méně klikání, jasnější cesta. Univerzální voják, co vidí souvislosti — a po 25 letech ví, kde se obvykle schovávají problémy.",
    points: [
      "mapování firemních procesů",
      "odstranění zbytečných kroků",
      "výběr správných nástrojů",
      "návrh jednoduššího workflow",
    ],
  },
  {
    no: "03",
    title: "Vývoj",
    tag: "Vášeň",
    body: "Programování začalo jako vášeň a rychle z toho vyrostl samostatný projekt. Baví mě domýšlet věci do detailu a rovnou je stavět — weby, nástroje, automatizace. Vývoj zrychluju s AI asistentem, takže doručuju efektivně bez zbytečných průtahů. Zvládnu vaši výzvu? Napište, řeknu to na rovinu.",
    points: [
      "weby & webové aplikace",
      "interní nástroje & automatizace",
      "návrh & architektura",
      "spolupráce s AI asistentem",
    ],
  },
];

const PROCESS = [
  {
    k: "01",
    h: "Poslechnu",
    d: "Než navrhnu cokoliv, chci slyšet, co vás štve a co funguje. Žádné šablony, žádné předem dané řešení.",
  },
  {
    k: "02",
    h: "Kouknu na to",
    d: "Projdu reálný proces krok za krokem. Často stačí málo — přesunout tlačítko, zrušit krok, spojit dva nástroje v jeden.",
  },
  {
    k: "03",
    h: "Zjednoduším",
    d: "Méně nástrojů, méně klikání, jasnější cesta. Cílem není dodat další software — cílem je, aby lidé mohli dělat svou práci bez zbytečného tření.",
  },
  {
    k: "04",
    h: "Postarám se",
    d: "Co nasadíme, to udržím. Helpdesk, podpora, drobné úpravy. Neodejdu po projektu — zůstávám, dokud to dává smysl.",
  },
];

export default function Home() {
  return (
    <div className={styles.root}>
      {/* ── NAV ───────────────────────────────────────── */}
      <header className={styles.nav}>
        <div className={`wrap ${styles.navInner}`}>
          <a href="#top" className={styles.brand} aria-label="hofix — domů">
            <Logo className={styles.brandLogo} />
          </a>
          <nav className={styles.navLinks}>
            <a href="#co-delam">Co dělám</a>
            <a href="#jak">Jak přemýšlím</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <a href="#kontakt" className={styles.navCta}>
            <span className={styles.navCtaDot} />
            Otevřený výzvám
          </a>
        </div>
      </header>

      {/* ── HERO ──────────────────────────────────────── */}
      <section id="top" className={styles.hero}>
        <div className={styles.heroCanvas}>
          <NetworkCanvas />
        </div>
        <div className={`wrap ${styles.heroInner}`}>
          <p className={styles.heroKicker}>
            <span className={styles.heroKickerDot} />
            25 let v IT · Olomouc · pro firmy
          </p>
          <h1 className={styles.heroTitle}>
            IT & vývoj
            <br />
            <span className={styles.heroTitleAccent}>od někoho, kdo to zná.</span>
          </h1>
          <p className={styles.heroSub}>
            Dělám IT pro firmy — sítě, podporu, procesy. Poslední dobou i
            programuju, protože mě to baví a jde to. Nevnucuju se, neprodávám
            řešení, co nikdo nepotřebuje. Říkám, co si myslím — i když to není
            to, co byste chtěli slyšet.
          </p>
          <div className={styles.heroCtas}>
            <a href="#co-delam" className={styles.btnPrimary}>
              Co vlastně dělám
              <span className={styles.btnArrow}>→</span>
            </a>
            <a href="#kontakt" className={styles.btnGhost}>
              Napište mi
            </a>
          </div>
          <div className={styles.heroStatus}>
            <span className={styles.heroStatusItem}>
              <span className={styles.heroStatusKey}>status</span>
              <span className={styles.heroStatusVal}>
                <span className={styles.heroStatusDot} /> dostupný pro zajímavé
                projekty
              </span>
            </span>
            <span className={styles.heroStatusSep}>·</span>
            <span className={styles.heroStatusItem}>
              <span className={styles.heroStatusKey}>lokalita</span>
              <span className={styles.heroStatusVal}>Olomouc & online</span>
            </span>
          </div>
        </div>
        <div className={styles.heroFade} aria-hidden="true" />
      </section>

      {/* ── CO DĚLÁM ───────────────────────────────────── */}
      <section id="co-delam" className={styles.section}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <span className="mono">/ co dělám</span>
            <h2 className={styles.sectionTitle}>
              Tři věci, na kterých stojím.
            </h2>
            <p className={styles.sectionLead}>
              Nechtěl bych nikoho svádět k tomu, že dělám všechno. Tady jsou tři
              oblasti, ve kterých se pohybuju — a kde vím, kdy říct, že to není
              pro mě.
            </p>
          </div>

          <div className={styles.pillars}>
            {PILLARS.map((p) => (
              <article key={p.no} className={styles.pillar}>
                <div className={styles.pillarHead}>
                  <span className={styles.pillarNo}>{p.no}</span>
                  <span className={styles.pillarTag}>{p.tag}</span>
                </div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarBody}>{p.body}</p>
                <ul className={styles.pillarPoints}>
                  {p.points.map((pt) => (
                    <li key={pt}>
                      <span className={styles.pillarBullet} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── JAK PŘEMÝŠLÍM ─────────────────────────────── */}
      <section id="jak" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <span className="mono">/ jak přemýšlím</span>
            <h2 className={styles.sectionTitle}>
              Méně je víc. Skoro vždycky.
            </h2>
            <p className={styles.sectionLead}>
              Většina firem nemá problém v tom, že má málo nástrojů. Má problém v
              tom, že jich má moc a nikdo neví, proč. Tady je, jak k tomu
              přistupuju.
            </p>
          </div>

          <ol className={styles.process}>
            {PROCESS.map((s) => (
              <li key={s.k} className={styles.processStep}>
                <span className={styles.processKey}>{s.k}</span>
                <div className={styles.processBody}>
                  <h3 className={styles.processH}>{s.h}</h3>
                  <p className={styles.processD}>{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── KONTAKT ────────────────────────────────────── */}
      <section id="kontakt" className={styles.section}>
        <div className="wrap">
          <div className={styles.contact}>
            <div className={styles.contactLeft}>
              <span className="mono">/ kontakt</span>
              <h2 className={styles.contactTitle}>
                Nemusíte nic kupovat.
                <br />
                <span className={styles.contactTitleAccent}>
                  Stačí se zeptat.
                </span>
              </h2>
              <p className={styles.contactLead}>
                Pokud máte něco, co vás štve, nebo výzvu, která vás zajímá —
                napište. Odpovím do 24 hodin. Pokud to není pro mě, řeknu to na
                rovinu a případně doporučím někoho, kdo to zvládne líp.
              </p>
              <div className={styles.contactChannels}>
                <a
                  href="mailto:hofman@hofix.cz"
                  className={styles.contactChannel}
                >
                  <span className={styles.contactChannelKey}>e-mail</span>
                  <span className={styles.contactChannelVal}>
                    hofman@hofix.cz
                  </span>
                </a>
                <a href="tel:+420" className={styles.contactChannel}>
                  <span className={styles.contactChannelKey}>telefon</span>
                  <span className={styles.contactChannelVal}>
                    +420 — na vyžádání
                  </span>
                </a>
                <div className={styles.contactChannel}>
                  <span className={styles.contactChannelKey}>lokalita</span>
                  <span className={styles.contactChannelVal}>
                    Olomouc & online
                  </span>
                </div>
                <div className={styles.contactChannel}>
                  <span className={styles.contactChannelKey}>IČO</span>
                  <span className={styles.contactChannelVal}>88150984</span>
                </div>
              </div>
            </div>
            <aside className={styles.contactAside}>
              <div className={styles.contactAsideInner}>
                <p className={styles.contactAsideLabel}>ticho je taky odpověď</p>
                <p className={styles.contactAsideBody}>
                  Nedovolávám se, když k tomu není důvod. Neposílám
                  newslettery. Nestavím se na pultík s letáky. Pokud se ozvu,
                  je to proto, že mám něco konkrétního na srdci.
                </p>
                <a
                  href="mailto:hofman@hofix.cz?subject=Mám%20zájem%20o%20konzultaci"
                  className={styles.btnPrimary}
                >
                  Napsat e-mail
                  <span className={styles.btnArrow}>→</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────── */}
      <footer className={styles.footer}>
        <div className={`wrap ${styles.footerInner}`}>
          <div className={styles.footerBrand}>
            <Logo className={styles.footerLogo} />
            <p className={styles.footerTag}>
              IT & vývoj bez korporátní omáčky.
            </p>
          </div>
          <div className={styles.footerMeta}>
            <span>© {new Date().getFullYear()} David Hofman — hofix.cz</span>
            <span>IČO 88150984 · Olomouc, Česká republika</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
