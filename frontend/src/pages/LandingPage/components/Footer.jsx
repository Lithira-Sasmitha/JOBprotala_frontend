import { Briefcase } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-white text-gray-900 overflow-hidden border-t border-gray-200">
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-10">

            {/* Logo + Brand */}
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-800 tracking-tight">
                  JobPortal
                </h3>
              </div>
              <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
                Connecting talented professionals with innovative companies worldwide. Your career success is our mission.
              </p>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-500 space-y-1">
              <p>© {new Date().getFullYear()} Time To Program.</p>
              <p>
                Made with ❤️ by <span className="font-medium text-gray-700">Lithira Sasmitha</span>
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Glowing Effect (decorative) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300 opacity-20 blur-3xl rounded-full -z-10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-300 opacity-20 blur-3xl rounded-full -z-10 translate-x-1/2 translate-y-1/2" />
    </footer>
  );
};

export default Footer;
