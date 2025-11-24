import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            label: "LinkedIn",
            href: "https://linkedin.com",
            icon: Linkedin
        },
        {
            label: "GitHub",
            href: "https://github.com",
            icon: Github
        },
        {
            label: "Email",
            href: "mailto:hello@example.com",
            icon: Mail
        },
    ];

    return (
        <footer className="border-t border-border mt-section py-12">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* 版權資訊 */}
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Kent Portfolio. All rights reserved.
                    </p>

                    {/* 社群連結 */}
                    <div className="flex items-center gap-6">
                        {socialLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                                    aria-label={link.label}
                                >
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
