export default function CallToActionSection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
        {/* ================= TITLE ================= */}
        <h2 className="text-4xl  text-white">
          FINAL CALL TO ACTION
        </h2>

        {/* ================= SUBTITLE ================= */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Stop Leaving Revenue on the Concrete Floor.
          <br />
          Every 50mm is a decision between a "dead zone" and a profitable asset.
          Join the developers who are using Parking Monster to out-design the
          competition and secure faster approvals with 100% confidence.
        </p>

        {/* ================= BUTTONS ================= */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          <a
            href="#book-demo"
            className="px-8 py-4 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition"
          >
            BOOK YOUR LIVE DEMO
          </a>
          <a
            href="#start-trial"
            className="px-8 py-4 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition"
          >
            START A FREE TRIAL
          </a>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <p className="text-gray-400 mt-6 text-lg md:text-xl max-w-3xl mx-auto">
          Upload your DXF/DWG and see the Monster in action.
        </p>
      </div>
    </section>
  );
}
