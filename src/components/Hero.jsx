function Hero() {
  return (

    <section className="min-h-screen">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 xl:px-24 pt-52">

        <div className="grid lg:grid-cols-[42%_58%] items-center gap-24">

          {/* LEFT */}

          <div>

            <h1 className="text-7xl lg:text-[110px] leading-[0.9] text-[#6F2525]">

              Beauty,

              <br />

              Curated.

            </h1>

            <p className="mt-12 max-w-md text-lg leading-9 text-[#615955]">

              Discover cosmetics, skincare,
              jewellery, hair accessories and
              salon essentials — thoughtfully
              brought together under one roof
              in Nanded.

            </p>

            <div className="mt-20 flex items-center gap-4">

              <span className="text-3xl">

                ↓

              </span>

              <p className="uppercase tracking-[0.35em] text-sm">

                Scroll to Discover

              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div className="h-[520px] rounded-[42px] bg-[#EFE6DB] flex items-center justify-center">

            <p className="uppercase tracking-[0.4em] text-[#8A817B]">

              Product Collage

            </p>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Hero;