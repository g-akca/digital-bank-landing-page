import InviteButton from "./InviteButton";

function HeroContent() {
  return (
    <div className="self-center max-w-111.5 px-6 tablet:px-0 flex flex-col gap-6 items-center text-center desktop:items-start desktop:text-start desktop:pt-20">
      <h1 className="text-blue-950 font-light text-[40px] tablet:text-[56px] leading-[120%] tracking-[-0.75px] tablet:tracking-[-1px]">Next generation digital banking</h1>

      <p className="tablet:text-[18px] tablet:leading-[155%] tablet:tracking-[-0.25px]">Take your financial life online. Your Digitalbank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>

      <InviteButton />
    </div>
  )
}

export default HeroContent;