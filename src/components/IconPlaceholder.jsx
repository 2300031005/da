export default function IconPlaceholder({ className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 rounded-[4px] border border-dashed border-current/40 bg-current/15 ${className}`}
    />
  )
}
