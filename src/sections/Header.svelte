<script>
    const links = [
        { label: "About", href: "#about" },
        { label: "Research", href: "#research" },
        { label: "Publications", href: "#publications" },
        { label: "Teaching", href: "#teaching" },
        { label: "CV", href: "/CV.pdf" },
    ];
</script>

<header class="sticky top-0 z-50 w-full border-b border-white/5 bg-bg/80 backdrop-blur">
    <div class="max-w-3xl mx-auto flex items-center justify-between px-6 py-5">
        <a href="#about" class="text-sm font-semibold tracking-tight">Ronald Chiang</a>
        <nav class="hidden sm:flex items-center gap-6 text-sm text-neutral-400">
            {#each links as link}
                <a
                    href={link.href}
                    class="hover:text-text transition-colors"
                    target={link.href.endsWith(".pdf") ? "_blank" : undefined}
                    rel={link.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                >{link.label}</a>
            {/each}
        </nav>
    </div>
</header>
