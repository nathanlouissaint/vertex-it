"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const navItems = ["Services", "Solutions", "About", "Resources"];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return <header className="relative z-30 border-b border-line bg-background/95 backdrop-blur-sm">
    <Container className="flex h-18 items-center justify-between">
      <a href="#top" className="group inline-flex items-center gap-2.5" aria-label="Vertex IT home"><span className="grid size-7 place-items-center border border-primary bg-primary/10 text-xs font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-white">V</span><span className="text-[15px] font-semibold tracking-[-0.03em] text-foreground">Vertex IT</span></a>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="relative py-2 text-sm text-muted transition-colors hover:text-foreground after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 hover:after:scale-x-100">{item}</a>)}</nav>
      <div className="hidden lg:block"><Button href="#assessment" showArrow>Book Assessment</Button></div>
      <button type="button" className="grid size-10 place-items-center text-foreground lg:hidden" onClick={() => setIsOpen((current) => !current)} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? "Close navigation" : "Open navigation"}>{isOpen ? <X size={20} /> : <Menu size={20} />}</button>
    </Container>
    {isOpen && <div id="mobile-navigation" className="absolute inset-x-0 top-full border-b border-line bg-background lg:hidden"><Container className="flex flex-col py-4"><nav className="flex flex-col" aria-label="Mobile navigation">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="border-b border-line py-4 text-sm text-muted transition-colors hover:text-foreground">{item}</a>)}</nav><Button href="#assessment" className="mt-5 w-full" showArrow onClick={() => setIsOpen(false)}>Book Assessment</Button></Container></div>}
  </header>;
}
