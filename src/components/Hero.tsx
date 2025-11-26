import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
          alt="Fashion Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6 backdrop-blur-sm border border-primary/30">
          New Season Arrivals
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Discover Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
            Unique Style
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Explore our latest collection of premium products designed to elevate your lifestyle. Quality meets affordability.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary rounded-full hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-primary/30"
          >
            Shop Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur-sm transition-all"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
