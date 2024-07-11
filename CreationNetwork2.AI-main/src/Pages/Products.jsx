import ProductsCatalog from "../Components/ProductsCatalog";

const Products = () => {
  return (
    <section className="bg-[url('Assets/Images/Home/Hero_Section_bg.png')] bg-repeat bg-cover mt-[-100px] pt-[100px] xl:pt-[200px]">
      <div className="pb-16 md:pt-16 container mx-auto">
        <div className="flex flex-wrap mt-12 lg:mt-0 mx-3 lg:-mx-4">
          <ProductsCatalog
            name="Copywriting"
            link="/tools/copywriting"
            description="Copywriting is the act or occupation of writing text for the purpose of advertising or other forms of marketing. The product, called copy or sales copy, is written content that aims to increase brand awareness and ultimately persuade a person or group to take a particular action."
          />
          <ProductsCatalog
            name="Voice Over"
            link="/tools/voice-over"
            description="Copywriting is the act or occupation of writing text for the purpose of advertising or other forms of marketing. The product, called copy or sales copy, is written content that aims to increase brand awareness and ultimately persuade a person or group to take a particular action."
          />
          <ProductsCatalog
            name="Design Studio"
            link="/tools/design-studio"
            description="Copywriting is the act or occupation of writing text for the purpose of advertising or other forms of marketing. The product, called copy or sales copy, is written content that aims to increase brand awareness and ultimately persuade a person or group to take a particular action."
          />
          <ProductsCatalog
            name="Image Generator"
            link="/tools/image-generator"
            description="Copywriting is the act or occupation of writing text for the purpose of advertising or other forms of marketing. The product, called copy or sales copy, is written content that aims to increase brand awareness and ultimately persuade a person or group to take a particular action."
          />
          <ProductsCatalog
            name="Transcriber"
            link="/tools/transcriber"
            description="Copywriting is the act or occupation of writing text for the purpose of advertising or other forms of marketing. The product, called copy or sales copy, is written content that aims to increase brand awareness and ultimately persuade a person or group to take a particular action."
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
