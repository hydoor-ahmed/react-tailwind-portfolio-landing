import heroImg from "../assets/dev-ed-wave.png";

const Hero = () => {
  return (
    <div className="text-center p-4 sm:p-9 text-black dark:text-white heroHeight">
      <h1 className="text-3xl text-teal-600 mt-6 md:mt-0">Dimitri Marco</h1>

      <h2 className="py-6 md:py-4">Developer and designer.</h2>

      <p className="text-gray-800 dark:text-white py-4 max-w-[550px] mx-auto">
        Freelancer providing services for programming and design content needs.
        Join me down below and let's get cracking!
      </p>

      <div className="text-center text-4xl py-6 md:py-4 text-gray-600 dark:text-gray-400">
        <i className="bx bxl-twitter mr-10 sm:mr-14"></i>
        <i className="bx bxl-linkedin-square mr-10 sm:mr-14"></i>
        <i className="bx bxl-youtube"></i>
      </div>

      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 md:w-80 md:h-80 overflow-hidden mt-6 md:mt-4">
        <img
          className="object-cover h-64 md:h-80"
          src={heroImg}
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default Hero;
