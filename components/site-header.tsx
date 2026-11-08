import Link from "next/link";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/dev45221904", icon: GitHubIcon },
  { label: "X", href: "https://x.com/DevCorleone00", icon: XIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dev-shrimankar-192525375/", icon: LinkedInIcon },
];

export function SiteHeader() {
  return (
    <header className="bg-[#f7f4ed] px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-[1.4rem] border border-[#b9aadf] bg-[#e9e1ff] px-5 py-5 text-stone-950 shadow-[5px_5px_0_0_#ffcf5a] sm:px-8">
        <nav aria-label="Social links" className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} title={link.label} className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c2b4e4] bg-[#fffdf8] text-[#55486f] transition hover:-translate-y-0.5 hover:border-[#bd3d26] hover:bg-[#ffcf5a] hover:text-stone-950">
              <link.icon />
            </a>
          ))}
        </nav>
        <Link href="/" className="font-helvetica justify-self-center rounded-full border border-[#d49d26] bg-[#ffcf5a] px-4 py-1 text-3xl font-bold tracking-[-0.04em] text-stone-950 transition hover:bg-[#ffd96f] sm:text-4xl">
          PureSol
        </Link>
        <a href="https://v0-portfolio-dev-web3.vercel.app/" className="justify-self-end rounded-full border border-[#c2b4e4] bg-[#fffdf8] px-4 py-2 text-sm font-semibold text-[#55486f] transition hover:-translate-y-0.5 hover:border-[#bd3d26] hover:bg-[#ffcf5a] hover:text-stone-950">
          Portfolio <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.54 1.04 1.54 1.04.9 1.54 2.35 1.1 2.92.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.5c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.91.68 1.84v2.73c0 .26.18.57.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[17px] w-[17px] fill-current">
      <path d="M18.9 2H22l-6.77 7.73L23.2 22h-6.24l-4.89-6.38L6.48 22H3.37l7.24-8.28L2.97 2h6.4l4.42 5.84L18.9 2Zm-1.09 18h1.72L8.43 3.9H6.58L17.81 20Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[17px] w-[17px] fill-current">
      <path d="M20.45 3H3.55A.55.55 0 0 0 3 3.55v16.9c0 .3.25.55.55.55h16.9c.3 0 .55-.25.55-.55V3.55c0-.3-.25-.55-.55-.55ZM8.34 18.34H5.67V9.76h2.67v8.58ZM7 8.59a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.34 9.75h-2.67v-4.18c0-1 0-2.29-1.4-2.29-1.4 0-1.61 1.09-1.61 2.22v4.25H10V9.76h2.56v1.17h.04c.36-.67 1.23-1.39 2.53-1.39 2.71 0 3.21 1.78 3.21 4.1v4.7Z" />
    </svg>
  );
}
