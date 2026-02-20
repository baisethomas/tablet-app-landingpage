import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#F7F8FA] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-[#1F1F23]/50">
        <div className="mb-4 md:mb-0">
          {"\u00A9"} 2026 Tablet Notes
        </div>
        <div className="flex gap-6">
          <Link
            href="/privacy"
            className="hover:text-[#1F1F23] transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
