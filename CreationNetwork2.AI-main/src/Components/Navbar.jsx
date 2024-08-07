import { Fragment, useState, useContext } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  // ChartPieIcon,
  // CursorArrowRaysIcon,
  // FingerPrintIcon,
  // SquaresPlusIcon,
  XMarkIcon,
  // ClipboardDocumentIcon,
  // MicrophoneIcon,
  // RectangleGroupIcon,
  // RectangleStackIcon,
  // PhotoIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  CpuChipIcon,
  InformationCircleIcon,
  ChatBubbleLeftIcon,
  UsersIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Logo from "../Assets/Images/HeaderLogo.png";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

// const products = [
//   {
//     name: "AI Copywriter",
//     description: "Generate compelling and persuasive copy effortlessly.",
//     href: ".",
//     icon: ClipboardDocumentIcon,
//   },
//   {
//     name: "AI Voiceovers Studio",
//     description: "Bring your content to life with AI Voiceovers Studio.",
//     href: ".",
//     icon: MicrophoneIcon,
//   },
//   {
//     name: "AI Design Studio",
//     description:
//       "Unleash your creativity with our AI Design Studio. Design logos, social media banners, brochures, and more",
//     href: ".",
//     icon: RectangleGroupIcon,
//   },
//   {
//     name: "AI BrandMagic",
//     description:
//       "Build a powerful and consistent brand presence across all channels.",
//     href: ".",
//     icon: RectangleStackIcon,
//   },
//   {
//     name: "AI ImageGenius",
//     description: "Create eye-catching visuals with our AI ImageGenius.",
//     href: ".",
//     icon: PhoneIcon,
//   },
// ];
const callsToAction = [
  { name: "Watch demo", href: ".", icon: PlayCircleIcon },
  { name: "Contact sales", href: ".", icon: PhoneIcon },
];

const resources = [
  {
    name: "Our Blogs",
    description: "Join Our Blogs.",
    href: ".",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Webinars",
    description: "Join our Webinars",
    href: ".",
    icon: GlobeAltIcon,
  },
  {
    name: "AI Bootcamp",
    description: "Join Our Bootcamp",
    href: ".",
    icon: CpuChipIcon,
  },
];
const RescallsToAction = [
  { name: "Watch demo", href: ".", icon: PlayCircleIcon },
  { name: "Contact sales", href: ".", icon: PhoneIcon },
];

const Company = [
  {
    name: "About Us",
    description: "",
    href: "/about-us",
    icon: InformationCircleIcon,
  },
  {
    name: "Contact Us",
    description: "",
    href: "/contact-us",
    icon: ChatBubbleLeftIcon,
  },
  { name: "Affiliates", description: "", href: ".", icon: UsersIcon },
  {
    name: "Roadmaps",
    description: "",
    href: "/company/roadMap",
    icon: ArrowPathIcon,
  },
  {
    name: "Testimonials",
    description: "",
    href: "/testimonials",
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
];
const CompcallsToAction = [
  { name: "Watch demo", href: ".", icon: PlayCircleIcon },
  { name: "Contact sales", href: ".", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { username, token } = useContext(AuthContext);

  return (
    <header className="bg-white z-10">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <>
            {location.pathname !== "/dashboard" && (
              <Link to="/" className="-m-5 p-1.5">
                <span className="sr-only">Creation Network</span>
                <img className="h-12 w-auto" src={Logo} alt="" />
              </Link>
            )}
          </>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-menu_gray"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
                <Link
                  to="/products"
                  className="text-sm font-semibold leading-6 text-menu_gray"
                >
                  Products
                </Link>
           
             
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-menu_gray">
              Resources
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-menu_gray"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {resources.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-menu_gray group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          to={item.href}
                          className="block font-semibold text-menu_gray"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-menu_gray">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {RescallsToAction.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-menu_gray hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-menu_gray"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            to="/pricing"
            className="text-sm font-semibold leading-6 text-menu_gray"
          >
            Pricing
          </Link>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-menu_gray">
              Company
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-menu_gray"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {Company.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-menu_gray group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          to={item.href}
                          className="block font-semibold text-menu_gray"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-menu_gray">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {CompcallsToAction.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-menu_gray hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-menu_gray"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        {username? <h1 className="text-sm font-semibold leading-6 text-menu_gray">Welcome Back {username}</h1>:
         <>
          <Link
            to="/sign-up"
            style={{ marginRight: 23 }}
            className="text-sm font-semibold leading-6 text-menu_gray"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="text-sm font-semibold leading-6 text-menu_gray"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
          </>
          }
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="." className="-m-1.5 p-1.5">
              {/* <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              /> */}
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-menu_gray"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
             
                <Link
                  to="/products"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-menu_gray hover:bg-gray-50"
                >
                  Products
                </Link>
                
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-menu_gray hover:bg-gray-50">
                        Resources
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...resources, ...RescallsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="Link"
                            to={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-menu_gray hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to="/pricing"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-menu_gray hover:bg-gray-50"
                >
                  Pricing
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-menu_gray hover:bg-gray-50">
                        Company
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...Company, ...CompcallsToAction].map((item) => (
                          <Link to={item.href}>
                          <Disclosure.Button
                            key={item.name}
                            as="Link"
                            to={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-menu_gray hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
              {username? <h1 className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-menu_gray hover:bg-gray-50">Welcome Back {username}</h1>:
              <>
                <Link
                  to="/sign-up"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-menu_gray hover:bg-gray-50"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-menu_gray hover:bg-gray-50"
                >
                  Log in
                </Link>
                </>
                }
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
