import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16 lg:py-20">
        {/* Top Section: Logo & Brand */}
        <div className="flex flex-col items-center text-center mb-12">
          <Link href="/" className="inline-block mb-4">
            <Image 
              src="/logos/trace-logo.svg" 
              alt="Trace" 
              width={200} 
              height={62}
              className="h-14 sm:h-16 w-auto"
            />
          </Link>
          <p className="text-muted-foreground max-w-sm text-sm sm:text-base">
            Professional network debugging for iOS
          </p>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="font-semibold text-sm">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground text-center md:text-left">
              <li>
                <Link href="/features" className="hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/architecture" className="hover:text-foreground transition-colors">
                  Architecture
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="font-semibold text-sm">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground text-center md:text-left">
              <li>
                <Link href="/docs" className="hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/open-source" className="hover:text-foreground transition-colors">
                  Open Source
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="font-semibold text-sm">Community</h3>
            <ul className="space-y-2 text-sm text-muted-foreground text-center md:text-left">
              <li>
                <Link
                  href="https://github.com/6639835/Trace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="font-semibold text-sm">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground text-center md:text-left">
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/open-source" className="hover:text-foreground transition-colors">
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-12" />
        
        {/* Bottom Section: Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Trace. All rights reserved.</p>
          <p>Built for iOS developers.</p>
        </div>
      </div>
    </footer>
  );
}
