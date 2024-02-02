import React from "react";
import { Transition } from "@headlessui/react";

import SearchData from "../search/search-data";
import { CrossSvg } from "../icons/svg";

interface MobSearchProps {
  show: boolean;
  setShow: any;
}

const MobSearch = ({ show, setShow }: MobSearchProps) => {
  return (
    <Transition.Root
      className="fixed inset-0 z-50 w-full overflow-hidden backdrop-blur-sm md:hidden"
      show={show}
    >
      <Transition.Child
        className="relative flex  w-full gap-2 bg-overlay px-1 py-2"
        enter="transition-all ease-in-out duration-100 "
        enterFrom="opacity-0 -translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all ease-in-out duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="flex-1">{show && <SearchData />}</div>
        <button
          onClick={() => setShow(false)}
          data-collapse-toggle="navbar-sticky"
          type="button"
          className=" inline-flex  h-8 w-8 items-center justify-center rounded-lg border-solid p-1 text-sm text-gray-500  ring-gray-700 ring-offset-2 transition duration-500 ease-in-out hover:ring-2"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <CrossSvg className="h-6 w-6" />
        </button>
      </Transition.Child>
    </Transition.Root>
  );
};

export default MobSearch;
