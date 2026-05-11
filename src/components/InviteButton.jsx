function InviteButton({ className }) {
  return (
    <button type="button" className={`px-8 py-2 rounded-[22px] bg-linear-15 from-[#2AB6D9] to-[#33D35E] to-90% text-white font-bold leading-[200%] cursor-pointer transition-all hover:opacity-60 ${className}`}>
      Request Invite
    </button>
  )
}

export default InviteButton;