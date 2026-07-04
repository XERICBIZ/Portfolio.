interface LogoNavProps {
  onNavClick: (id: string) => void;
}

const navItems = [
  { id: 'hero',       label: 'Home'      },
  { id: 'about',      label: 'About'     },
  { id: 'experience', label: 'Work'      },
  { id: 'stack',      label: 'Stack'     },
  { id: 'socials',    label: 'Socials'   },
  { id: 'contact',    label: 'Contact'   },
];

export default function LogoNav({ onNavClick }: LogoNavProps) {
  return (
    <div id="logo-ui">
      {/* Left bracket — the |( of |(.o.)| */}
      <span className="lg-bracket">|(</span>

      {/* The morphing pill: starts as circle showing .o. → expands to nav bar */}
      <div className="lg-pill">
        {/* .o. — visible when pill is a circle, fades as it expands */}
        <span className="lg-dot lg-dot-l">.</span>
        <span className="lg-o">o</span>
        <span className="lg-dot lg-dot-r">.</span>

        {/* Nav items — fade in as pill expands */}
        <nav className="lg-nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className="lg-nav-btn"
              onClick={() => onNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Right bracket — the )| of |(.o.)| */}
      <span className="lg-bracket">)|</span>
    </div>
  );
}
