import ArrowRight from "../../../Assets/Images/Home/Arrow_Right.png";
import DummyFeature1 from "../../../Assets/Images/Home/Dummy_Feature_1.png";
import { Link } from "react-router-dom";

const FeaturesSectionOdd = (props) => {
  return (
    <>
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="xl:text-6xl font-bold leadi lg:text-5xl text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#be40ff] to-[#6835f0] py-3">
            {props.title}
          </h1>
          <p className="mt-6 mb-8 lg:text-lg text-md text-gray-300 font-bold sm:mb-12">
            {props.description}
          </p>
          <p className="text-lg lg:text-lg text-md text-gray-300">
            {props.details}
          </p>

          {/* Testimonial Card */}
          <blockquote className="rounded-lg shadow-sm my-16">
            <div className="flex items-center gap-4">
              <img
                alt="Man"
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <div className="flex justify-center ml-[-5px] gap-0.25 text-starColor">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <p className="mt-0.5 text-sm font-medium text-gray-300">
                  Paul Starr
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-400 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
              sit rerum incidunt, a consequuntur recusandae ab saepe illo est
              quia obcaecati neque quibusdam eius accusamus error officiis atque
              voluptates magnam!
            </p>
          </blockquote>
          {/* Testimonial Card */}

          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              rel="noopener noreferrer"
              to={props.link1}
              className="px-8 py-3 text-md text-light font-semibold rounded dark:border-gray-100 capitalize bg-secondary rounded-3xl hover:translate-y-[-5px] hover: duration-100 hover:bg-secondary_hover"
            >
              Start for free
            </Link>
            <Link
              rel="noopener noreferrer"
              to={props.link2}
              className="px-8 py-3 text-md text-gray-400 font-semibold capitalize rounded-3xl flex justify-center"
            >
              Learn more
              <img
                className="translate-x-[-5px] "
                src={ArrowRight}
                style={{
                  marginLeft: "30px",
                  marginTop: "2px",
                }}
                alt=""
              />
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={DummyFeature1}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-[550px] xl:h-112 2xl:h-128 xl:mt-80 mt-24"
          />
        </div>
      </div>
    </>
  );
};

export default FeaturesSectionOdd;
