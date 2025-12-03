import Link from "next/link";
import {
  BadgeCheck,
  Clock,
  Paintbrush,
  SlidersHorizontal,
  Sparkles,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

export default function Home() {
  const features: {
    title: string;
    description: string;
    icon: LucideIcon;
    accent: string;
  }[] = [
    {
      title: "Smart Background Editor",
      description:
        "Replace, blur, or recolor backgrounds in seconds with adaptive lighting that matches your subject perfectly.",
      icon: Paintbrush,
      accent: "from-emerald-400/30 via-emerald-400/10 to-transparent",
    },
    {
      title: "Precision Retouching",
      description:
        "Automatically detect blemishes, stray hairs, and reflections. Remove distractions with pixel-aware masking.",
      icon: Sparkles,
      accent: "from-cyan-400/30 via-cyan-400/10 to-transparent",
    },
    {
      title: "Batch Automations",
      description:
        "Apply presets, resize, watermark, and export entire libraries at once with server-side processing.",
      icon: Workflow,
      accent: "from-violet-400/30 via-violet-400/10 to-transparent",
    },
  ];

  const flows: {
    title: string;
    headline: string;
    description: string;
    points: string[];
    accent: string;
  }[] = [
    {
      title: "E-commerce",
      headline: "Make every product gallery pixel-perfect.",
      description:
        "Generate consistent backgrounds, lighting, and reflections tuned to your brand palette in one click.",
      points: [
        "AI product staging with 30+ preset vibes",
        "Auto shadow + reflection synthesis",
        "Export directly to Shopify & Amazon specs",
      ],
      accent:
        "bg-gradient-to-br from-emerald-500/20 via-emerald-500/5 to-transparent",
    },
    {
      title: "Creative Teams",
      headline: "Prototype campaign visuals in minutes, not days.",
      description:
        "Prompt-driven editing lets designers iterate faster while non-designers stay on brand effortlessly.",
      points: [
        "Prompt-to-edit for colors, props, and mood",
        "Shared brand styles & guardrails",
        "Version history with rollback",
      ],
      accent:
        "bg-gradient-to-br from-cyan-500/20 via-cyan-500/5 to-transparent",
    },
    {
      title: "Photographers",
      headline: "Deliver polished proofs instantly after the shoot.",
      description:
        "Clean retouching, skin balancing, and lens correction are automated while you focus on the craft.",
      points: [
        "Skin-tone aware retouching presets",
        "Lens profile corrections & film looks",
        "Client review galleries with approvals",
      ],
      accent:
        "bg-gradient-to-br from-violet-500/20 via-violet-500/5 to-transparent",
    },
  ];

  const testimonials = [
    {
      quote:
        "We cut our editing queue by 85% and finally deliver same-day product updates. The background matching is unreal.",
      author: "Lina Martínez",
      role: "Head of Creative, Nova Goods",
    },
    {
      quote:
        "Promptable made our retouching workflow collaborative. Copywriters now tweak visuals without waiting on designers.",
      author: "Ethan Cole",
      role: "Creative Director, FrameLab",
    },
    {
      quote:
        "Clients are wowed when proofs hit their inbox before they pack up their outfits. This is my new secret weapon.",
      author: "Priya Desai",
      role: "Portrait Photographer",
    },
  ];

  const faqs = [
    {
      question: "Can I keep my brand colors consistent across edits?",
      answer:
        "Yes. Upload your palette once and Promptable ensures lighting, backgrounds, and overlays align with your brand identity automatically.",
    },
    {
      question: "Do I need design experience to use it?",
      answer:
        "No. Natural language prompts drive every edit and our guardrails prevent off-brand results. Power users can still fine-tune every layer.",
    },
    {
      question: "What image formats are supported?",
      answer:
        "Import RAW, PSD, PNG, or JPG at up to 100MP. Exports include layered PSD, transparent PNG, and optimized web JPG.",
    },
    {
      question: "Is there an API for bulk processing?",
      answer:
        "Our REST and streaming APIs let you trigger automations, sync assets, and pipe finished renders into your content pipeline.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-grid-slate-800/40 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.55),rgba(0,0,0,1))]" />

        <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-8 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-3 text-lg font-semibold">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 text-slate-950 shadow-glow">
              AI
            </span>
            Promptable Studio
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#workflow" className="transition hover:text-white">
              Workflows
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="#"
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:text-white"
            >
              Sign in
            </Link>
            <Link
              href="#cta"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Start editing
            </Link>
          </div>
          <Link
            href="#cta"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 md:hidden"
          >
            Join now
          </Link>
        </header>

        <main className="relative mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-32 pt-12 sm:px-8 lg:px-10">
          <section className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-slate-300 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
                AI-powered image editing
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Craft studio-grade visuals in the time it takes to write a prompt.
                </h1>
                <p className="max-w-xl text-lg text-slate-300">
                  Promptable Studio blends cinematic rendering with AI-assisted retouching so teams can ideate, refine, and ship imagery at light speed—no heavy software or plugins needed.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="#cta"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:bg-emerald-300"
                >
                  <Zap className="h-4 w-4" />
                  Launch the editor
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:text-white"
                >
                  <PlayIcon />
                  Watch 90s demo
                </a>
              </div>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/40">
                    <BadgeCheck className="h-5 w-5 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">99.94% uptime</p>
                    <p className="text-xs text-slate-400">backed by edge rendering</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 ring-1 ring-cyan-400/40">
                    <Clock className="h-5 w-5 text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">3.5x faster</p>
                    <p className="text-xs text-slate-400">than manual workflows</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-emerald-400/25 via-cyan-400/15 to-transparent blur-3xl" />
              <MockupPanel />
            </div>
          </section>

          <section id="features" className="space-y-10">
            <div className="flex flex-col items-start gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                Why teams choose us
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                An end-to-end studio crafted for AI-native creatives.
              </h2>
              <p className="max-w-2xl text-base text-slate-300">
                From importing RAW files to exporting channel-perfect assets, every step is assisted by intelligent automation tuned for pixel perfection.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-white/25"
                >
                  <div
                    className={`pointer-events-none absolute inset-px rounded-[1.4rem] opacity-0 transition group-hover:opacity-100 ${feature.accent}`}
                  />
                  <feature.icon className="relative h-10 w-10 text-emerald-300" />
                  <h3 className="relative mt-6 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="relative mt-4 text-sm leading-relaxed text-slate-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="workflow" className="space-y-10">
            <div className="flex flex-col items-start gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Built for every workflow
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Tailored automations that feel like magic.
              </h2>
              <p className="max-w-3xl text-base text-slate-300">
                Promptable Studio adapts to your role with pre-built automations. Select a workspace and watch the platform choreograph edits, exports, approvals, and delivery.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {flows.map((flow) => (
                <div
                  key={flow.title}
                  className="relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:border-white/25"
                >
                  <div
                    className={`absolute inset-px rounded-[1.4rem] ${flow.accent}`}
                  />
                  <div className="relative flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.25em] text-slate-200">
                    {flow.title}
                  </div>
                  <div className="relative space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                      {flow.headline}
                    </h3>
                    <p className="text-sm text-slate-300">{flow.description}</p>
                  </div>
                  <ul className="relative space-y-3">
                    {flow.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-slate-200"
                      >
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[0.65rem] font-semibold text-white">
                          <Sparkles className="h-3 w-3" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-10">
            <div className="flex flex-col items-start gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
                Trusted worldwide
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Loved by fast-moving creative teams.
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.author}
                  className="relative flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-white/25"
                >
                  <blockquote className="relative text-sm text-slate-200">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="relative mt-auto">
                    <p className="text-sm font-semibold text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-slate-400">{testimonial.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section id="pricing" className="space-y-10">
            <div className="flex flex-col items-start gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                Pricing
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Plans that scale with your creative volume.
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="pointer-events-none absolute inset-px rounded-[1.4rem] bg-gradient-to-br from-emerald-400/20 via-emerald-400/5 to-transparent" />
                <div className="relative flex items-center gap-3 rounded-full border border-emerald-300/40 bg-emerald-300/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-100">
                  Recommended
                </div>
                <div className="relative mt-8 flex items-end gap-3">
                  <span className="text-5xl font-semibold text-white">$89</span>
                  <span className="text-sm text-slate-300">per editor / month</span>
                </div>
                <p className="relative mt-4 text-sm text-slate-200">
                  Unlimited renders, 2M monthly AI credits, RAW support, and priority collaboration features.
                </p>
                <ul className="relative mt-8 space-y-3 text-sm text-slate-200">
                  {[
                    "Unlimited background replacements & restyling",
                    "1TB asset storage with version history",
                    "Team workspaces with approval flows",
                    "API access & custom automations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-200">
                        <BadgeCheck className="h-3.5 w-3.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#cta"
                  className="relative mt-10 inline-flex w-full items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:bg-emerald-300"
                >
                  Start free trial
                </Link>
              </div>
              <div className="grid gap-6">
                <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="relative flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Starter</h3>
                      <p className="mt-1 text-sm text-slate-300">
                        Perfect for solo creators or early startups.
                      </p>
                    </div>
                    <span className="text-2xl font-semibold text-white">$29</span>
                  </div>
                  <ul className="relative mt-6 space-y-2 text-sm text-slate-200">
                    <li>100K AI credits</li>
                    <li>Up to 3 brand kits</li>
                    <li>Export PNG & JPG</li>
                  </ul>
                </div>
                <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="relative flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Enterprise</h3>
                      <p className="mt-1 text-sm text-slate-300">
                        SOC2, custom SLAs, and dedicated support.
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-slate-200">Talk to sales</span>
                  </div>
                  <ul className="relative mt-6 space-y-2 text-sm text-slate-200">
                    <li>Unlimited seats & credits</li>
                    <li>On-prem or private cloud</li>
                    <li>Custom model fine-tuning</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="space-y-10">
            <div className="flex flex-col items-start gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                FAQ
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Answers before you hit render.
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <section
          id="cta"
          className="relative mx-auto mb-24 w-full max-w-5xl px-6 sm:px-8 lg:px-10"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-slate-900 p-10 backdrop-blur">
            <div className="absolute -left-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-emerald-400/30 blur-3xl" />
            <div className="absolute -right-16 top-10 h-40 w-40 rounded-full bg-cyan-400/30 blur-3xl" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
                  Start in minutes
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                  Spin up your AI studio and publish polished visuals today.
                </h2>
                <p className="mt-4 max-w-xl text-sm text-slate-200">
                  Get 7 days free with full access. Cancel anytime or invite your team to collaborate when you are ready.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:bg-slate-200"
                >
                  Claim free trial
                </Link>
                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                >
                  Explore pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="relative border-t border-white/10 bg-slate-950/80">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-400 sm:px-8 lg:px-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3 text-slate-200">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 text-slate-950 text-sm font-semibold">
                AI
              </span>
              Promptable Studio © {new Date().getFullYear()}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="transition hover:text-white">
                Privacy
              </Link>
              <Link href="#" className="transition hover:text-white">
                Terms
              </Link>
              <Link href="#" className="transition hover:text-white">
                Support
              </Link>
              <Link href="#" className="transition hover:text-white">
                Status
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <polygon points="6 4 20 12 6 20 6 4"></polygon>
    </svg>
  );
}

function MockupPanel() {
  return (
    <div className="relative rounded-[2.2rem] border border-white/10 bg-slate-950/70 p-6 backdrop-blur-lg">
      <div className="absolute inset-x-12 top-8 h-32 rounded-full bg-gradient-to-br from-emerald-400/30 via-cyan-400/30 to-transparent blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80">
        <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/80 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/20 text-slate-100">
              <Sparkles className="h-5 w-5 text-emerald-200" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Aurora Portrait.webp</p>
              <p className="text-xs text-slate-400">Shot on Sony α7 IV</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 items-center rounded-full border border-white/10 px-3 text-xs text-slate-200">
              3200x4000
            </span>
            <span className="inline-flex h-8 items-center rounded-full border border-white/10 px-3 text-xs text-slate-200">
              RAW
            </span>
          </div>
        </div>
        <div className="grid gap-0 sm:grid-cols-[2.2fr,1fr]">
          <div className="relative h-80 overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-black sm:h-[28rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(56,189,248,0.35),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.4),transparent_60%)]" />
            <figure className="absolute inset-8 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-1">
              <div className="relative h-full rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.15),transparent_55%)]">
                <div className="absolute inset-0 rounded-[1.5rem] border border-white/5" />
                <div className="absolute bottom-6 left-6 space-y-2 text-left text-white">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
                    Before
                  </p>
                  <p className="text-sm text-slate-200">
                    Uneven lighting & studio spill
                  </p>
                </div>
              </div>
            </figure>
            <figure className="absolute inset-16 rounded-3xl border border-emerald-300/40 bg-gradient-to-br from-emerald-500/40 via-slate-900 to-transparent p-1 shadow-[0_40px_70px_-60px_rgba(16,185,129,0.9)]">
              <div className="relative h-full rounded-[1.4rem] border border-white/10 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.25),transparent_60%)]">
                <div className="absolute bottom-6 right-6 space-y-2 text-right text-white">
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
                    After
                  </p>
                  <p className="text-sm text-slate-100">
                    Balanced tones & cinematic glow
                  </p>
                </div>
              </div>
            </figure>
          </div>
          <aside className="relative flex flex-col gap-4 border-t border-white/10 bg-slate-950/60 p-6 sm:border-l sm:border-t-0">
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
              Adjustments
            </h4>
            <div className="space-y-4">
              {[
                { label: "Skin balance", value: "Smooth +18" },
                { label: "Backdrop swap", value: "“Cyan aurora shimmer”" },
                { label: "Light sculpt", value: "Contour +23" },
                { label: "Noise profile", value: "Studio Clean" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                  <div className="mt-3 flex h-2 w-full items-center overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between text-xs text-slate-200">
                <span>Preset</span>
                <span className="font-semibold text-white">Aurora Glow</span>
              </div>
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400/20 px-3 py-2 text-xs font-semibold text-emerald-100 transition hover:bg-emerald-400/30">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                Refine adjustments
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
