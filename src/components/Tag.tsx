export function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-bg px-2 py-0.5 font-mono text-[11px] font-medium text-fg-muted">
      {children}
    </span>
  )
}
