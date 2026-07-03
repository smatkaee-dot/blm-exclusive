export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-neutral-800">
        <h1 className="text-2xl font-bold tracking-widest">
          BLM EXCLUSIVE
        </h1>

        <div className="space-x-8 hidden md:flex">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Bookings</a>
          <a href="#">Gallery</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col justify-center items-center text-center px-6 py-32">

        <h2 className="text-6xl font-extrabold mb-6">
          🔥 THIS IS MY TEST PAGE 🔥
        </h2>

        <p className="max-w-2xl text-neutral-400 text-lg leading-8">
          Premium grooming.
          Seamless online booking.
          Built for clients who expect more than just a haircut.
        </p>

        <button
          className="mt-12 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
        >
          Book Appointment
        </button>

      </section>

      {/* Founder */}

      <section className="py-24 text-center border-t border-neutral-900">

        <h3 className="text-3xl font-bold">
          Founded by Ashaley
        </h3>

        <p className="mt-6 text-neutral-500 max-w-xl mx-auto">
          BLM Exclusive is built around quality,
          professionalism,
          simplicity,
          and luxury.
        </p>

      </section>

    </main>
  )
}