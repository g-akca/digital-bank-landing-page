function Menu() {
  return (
    <div className="absolute top-22 left-0 w-full px-6">
      <nav className="py-8 bg-white rounded-sm flex flex-col items-center gap-4 text-blue-950 text-[18px] leading-[155%] tracking-[-0.25px]">
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