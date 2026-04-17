export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/30">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-white">
        
        <div className="font-bold text-lg">
          Gradorra
        </div>

        <nav className="hidden md:flex gap-6">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Rewards</a>
          <a href="#">Eligibility</a>
        </nav>

        <button className="bg-gold text-black px-4 py-2 rounded-lg font-semibold">
          Register
        </button>
      </div>
    </header>
  );
}