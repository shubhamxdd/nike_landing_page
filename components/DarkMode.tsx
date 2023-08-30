import { NavProps } from "@/types";
import { Switch } from "@headlessui/react";

const DarkMode = ({darkMode,setDarkMode}:NavProps) => {
  return (
    <>
      <span
        className="-mr-8 font-montserrat leading-normal text-lg text-slate-gray dark:text-neutral-400"
        onClick={() => setDarkMode(!darkMode)}
      >
        Toggle Dark mode
      </span>
      <div className="flex">
        <li>
          <Switch.Group>
            <Switch
              checked={darkMode}
              onChange={setDarkMode}
              className={`${darkMode ? "bg-dark-coral-red" : "bg-coral-red"}
                  relative inline-flex h-[38px] w-[74px] cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out`}
            >
              <span
                aria-hidden="true"
                className={`${darkMode ? "translate-x-9" : "translate-x-0"}
                    pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
          </Switch.Group>
        </li>
      </div>
    </>
  );
};

export default DarkMode;
