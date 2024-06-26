import Facts from "./Facts";

export default function Hero() {
  return (
    <div id="hero" className="hero-section">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        </div>
        <div className="mx-auto max-w-2xl py-20 sm:py-8 z-10 lg:py-20">
          <div className="text-center">
            <h1 className=" text-gradient text-4xl font-bold tracking-tight lg:text-white sm:text-6xl bg-white">
              Adorn yourself with elegance
            </h1>
            <p className="mt-6 text-lg leading-5 text-gray-500">
            Discover timeless treasures that speak of beauty and grace
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#designs"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="https://chat.whatsapp.com/EOvRGZfMGf90F4ZRImxlqe" className="text-sm font-semibold leading-6 text-gray-100">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <Facts />
  

      </div>
  );
}
