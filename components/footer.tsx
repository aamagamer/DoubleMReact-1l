import { Mail, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">DM</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Double M Electric</h3>
                <p className="text-sm text-slate-400">Facilities Maintenance</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Professional facilities maintenance and management services for the Dallas-Fort Worth area.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Electrical & Lighting</li>
              <li>HVAC & Plumbing</li>
              <li>Emergency Response</li>
              <li>Preventative Maintenance</li>
              <li>Project Management</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:omarmoralez260@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                omarmoralez260@gmail.com
              </a>
              <a
                href="https://wa.me/14699561247"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                +1 (469) 956-1247
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400">
            &copy; 2025 Double M Electric - Maintenance & Construction Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
