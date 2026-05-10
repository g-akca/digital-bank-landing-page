import InviteButton from "./InviteButton";

function HeroContent() {
  return (
    <div className="self-center max-w-111.75 px-6 flex flex-col gap-6 items-center text-center">
      <h1 className="text-blue-950 font-light text-[40px] leading-[120%] tracking-[-0.75px]">Next generation digital banking</h1>

      <p>Take your financial life online. Your Digitalbank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>

      <InviteButton />
    </div>
  )
}

export default HeroContent;