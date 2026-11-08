export function SiteFooter() {
  return (
    <footer className="border-t border-stone-300 bg-[#fffdf8]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>Notes from the journey of learning Solidity.</p>
        <p>© {new Date().getFullYear()} PurSol. All rights reserved.</p>
      </div>
    </footer>
  );
}
