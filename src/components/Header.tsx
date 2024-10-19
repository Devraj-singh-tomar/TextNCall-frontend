import { PiBell } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SlLogin } from "react-icons/sl";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Link } from "react-router-dom";

const user = true;

const Header = () => {
  return (
    <div className="flex items-center justify-between p-2 px-4">
      <div>
        <img className="w-[4rem]" src="/meetme.png" alt="Icon" />
      </div>

      {user ? (
        <>
          <div className="flex items-center gap-8">
            {/* Drawer */}

            <div className="flex">
              <Sheet>
                <SheetTrigger>
                  <GoSearch
                    className="text-zinc-400 hover:text-white cursor-pointer"
                    size={25}
                  />
                </SheetTrigger>
                <SheetContent
                  side={"left"}
                  className="bg-inherit border-gray-400 h-full rounded-r-lg"
                >
                  <SheetHeader>
                    <SheetTitle className="text-white ">Search</SheetTitle>
                    <SheetDescription>search all users</SheetDescription>
                  </SheetHeader>

                  <Input
                    className="mt-4 bg-transparent border border-gray-500 placeholder:text-gray-300"
                    placeholder="Search"
                    type="text"
                  />

                  <SheetFooter>
                    <SheetClose asChild>
                      <Button
                        className="w-full mt-96 bg-inherit border border-gray-500 hover:bg-inherit hover:border-white"
                        type="submit"
                      >
                        Search
                      </Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>

            {/* menu */}

            <button>
              <PiBell size={25} className="text-zinc-400 hover:text-white" />
            </button>

            {/* DropDown */}

            <button title="Profile" className="bg-[#1F1F1F] p-2 rounded-full">
              <Avatar className="w-7 h-7">
                <AvatarImage src="" />
                <AvatarFallback className="text-black font-bold bg-[#B49BC8]">
                  C
                </AvatarFallback>
              </Avatar>
            </button>
          </div>
        </>
      ) : (
        <>
          <Link title="Login" to={"/"}>
            <SlLogin className="text-2xl" />
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
