export const HeroSection = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto p-[10px] pt-[10px] pb-[30px]">
        <div className=" flex items-center justify-center text-center  p-[10px] ">
          <div className="">
            <img
              className="w-[240px] mx-auto mb-5"
              src="images\image.webp"
              alt="Illustration"
            />
            <h1 className="text-5xl font-semibold home-text">
              <span className="linear-text text-5xl  ">
                I'm Atta Ur Rehman,{" "}
              </span>
              frontend <br />
              developer based in Pakistan
            </h1>
            <p className="w-[60%] mx-auto mt-4 home-desc">
              I’m a frontend developer from Pakistan, turning ideas into
              engaging digital experiences with passion and creativity
            </p>
            <button className="py-2  px-6  text-50 bg-gradient-to-r mr-2 mt-4 border-2 border-transparent from-[#285e8b] to-[#05a2ca] text-white rounded-3xl transition-all duration-300">
              Contact me
            </button>

            <a
              href="https://drive.google.com/file/d/1NPqL594c5vN6tQq7TnmHPI5qdMk_B2Sg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="py-2 px-6 text-50 bg-transparent border-2 border-white hover:bg-gradient-to-r  hover:from-[#285e8b] hover:to-[#05a2ca] hover:border-transparent rounded-3xl  text-white transition-all duration-300 ">
                My Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
