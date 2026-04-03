import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
    const [isActive, setIsActive] = useState("home")
    const [menuOpen, setMenuOpen] = useState(false)

    const navLinks = [
        { name: "home", label: "Home" },
        { name: "about", label: "About" },
        { name: "skills", label: "Skills" },
        { name: "projects", label: "Projects" },
        { name: "contact", label: "Contact" },
    ]

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0a0f14]/80 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

                <h1 className="text-xl font-semibold tracking-wide">
                    MR<span className="text-cyan-400">.DEVELOPER</span>
                </h1>

                <div className="hidden md:flex gap-8 text-gray-300">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={`#${link.name}`}
                            onClick={() => setIsActive(link.name)}
                            className={`text-lg transition ${isActive === link.name
                                ? "text-cyan-400"
                                : "hover:text-cyan-400"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

            </div>

            {menuOpen && (
                <div className="md:hidden bg-[#0a0f14] border-t border-gray-800 px-6 py-4 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={`#${link.name}`}
                            onClick={() => {
                                setIsActive(link.name)
                                setMenuOpen(false)
                            }}
                            className={`block text-lg ${isActive === link.name
                                ? "text-cyan-400"
                                : "text-gray-300"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar