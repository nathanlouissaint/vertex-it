"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, Check, Cloud, Database, Monitor, ShieldCheck, Wifi, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const metrics = [
  { label: "Devices", value: "184", icon: Monitor }, { label: "Protected Endpoints", value: "176", icon: ShieldCheck },
  { label: "Active Threats", value: "0", icon: Activity }, { label: "Cloud Services", value: "24", icon: Cloud },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const transition = { duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] as const };
  return <section id="top" className="relative isolate border-b border-line">
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
    <Container className="grid items-center gap-12 py-14 sm:py-16 lg:min-h-[42rem] lg:grid-cols-[.94fr_1.06fr] lg:gap-12 lg:py-16 xl:min-h-[44rem] xl:gap-20 xl:py-18">
      <motion.div initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }} animate={{ opacity: 1, y: 0 }} transition={transition} className="max-w-xl">
        <p className="mb-6 flex items-center gap-2 text-[11px] font-semibold tracking-[.18em] text-primary"><span className="h-px w-7 bg-primary" /> MANAGED IT FOR GROWING BUSINESSES</p>
        <h1 className="max-w-2xl text-5xl font-medium tracking-[-.065em] text-foreground sm:text-6xl lg:text-[4.25rem] lg:leading-[1.02]">IT that keeps your <span className="text-[#b6c0cb]">business moving.</span></h1>
        <p className="mt-7 max-w-lg text-lg leading-8 tracking-[-.02em] text-[#c0c8d1]">Managed IT, cybersecurity, and cloud solutions built for growing businesses that can&apos;t afford downtime.</p>
        <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">Get proactive support, stronger security, and technology infrastructure designed to scale with your business.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href="#assessment" showArrow>Book Your IT Assessment</Button><Button href="#services" variant="secondary">Explore Our Services</Button></div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }} animate={{ opacity: 1, y: 0 }} transition={{ ...transition, delay: shouldReduceMotion ? 0 : .12 }} className="relative mx-auto w-full max-w-2xl lg:mx-0 lg:justify-self-end">
        <div aria-hidden="true" className="absolute -inset-8 -z-10 bg-primary/[.07] blur-3xl" />
        <div className="overflow-hidden rounded-lg border border-white/10 bg-card shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between border-b border-line px-5 py-4 sm:px-6"><div><p className="text-sm font-medium tracking-[-.02em] text-foreground">Infrastructure Overview</p><p className="mt-1 text-[11px] text-muted">Vertex IT Command Center · Live environment</p></div><div className="flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/8 px-2.5 py-1 text-[11px] font-medium text-emerald-300"><span className="relative flex size-1.5"><span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/60 [animation-duration:3s]" /><span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" /></span> Operational</div></div>
          <div className="p-4 sm:p-5">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{metrics.map(({ label, value, icon: Icon }) => <div key={label} className="group rounded-md border border-line bg-background-secondary p-3.5 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-white/15 hover:bg-[#0e141b]"><Icon size={15} className="text-primary transition-transform duration-200 group-hover:scale-110" aria-hidden="true" /><p className="mt-5 text-xl font-medium tracking-[-.04em] text-foreground">{value}</p><p className="mt-1 text-[11px] leading-4 text-muted">{label}</p></div>)}</div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2"><HealthCard label="Network Health" value="98%" icon={Wifi} progress={98} /><HealthCard label="Security Coverage" value="94%" icon={ShieldCheck} progress={94} /></div>
            <div className="mt-3 rounded-md border border-line bg-background-secondary p-4"><div className="flex items-center justify-between"><div className="flex items-center gap-2 text-xs font-medium text-foreground"><Database size={15} className="text-primary" /> Cloud ecosystem</div><span className="text-[11px] text-muted">3 connected services</span></div><div className="mt-4 grid grid-cols-3 gap-2">{["AWS", "Azure", "Microsoft 365"].map((platform) => <div key={platform} className="rounded border border-line bg-card px-2 py-2.5 text-center text-[11px] font-medium text-[#c7d0da]">{platform}</div>)}</div></div>
            <ActivityTrend />
          </div>
          <div className="flex items-center gap-2 border-t border-line bg-white/[.015] px-5 py-3 text-xs text-muted sm:px-6"><span className="grid size-5 place-items-center rounded-full bg-emerald-400/10 text-emerald-300"><Check size={12} strokeWidth={3} /></span>Systems Operational <span className="ml-auto font-mono text-[10px] text-[#697583]">UPDATED JUST NOW</span></div>
        </div>
      </motion.div>
    </Container>
  </section>;
}

function HealthCard({ label, value, icon: Icon, progress }: { label: string; value: string; icon: LucideIcon; progress: number }) {
  return <div className="group rounded-md border border-line bg-background-secondary p-4 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-white/15 hover:bg-[#0e141b]"><div className="flex items-center justify-between text-muted"><span className="flex items-center gap-2 text-xs"><Icon size={14} className="text-primary transition-transform duration-200 group-hover:scale-110" />{label}</span><span className="font-mono text-xs text-foreground">{value}</span></div><div className="mt-4 h-1 overflow-hidden rounded-full bg-white/[.08]"><div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} /></div></div>;
}

function ActivityTrend() {
  return <div className="mt-3 flex items-center gap-4 rounded-md border border-line bg-background-secondary px-4 py-3"><div className="min-w-0"><p className="text-xs font-medium text-foreground">Network activity</p><p className="mt-1 text-[11px] text-muted">Stable throughput · last 60 minutes</p></div><div className="ml-auto flex items-center gap-3"><span className="hidden font-mono text-[10px] text-[#93a1af] sm:inline">99.99% uptime</span><svg aria-hidden="true" viewBox="0 0 104 28" className="h-7 w-26 shrink-0 overflow-visible"><path d="M1 21 L10 19 L18 20 L27 13 L35 16 L44 10 L53 14 L62 8 L71 12 L80 7 L89 11 L103 4" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary" /><path d="M1 26 L1 21 L10 19 L18 20 L27 13 L35 16 L44 10 L53 14 L62 8 L71 12 L80 7 L89 11 L103 4 L103 26 Z" className="fill-primary/[.08]" /></svg></div></div>;
}
