import navLinks from "../data/navLinks";

function Navigation({ className, linkClassName }) {
  return (
    <nav className={className}>
      {navLinks.map(({ label, href }) => (
        <a key={label} href={href} className={linkClassName}>{label}</a>
      ))}
    </nav>
  )
}

export default Navigation;
