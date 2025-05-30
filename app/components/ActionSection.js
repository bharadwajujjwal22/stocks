import Image from 'next/image';

export default function ActionSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Ready to Start investing smarter
        </h2>
        <p className="text-gray-600 mb-6">
            Join thousands of Investors Using StockTracker Pro
        </p>
        <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-all">
            Create a free account
        </button>
      </div>
    </section>
  );
}
