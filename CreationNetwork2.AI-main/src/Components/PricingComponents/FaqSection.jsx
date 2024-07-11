import React from "react";
import FAQItem from "./FAQItem";
import '../../Styles/Pages/Pricing/FAQItem.css'

const FaqSection = () => {
  return (
    <section className="bg-black text-white py-16 md:py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">Frequently Asked Questions</h1>
        <div className="faq-container">
          <FAQItem
            question="What are the credits? How are they calculated?"
            answer="1 credit equals 1 word. With 50,000 words you generate up to 100 SEO optimize blog post, 60 long-form articles, 5 ebooks, 5,000 blog ideas, 2,000 ads, etc"
          />
          <FAQItem
            question="What can I create with Marketing Blocks?"
            answer="AI Marketing Assistant Creates All Your Marketing Assets In Minutes. Copy, Landing Pages, Graphics, Videos, Voiceovers, Emails, Logo, Business Cards, Ideas, Blog Post, Ads & Many More."
          />
          <FAQItem
            question="How Do I Get Support?"
            answer="Simply write us an email support@marketingblocks.ai or chat with us and have your queries answered within no time.  ."
          />
          <FAQItem
            question="What If I Change My Mind?"
            answer="If you have a change of heart, rest assured that you can always cancel or downgrade your plan at any point without any hassle. We regret to inform you that we are unable to offer refunds for cancellations. Take advantage of our FREE trial to evaluate whether MarketingBlocks aligns with your business needs. If you choose to continue using our services beyond the trial period, you will be automatically enrolled in the plan you selected during sign-up. If you have any concerns or questions about your account, please do not hesitate to contact us at support@marketingblocks.ai"
          />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
