import Navbar from "../components/Navbars/AuthNavbar.jsx";
import Footer from "../components/Footers/Footer.jsx";
import team from '../assets/images/team.svg';
import ArticleSlider from "../components/Sliders/ArticleSlider.jsx";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        {/* Hero Section */}
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('/images/hero.webp')",
              backgroundColor: '#135330', // Dark green fallback
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-emerald-900"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-left">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Your story starts with us
                  </h1>
                  <p className="mt-4 text-lg text-slate-200">
                    SustainaShare helps businesses redistribute high-quality surplus to
                    people in need. Help neighbors, improve profitability, show
                    compliance, and reduce emissions all within one platform.
                  </p>
                  <a
                    href="/register/donor"
                    className="mt-8 inline-block text-white font-bold px-6 py-4 rounded-md outline-none focus:outline-none mr-1 mb-1 bg-orange-500 active:bg-orange-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Let's Connect
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-slate-100 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        {/* Features Section */}
        <section className="pb-20 bg-slate-100 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-leaf"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Waste Management</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Throwing stuff into landfills is expensive and wasteful. We've got a solution to help you stop.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-utensils"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Food Security</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      With your help, we ensure that vulnerable populations have access to basic necessities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-sky-400">
                      <i className="fas fa-users"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Community Development</h6>
                    <p className="mt-2 mb-4 text-slate-500">
                      Your support stands out by enabling unique community development initiatives and programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Section */}
        <section className="py-20 bg-slate-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-5/12 px-4">
                <div className="text-emerald-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-rocket text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  We've made donations our business, so you can focus on yours.
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                  If donating is good for the planet, your community, and your bottom line, why isn't every business doing it? Because doing it by yourself can be hard. SustainaShare is here to make it easy, scalable, worthy of celebration, and financially beneficial.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-slate-600">
                  You'll always get flexible delivery options, a home for your surplus, and a receipt for tax documentation. But if you're looking for more features, a fully-fledged SustainaShare subscription may be just what you need.
                </p>
                <a href="/" className="font-bold text-orange-500 mt-8">
                  Check SustainaShare for businesses
                </a>
              </div>

              <div className="w-full md:w-4/12 px-4 ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-emerald-800">
                  <img
                    alt="..."
                    src={team}
                    className="w-full align-middle rounded-t-lg bg-emerald-50"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-[95px] -top-[94px]"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-emerald-800 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      SustainaShare is the leading technology-enabled surplus recovery service, empowering businesses to easily distribute their surplus. National brands across Kenya work with SustainaShare to reduce food insecurity in the communities where they operate, help reduce their greenhouse gas emissions, and boost their profitability.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact and Articles Section */}
        <section className="pb-20 relative block bg-emerald-900 text-slate-300">
          <div className="container mx-auto px-4 lg:pt-24 lg:pb-24">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Latest Updates
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 ">
                  Learn about how Sustainashare is empowering communities to create a future that is secure, just and free from poverty.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <ArticleSlider />
            </div>
          </div>
        </section>

        <section className="relative block py-24 lg:pt-0 bg-emerald-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold text-slate-700">
                      Want to talk to us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-slate-500">
                      Complete this form and we will get back to you in 24 hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-emerald-800 text-white active:bg-emerald-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
