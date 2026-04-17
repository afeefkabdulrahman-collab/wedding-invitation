import { useEffect, useState, useMemo } from "react";

export default function WeddingInvitation() {
  const weddingDate = new Date("2026-06-21T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const diff = weddingDate - now;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Google Calendar
  const calendarUrl = useMemo(() => {
    const start = "20260621T180000Z";
    const end = "20260621T230000Z";
    const title = encodeURIComponent("Wedding Ceremony - Afeef & Nada");
    const location = encodeURIComponent("J & R Convention Center");

    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&location=${location}`;
  }, []);

  // FIXED MAP LINK (best practice)
  const mapUrl =
    "https://www.google.com/maps/dir/?api=1&destination=J+%26+R+Convention+Center+Dubai";

  // WhatsApp
  const whatsappUrl =
    "https://wa.me/971000000000?text=Please%20remind%20me%20about%20the%20wedding%20of%20Afeef%20%26%20Nada";

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden font-sans">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100" />

      {/* Floating particles */}
      <style>{`
        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: rgba(255,255,255,0.8);
          border-radius: 50%;
          animation: float 10s linear infinite;
        }

        @keyframes float {
          0% { transform: translateY(100vh); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-10vh); opacity: 0; }
        }
      `}</style>

      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        />
      ))}

      {/* Card */}
      <div className="relative z-10 w-full max-w-xl bg-white/70 backdrop-blur-xl border border-green-100 rounded-3xl shadow-xl p-6 text-center">

        {/* Arabic */}
        <div className="text-xs tracking-[0.3em] text-green-600 mb-4">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْم
        </div>

        <h1 className="text-3xl font-light text-green-800">
          Wedding Invitation
        </h1>

        <p className="mt-2 text-sm text-green-600 italic">
          A romantic journey of two hearts becoming one
        </p>

        {/* Names */}
        <h2 className="mt-8 text-xl font-medium text-green-900">
          Afeef K Abdul Rahman
        </h2>

        <div className="text-green-400 my-1">&</div>

        <h2 className="text-xl font-medium text-green-900">
          Nada Nesrin
        </h2>

        {/* Countdown */}
        <div className="mt-8 grid grid-cols-4 gap-2 text-center">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
            <div key={label} className="bg-green-50 rounded-xl py-3 border border-green-100">
              <p className="text-lg font-light text-green-900">
                {Object.values(timeLeft)[i]}
              </p>
              <p className="text-[10px] text-green-600">{label}</p>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="mt-8 text-sm text-green-700 space-y-1">
          <p>📍 J & R Convention Center</p>
          <p>📅 June 21, 2026</p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full border border-green-200 text-green-700 hover:bg-green-50"
          >
            📍 View Location
          </a>

          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-green-600 text-white hover:bg-green-700"
          >
            📅 Mark Calendar
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-600"
          >
            💬 WhatsApp
          </a>

        </div>

        <p className="mt-8 text-xs text-green-600">
          With love, Family & Friends 💚
        </p>

      </div>
    </div>
  );
}