function InviteButton({ className }) {
  return (
    <button type="button" className={`px-8 py-2 rounded-[22px] bg-invite-gradient text-white font-bold leading-[200%] cursor-pointer transition-all hover:opacity-60 ${className}`}>
      Request Invite
    </button>
  )
}

export default InviteButton;