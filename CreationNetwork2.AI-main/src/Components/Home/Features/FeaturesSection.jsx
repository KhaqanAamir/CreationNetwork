import FeaturesSectionEven from "./FeaturesSectionEven";
import FeaturesSectionOdd from "./FeaturesSectionOdd";

const Features = () => {
  return (
    <>
      <section className="bg-[url('Assets/Images/Home/Feature_Section_Bg.png')] bg-repeat-y bg-cover pb-28">
        <div className="text-center flex flex-col uppercase lg:py-40 py-20 px-0">
          <span className="flex-1 text-2xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#be40ff] to-[#6835f0] font-extrabold">
            What MarketingBlocks AI Assisstant
          </span>
          <span className="text-2xl lg:text-4xl pt-2 text-light font-extrabold">
            can create for you in seconds
          </span>
        </div>

        {/* Section 1 */}
        <FeaturesSectionOdd
          title="AI Page Builder"
          description="AI Creates Full Landing Pages And Websites From Just A Keyword or URL"
          details="AI creates the layout, writes the copy, searches for relevant media, and combines everything to create high-converting landing pages for more leads & sales.Comes with a drag-n-drop page builder so you can edit everything in a few clicks."
          link1="/tools/transcriber"
          link2="#"
        />
        {/* Section 1 */}

        {/* Section 2 */}
        <FeaturesSectionEven
          title="AI Video Creator"
          description="Create Promo Videos From Just A Keyword Using AI."
          details="AI will create professional videos to engage your audience and turn them into high-paying customers. AI writes the script for you, searches for relevant media, and combines everything to create professional videos to promote your business."
          link1="#"
          link2="#"
        />
        {/* Section 2 */}

        {/* Section 3 */}
        <FeaturesSectionOdd
          title="AI Designer"
          description="AI Creates High Converting Banner Designs In Minutes."
          details="AI creates designs stunning, conversion-friendly banners and ads with original content written specifically for your business.AI writes the script for you, searches for relevant media, and combines everything to BULK create gorgeous designs that drive traffic, leads, and sales."
          link1="#"
          link2="#"
        />
        {/* Section 3 */}

        {/* Section 4 */}
        <FeaturesSectionEven
          title="AI Spokesvideo"
          description="Turn Any Text Script Into A SpokesVideo Using AI"
          details="Transform text into engaging AI videos featuring real humans or avatars with just a few clicks.Simply select an avatar or let our AI generate one for you, input your script or let our AI generate it for you, and turn your script into a polished spokesperson video."
          link1="#"
          link2="#"
        />
        {/* Section 4 */}

        {/* Section 5 */}
        <FeaturesSectionOdd
          title="AI Brand Kit"
          description=""
          details="AI will create anything & everything you need to define your brand identity - professional logo, business cards, mission & vision statements, slogan, taglines, value proposition, and many more in less than 60 seconds"
          link1="#"
          link2="#"
        />
        {/* Section 5 */}

        {/* Section 6 */}
        <FeaturesSectionEven
          title="AI Writer"
          description="AI Writer Writes Full Blog, Books, Business Plans, VSL Scripts, Courses & More In Minutes."
          details="Generate just the content you need without brainstorming, writing, or even editing. Find the angle that suits you the best & even re-write the same content in unimaginable ways.Generate just the content you need without brainstorming, writing or even editing.Comes with a powerful content editor to make content creation a breeze.Turn 2 Words Into 1,200 Words Blog Post In 2 Mins"
          link1="#"
          link2="#"
        />
        {/* Section 6 */}

        {/* Section 7 */}
        <FeaturesSectionOdd
          title="AI Voices & Voice Clone"
          description="AI Writes Voiceover Scripts & Generates Human-Like Voiceovers With Emotions."
          details="AI writes a powerful script and turns it into audio using one of our human-like voiceovers to help sell your business. Choose from a wide section high-quality male and female AI voices.Most natural human voices for every type of content - sales videos, explainer videos, ads, demo videos, vlogs, social media, training videos, video commercials, and many more."
          link1="#"
          link2="#"
        />
        {/* Section 7 */}

        {/* Section 8 */}
        <FeaturesSectionEven
          title="AI Transcriber & Voice Changer"
          description="Turn Any Audio Into Text... Edit, Rewrite Or Summarize Using AI"
          details="Say goodbye to the hours of manual transcription... Let AI handle your transcription for anytype of audio in any language.Need a summary? Our advanced AI can even generate important bullet points for you in a click."
          link1="#"
          link2="#"
        />
        {/* Section 8 */}

        {/* Section 9 */}
        <FeaturesSectionOdd
          title="Text To Art"
          description=""
          details="Turn Any Text Into Compelling Images & Arts In Seconds Using AI. Instantly generate photorealistic arts you can use in your business or sell to clients.Generate in seconds & use them to grab attention & drive more traffic & engagement"
          link1="#"
          link2="#"
        />
        {/* Section 9 */}

        {/* Section 10 */}
        <FeaturesSectionEven
          title="AI Content Briefs"
          description="Let AI help you outline & write the perfect article that will rank on search engines & bring you FREE traffic."
          details="Use the top results for any target search query to curate SEO-optimized briefs in minutes.
          Pull in any related forum questions from Reddit, Quora, and People Also Asked boxes and use AI to generate additional questions your readers may have."
          link1="#"
          link2="#"
        />
        {/* Section 10 */}

        {/* Section 11 */}
        <FeaturesSectionOdd
          title="Image Eraser"
          description=""
          details="AI Erases any unwanted object, defect, people, watermark or text from your pictures in seconds. Just upload any image, use the brush to paint any object you want remove and boom AI cleans it in 1 click."
          link1="#"
          link2="#"
        />
        {/* Section 11 */}

        {/* Section 12 */}
        <FeaturesSectionEven
          title="AI Chat"
          description=""
          details="All-in-one AI Marketing Assistant... 10x Better than ChatGPTWith ChatBlocks, you'll have an up-to-date virtual assistant at your fingertips, ready to help you with  your marketing needs."
          link1="#"
          link2="#"
        />
        {/* Section 12 */}

        {/* Section 13 */}
        <FeaturesSectionOdd
          title="Custom ChatBots"
          description="Create your own custom chatbot trained with with your own business data."
          details="Get instant answers for you, your customers, or your team with AI powered chatbots trained with your own content and documentation. Use as embedable widgets, direct link, or as a popup.
          Perfect for customer service, automated question answering, knowledge management, coaching, and employee training. It's like building your own ChatGPT with your business data or your client's."
          link1="#"
          link2="#"
        />
        {/* Section 13 */}
      </section>
    </>
  );
};

export default Features;
