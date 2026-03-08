"use client"

import { useState, useEffect } from "react"

export function WhatsAppFAB() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        // Delay appearance so it doesn't compete with initial page load
        const timer = setTimeout(() => setVisible(true), 1500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <a
            href="https://wa.me/971569556726"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className={`
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-[60px] h-[60px] rounded-full
        bg-[#25D366] text-white
        shadow-[0_4px_20px_rgba(37,211,102,0.45)]
        hover:shadow-[0_6px_28px_rgba(37,211,102,0.6)]
        hover:scale-110
        active:scale-95
        transition-all duration-300 ease-out
        ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        group
      `}
        >
            {/* Pulse ring */}
            <span
                className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none"
                aria-hidden="true"
            />

            {/* WhatsApp SVG icon */}
            <svg
                className="w-8 h-8 relative z-10"
                viewBox="0 0 32 32"
                fill="currentColor"
                aria-hidden="true"
            >
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.132 6.744 3.058 9.378L1.058 31.2l6.042-1.94a15.9 15.9 0 008.904 2.702C24.826 31.962 32 24.786 32 16.004S24.826 0 16.004 0zm9.35 22.614c-.396 1.116-1.954 2.042-3.208 2.312-.858.182-1.978.326-5.75-1.236-4.83-2-7.934-6.904-8.176-7.224-.232-.318-1.948-2.596-1.948-4.952 0-2.356 1.232-3.512 1.67-3.992.396-.434 1.046-.636 1.67-.636.2 0 .38.01.542.018.436.018.654.042 .942.728.358.858 1.232 3.006 1.338 3.226.108.218.216.516.068.812-.14.302-.264.436-.482.688-.218.252-.424.446-.642.718-.2.238-.424.49-.182.926.242.434 1.078 1.776 2.314 2.878 1.59 1.416 2.93 1.854 3.344 2.06.414.206.654.174.896-.106.25-.286 1.064-1.236 1.348-1.66.278-.424.562-.354.942-.212.384.14 2.434 1.148 2.85 1.358.414.212.69.318.792.49.1.174.1.998-.296 2.114z" />
            </svg>

            {/* Tooltip */}
            <span
                className="
          absolute right-[72px] top-1/2 -translate-y-1/2
          bg-foreground text-background
          text-sm font-medium
          px-3 py-1.5 rounded-lg
          whitespace-nowrap
          opacity-0 group-hover:opacity-100
          translate-x-2 group-hover:translate-x-0
          transition-all duration-200
          pointer-events-none
          shadow-lg
        "
                aria-hidden="true"
            >
                Chat with us
            </span>
        </a>
    )
}
