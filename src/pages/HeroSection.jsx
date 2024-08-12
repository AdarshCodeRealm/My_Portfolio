import Navbar from "../components/Navbar"
import bgImage from "../assets/bg.webp"

function heroSection() {
  return (
    <div
      id="heroSection"
      className=" w-screen  sm:h-screen flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />\
      <div className="flex flex-row mt-20">
        <div className="h-screen w-1 border-r-[#5618D6] border-r-[1.5px] ml-4 sm:ml-12 md:ml-80" />

        <div
          id="work"
          className="flex flex-col text-4xl md:text-5xl font-font13 px-6 "
        >
          <div>
            <div className="flex flex-row pb-12 items-center gap-3 -mt-4 -ml-[30.5px]">
              <div className="bg-[#5618D6]  h-3 w-3 rounded-full" />
              <h6 className="text-[#988E8B]   font-font1   text-xl  ">
                Start/&gt;
              </h6>
            </div>
            <h2 className="font-semibold  text-white">
              Hi, my name is
              <span className="text-[#5918DF]"> Adarsh Ramgirwar</span>
            </h2>
            <h2 className="font-semibold  mt-6 text-white">
              i <span className="font-custom17 font-medium">build</span> and
              develop webApps
            </h2>
            <h6 className="text-[#988E8B]  font-semibold pt-16 text-xl ">
              Let me show You...
            </h6>
            <button className="cursor-pointer mt-5 mb-10 text-lg flex justify-between bg-gray-800 px-4 items-center py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]">
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-wrap sm:absolute sm:bottom-10   items-center overflow-auto w-full  ">
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/plasticine/100/react.png"
              alt="react"
            />
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/color/96/mongo-db.png"
              alt="mongo-db"
            />
            <img
              width="60"
              height="60"
              className="bg-white rounded-full p-2 overflow-visible"
              src="https://img.icons8.com/ios/500/express-js.png"
              alt="express-js"
            />
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/fluency/100/node-js.png"
              alt="node-js"
            />
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/fluency/100/c-plus-plus-logo.png"
              alt="c-plus-plus-logo"
            />
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/color/100/javascript--v1.png"
              alt="javascript--v1"
            />
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/color/96/python--v1.png"
              alt="python--v1"
            />
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/color/100/google-firebase-console.png"
              alt="google-firebase-console"
            />
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/color/100/tailwind_css.png"
              alt="tailwind_css"
            />
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/fluency/100/css3.png"
              alt="css3"
            />
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/color/100/html-5--v1.png"
              alt="html-5--v1"
            />
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/color/100/git.png"
              alt="git"
            />
            <img
              width="60"
              height="60"
              className="bg-white rounded-full"
              src="https://img.icons8.com/glyph-neue/100/000000/github.png"
              alt="github"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default heroSection
