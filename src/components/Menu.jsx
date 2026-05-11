function Menu() {
  return (
    <div className="absolute top-16 left-0 w-full p-6 tablet:px-20 desktop:hidden">
      <div className="absolute inset-0 top-0 h-150.75 tablet:h-240 bg-linear-180 from-blue-950 to-[rgba(0,0,0,0)]" />

      <nav className="relative z-50 py-8 bg-white rounded-sm flex flex-col items-center gap-4 text-blue-950 text-[18px] leading-[155%] tracking-[-0.25px]">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
      </nav>
    </div>
  )
}

export default Menu;