export default function HeroSection() {
  return (
    <section className="bg-dark text-white min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-white">
              उत्तर प्रदेश का सबसे बड़ा
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-gold bg-clip-text text-transparent">
              डिजिटल मेधा चयन महा-अभियान
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-300">
            20,00,000+ Students | 30,000+ Rewards
          </p>

          <button className="mt-6 bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
            Register Now
          </button>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center">
          <div className="w-64 h-64 rounded-full bg-gold/30 blur-3xl absolute"></div>

          <img
            src="/images/student.png"
            alt="student"
            className="relative z-10 w-64"
          />
        </div>

      </div>
    </section>
  );
}