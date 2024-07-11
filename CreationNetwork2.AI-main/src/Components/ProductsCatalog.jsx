import { Link } from "react-router-dom";
import DummyFeature1 from "../Assets/Images/Home/Dummy_Feature_1.png";
const ProductsCatalog = (props) => {
  return (
    <div className="my-4 px-2 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg bg-white px-2">
        <Link to={props.link}>
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src={DummyFeature1}
          />
        </Link>
        <hr />
        <div className="flex flex-col justify-start items-start leading-tight p-2 md:p-4 md:px-6 sm:px-6 my-4">
          <h1 className="text-lg">
            <Link
              className="no-underline hover:no-underline hover:underline text-black"
              to={props.link}
            >
              <h1 className="dark:text-black xl:text-4xl font-bold leadi text-4xl sm:text-2xl bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 via-purple-500 to-indigo-500 animate-text pb-8 whitespace-nowrap">
                {props.name}
              </h1>
            </Link>
          </h1>
          <p className="xl:text-lg sm:text-sm text-gray-600 font-semibold ">
            {props.description}
          </p>
          <div className="flex flex-col mt-8">
            <Link to={props.link}>
              <button
                rel="noopener noreferrer"
                className="px-8 py-3 text-md font-semibold rounded uppercase bg-secondary rounded-3xl hover:translate-y-[-5px] hover: duration-100 hover:bg-secondary_hover text-white"
              >
                Start for free
              </button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductsCatalog;
