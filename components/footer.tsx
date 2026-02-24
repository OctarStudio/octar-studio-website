export function Footer() {
  return (
    <footer className="bg-[var(--octar-bg-dark)] text-[var(--octar-bg-light)] border-t border-[var(--octar-border-light)]">
      <div className="mx-auto w-full max-w-[1312px] px-6 md:px-8 py-14 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <span className="font-sans text-lg font-semibold tracking-[-0.02em]">
              Octar Studio
            </span>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[var(--octar-text-muted-light)]">
              Precise commercial execution.
            </p>
          </div>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-[var(--octar-text-muted-light)]">
            &copy; {new Date().getFullYear()} Octar Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
