"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

const network = ["Solana", "Etherum", "Bitcoin"];

type FilterProps = Object;

interface SetFilterProps {
  filter: FilterProps;
  setFilter: (filter: FilterProps) => void;
}
export default function FilterList({ filter, setFilter }: SetFilterProps) {
  const [selected, setSelected] = useState("blockchain");

  const handleChange = (value: string) => {
    setSelected(value);
    setFilter({
      ...filter,
      blockchain: value,
      page: 1,
    });
  };
  return (
    <div className=" z-10  w-full min-w-[1rem] ">
      <Listbox value={selected} onChange={handleChange}>
        <div className="relative">
          <Listbox.Button className="bg-overlay/10 hover:bg-overlay/5  relative w-full cursor-pointer  rounded-lg  border border-solid py-2 pl-3 pr-10 text-left text-sm shadow-sm focus:outline-none  focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 dark:border-gray-800 sm:text-sm">
            <span className="block truncate">{selected}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full  overflow-auto rounded-md bg-overlay py-1  text-sm shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {network.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative  cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
