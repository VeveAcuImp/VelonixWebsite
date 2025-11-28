import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center mb-4 group">
              <Image
                src="/logo.png"
                alt="Velonix AI"
                width={180}
                height={54}
                className="h-12 w-auto transition-opacity group-hover:opacity-90"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Your trusted partner for flexible and reliable AI compute power across Southeast Asia and Middle East.
              Providing AI infrastructure rental, maintenance, and support services in rapidly growing markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-tech-cyan transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-tech-cyan transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-gray-400 hover:text-tech-cyan transition-colors text-sm"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-gray-400 hover:text-tech-cyan transition-colors text-sm"
                >
                  News & Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/rental"
                  className="text-gray-400 hover:text-tech-cyan transition-colors text-sm"
                >
                  Server Rental
                </Link>
              </li>
              <li>
                <Link
                  href="/services/repair"
                  className="text-gray-400 hover:text-tech-cyan transition-colors text-sm"
                >
                  Server Repair
                </Link>
              </li>
              <li>
                <Link
                  href="/services/maintenance"
                  className="text-gray-400 hover:text-tech-cyan transition-colors text-sm"
                >
                  Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/parts"
                  className="text-gray-400 hover:text-tech-cyan transition-colors text-sm"
                >
                  Parts Supply
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-tech-blue mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Jalan Kuchai Maju 8, Off,<br />
                  Jalan Kuchai Lama,<br />
                  58200 Kuala Lumpur,<br />
                  Wilayah Persekutuan Kuala Lumpur
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-tech-blue flex-shrink-0" />
                <a
                  href="tel:+601110573298"
                  className="text-gray-400 hover:text-tech-cyan transition-colors text-sm"
                >
                  +60 11-1057 3298
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-tech-blue flex-shrink-0" />
                <a
                  href="mailto:info@velonix.com"
                  className="text-gray-400 hover:text-tech-cyan transition-colors text-sm"
                >
                  info@velonix.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Velonix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

