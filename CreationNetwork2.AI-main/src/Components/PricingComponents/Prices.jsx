import React from "react";

const Prices = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-around items-center flex-wrap ">
        <div className="md:w-1/4 p-3">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center px-4 md:px-16 text-black">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Pro</h2>
            <div className="text-4xl md:text-6xl font-bold mb-2 md:mb-4">
              $37
            </div>
            <span className="text-sm md:text-base text-gray-500">
              Billed $444 per year
              <br />
              Perfect for startups
            </span>
            <br />
            <br />
            <ul className="text-left mb-4 md:mb-6">
              {/* Add more responsive classes */}
              <li className="mb-1 md:mb-2">
                <span></span>50,000 Word / mo
              </li>
              <li className="mb-2">
                <span></span>20 Projects
              </li>
              <li className="mb-2">
                <span></span>20 AI Tools (+Chat)
              </li>
              <li className="mb-2">
                <span></span>500 Arts / mo
              </li>
              <li className="mb-2">
                <span></span>
                <b>Spokesvideos</b>
              </li>
              <li className="mb-2">
                <span></span>(5 mins / mo)
              </li>
              <li className="mb-2">
                <span></span>10 Videos / mo
              </li>
              <li className="mb-2">
                <span></span>5 SEO Briefs / mo
              </li>
              <li className="mb-2">
                <span></span>No Client Account
              </li>
              <li className="mb-2">
                <span></span>No Teams
              </li>
              <li className="mb-2">
                <span></span>100 Pages
              </li>
              <li className="mb-2">
                <span></span>Transcriptions
              </li>
              <li className="mb-2">
                <span></span>10k characters / mo
              </li>
              <li className="mb-2">
                <span></span>GPT4 Mode (10)
              </li>
              <li className="mb-2">
                <span></span>5 Custom Bots
              </li>
              <li className="mb-2">
                <span></span>ChatBot - 2k questions<br></br>/ month
              </li>
              <li className="mb-2">
                <span></span>VIP Coaching
              </li>
            </ul>
            <button className="bg-transparent hover:bg-purple-700 text-purple-700 font-bold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
              Start 5 Days Trial
            </button>
          </div>
        </div>
        
        <div className="md:w-1/4 p-3">
          <div
            style={{ backgroundColor: "#5f30e2" }}
            className="rounded-lg p-6 shadow-lg text-center text-white px-4 md:px-16"
          >
            <h2 className="text-4xl font-bold mb-4">Booster</h2>
            <div className="text-6xl font-bold mb-4">
              $47
              <sub
                style={{
                  fontSize: "x-large",
                  color: "gray",
                  fontWeight: "lighter",
                }}
              >
                /mo
              </sub>
            </div>
            <span style={{ color: "white" }}>
              Billed $497 per year <br></br>Perfect for small business
            </span>
            <br></br>
            <br></br>
            <ul className="text-left mb-6">
              <li className="mb-2">
                <span></span>Unlimited Words
              </li>
              <li className="mb-2">
                <span></span>Unlimited Projects
              </li>
              <li className="mb-2">
                <span></span>20 AI Tools (+Chat)
              </li>
              <li className="mb-2">
                <span></span>1000 Arts / mo
              </li>
              <li className="mb-2">
                <span></span>
                <b>Spokesvideos</b>
              </li>
              <li className="mb-2">
                <span></span>(10 mins / mo)
              </li>
              <li className="mb-2">
                <span></span>20 Videos / mo
              </li>
              <li className="mb-2">
                <span></span>20 SEO Briefs / mo
              </li>
              <li className="mb-2">
                <span></span>50 Client Accts
              </li>
              <li className="mb-2">
                <span></span>No Teams
              </li>
              <li className="mb-2">
                <span></span>Unlimited Pages
              </li>
              <li className="mb-2">
                <span></span>Transcriptions
              </li>
              <li className="mb-2">
                <span></span>2M characters / mo
              </li>
              <li className="mb-2">
                <span></span>GPT4 Mode (50)
              </li>
              <li className="mb-2">
                <span></span>10 Custom Bots
              </li>
              <li className="mb-2">
                <span></span>ChatBot - 4k questions<br></br>/ month
              </li>
              <li className="mb-2">
                <span></span>VIP Coaching
              </li>
            </ul>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-purple-700 font-bold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
              Start 5 Days Trial
            </button>
          </div>
        </div>
        <div className="md:w-1/4 p-3">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center px-4 md:px-16 text-black">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Pro</h2>
            <div className="text-4xl md:text-6xl font-bold mb-2 md:mb-4">
              $37
            </div>
            <span className="text-sm md:text-base text-gray-500">
              Billed $444 per year
              <br />
              Perfect for startups
            </span>
            <br />
            <br />
            <ul className="text-left mb-4 md:mb-6">
              {/* Add more responsive classes */}
              <li className="mb-1 md:mb-2">
                <span></span>50,000 Word / mo
              </li>
              <li className="mb-2">
                <span></span>20 Projects
              </li>
              <li className="mb-2">
                <span></span>20 AI Tools (+Chat)
              </li>
              <li className="mb-2">
                <span></span>500 Arts / mo
              </li>
              <li className="mb-2">
                <span></span>
                <b>Spokesvideos</b>
              </li>
              <li className="mb-2">
                <span></span>(5 mins / mo)
              </li>
              <li className="mb-2">
                <span></span>10 Videos / mo
              </li>
              <li className="mb-2">
                <span></span>5 SEO Briefs / mo
              </li>
              <li className="mb-2">
                <span></span>No Client Account
              </li>
              <li className="mb-2">
                <span></span>No Teams
              </li>
              <li className="mb-2">
                <span></span>100 Pages
              </li>
              <li className="mb-2">
                <span></span>Transcriptions
              </li>
              <li className="mb-2">
                <span></span>10k characters / mo
              </li>
              <li className="mb-2">
                <span></span>GPT4 Mode (10)
              </li>
              <li className="mb-2">
                <span></span>5 Custom Bots
              </li>
              <li className="mb-2">
                <span></span>ChatBot - 2k questions<br></br>/ month
              </li>
              <li className="mb-2">
                <span></span>VIP Coaching
              </li>
            </ul>
            <button className="bg-transparent hover:bg-purple-700 text-purple-700 font-bold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
              Start 5 Days Trial
            </button>
          </div>
        </div>
          
      </div>
      <div
        style={{ marginTop: "6rem", color: "#c3bde2" }}
        className="mb-20 text-center"
      >
        <h4 className="text-xl md:text-2xl">Enterprise - Need more quota?</h4>
        <p className="text-sm md:text-base">
          Talk to our team and we'll set up something to fit your needs and
          budget.
        </p>
      </div>
    </>
  );
};

export default Prices;
