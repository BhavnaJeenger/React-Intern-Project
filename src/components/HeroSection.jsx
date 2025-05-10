import React from "react";
// import bannerImage from "../assets/images/banner-img.png";
import { Link, useNavigate } from "react-router-dom";
import market from "../assets/images/market1.png";
import resource from "../assets/images/resource1.png";
import Economy from "../assets/images/Eco1.png";
import Economymainlogo from "../assets/images/Economyimage.jpg";
import Recyclingtoday from "../assets/images/re.png";
import Markeyinsider from "../assets/images/ma.jpg";
import RecyclePNews from "../assets/images/repr.jpeg";
import Wastetoday from "../assets/images/waste.jpg";
import ResourceRecycling from "../assets/images/rerecycle.jpg"

const features = [
  {
    logo: Economymainlogo,
    source: "The Economist",
    title:
      "A Chinese ban on rubbish imports is shaking up the global junk trade",
    desc: "China used to import a significant portion of the world’s scrap. Suddenly, revenues from selling mixed waste to China which…",
    href: "https://www.economist.com/special-report/2018/09/27/a-chinese-ban-on-rubbish-imports-is-shaking-up-the-global-junk-trade",
    image: Economy,
  },
  {
    logo: Recyclingtoday,
    source: "Recycling Today",
    title: "Polytrend establishes online trading network for recycled plastics",
    desc: "A Silicon Valley startup says it has taken on the challenge of opening up the plastic scrap trading industry...",
    href: "https://www.recyclingtoday.com/news/scrapo-launches-online-plastic-scrap-trading-network/",
  },
  {
    logo: Markeyinsider,
    source: "Markets Insider",
    title:
      "The Silicon Valley startup Polytrend is helping preserve the environment...",
    desc: "Polytrend, Inc., a Silicon Valley startup, believes that if we are able to simply bridge this gap between the plastic scrap buyers and sellers, it would have…",
    href: "https://markets.businessinsider.com/news/stocks/the-silicon-valley-startup-scrapo-is-helping-preserve-the-environment-by-facilitating-recyclables-trading-1008928003",
    image: market,
  },
  {
    logo: ResourceRecycling,
    source: "Resource Recycling",
    title: "Platform provides insight into post-China markets",
    desc: "Polytrend, a Sunnyvale, Calif. technology company, came online in November 2017, pledging to help reduce disposal of plastics by bridging the gap between buyers…",
    href: "https://resource-recycling.com/plastics/2018/09/26/platform-provides-insight-into-post-china-markets/",
    image: resource,
  },
  {
    logo: Wastetoday,
    source: "Waste Today",
    title: "With the ScrapoSure option, the Scrapo team visits sellers’ sites, verifies their IDs…",
    desc: "One of the factors that can undermine market efficiency and create barriers to trade is the lack of trust between buyers and sellers, according to Scrapo…",
    href: "https://www.wastetodaymagazine.com/news/scrapo-launches-online-plastic-scrap-trading-network/",
  },
  {
    logo: RecyclePNews,
    source: "Recycling Product News",
    title: "New app designed to facilitate plastics recyclables trading",
    desc: "According to Scrapo, Inc., a Silicon Valley startup, one of the most important problems that surrounds the world environment today is…",
    href: "https://www.recyclingproductnews.com/article/26996/new-app-designed-to-facilitate-plastics-recyclables-trading",
  },
];


const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#0a1f44] text-white py-8 md:py-12 lg:py-10 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar */}
        <nav className="flex justify-between items-center pb-8">
          <div className="text-2xl font-bold">Polytrend</div>
          <Link
            to="/login"
            className="border-2 border-white px-4 py-2 rounded-md transition hover:bg-white hover:text-[#0a1f44] text-sm sm:text-base hidden sm:block"
          >
            Log In
          </Link>
        </nav>

        {/* Hero section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
              Plastic Recycling <br />
              Marketplace
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
              Connect and trade directly with suppliers{" "}
              <br className="hidden sm:block" /> & buyers of recyclable plastics
            </p>

            {/* Desktop Button */}

            <Link
              to="/signup"
              className="hidden lg:inline-block bg-white text-[#0b163d] px-6 py-3 font-semibold rounded-md transition hover:bg-blue-200 text-sm sm:text-base"
            >
              Join Polytrend
            </Link>

            {/* Mobile/Tablet Button */}
            <button
              onClick={() => navigate("/signup")}
              className="inline-block lg:hidden bg-white 
            text-[#0b163d] px-6 py-3 font-semibold rounded-md transition hover:bg-blue-200 text-sm sm:text-base"
            >
              Download Polytrend App
            </button>
          </div>

          {/* Hero Image */}
          {/* <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={bannerImage}
              alt="Recyclable Graphic"
              className="object-contain max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
            />
          </div> */}
          {/* Features Scroll Section (instead of Hero Image) */}
          <div className="w-full lg:w-2/3 max-h-[420px] overflow-y-auto scrollbar-hidden pr-2  grid grid-cols-1 md:grid-cols-2 gap-2">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-white text-[#0a1f44] p-4 rounded-lg shadow-md"
              >
                <div className="flex items-center gap-3 mb-2 border-b border-gray-300 pb-1">
                  <div
                    className="flex-shrink-0"
                    style={{
                      backgroundImage: `url(${item.logo})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <p className="text-sm font-medium">{item.source}</p>
                </div>

                <div className="flex items-start gap-2">
                  {item.image && (
                    <img
                      src={item.image}
                      alt="Article"
                      className="w-16 h-12 object-cover rounded-md"
                    />
                  )}
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-blue-600">{item.desc}</p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0a1f44] font-semibold text-xs inline-flex items-center mt-1 group"
                    >
                      Read more{" "}
                      <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                        ➜
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
