import { PiBell } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { toast } from "sonner";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

const Header = () => {
  const logoutHandler = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully", {
        style: { backgroundColor: "inherit", color: "white" },
      });
    } catch (error) {
      toast.error("Logout failed", {
        style: { backgroundColor: "inherit", color: "white" },
      });
    }
  };

  return (
    <div className="flex items-center justify-between p-2 px-4">
      <div>
        <img className="w-[4rem]" src="/meetme.png" alt="Icon" />
      </div>
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

        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none" asChild>
            <button
              title="Profile"
              className="bg-[#1F1F1F] p-2 rounded-full hover:bg-zinc-800"
            >
              <Avatar className="w-7 h-7">
                <AvatarImage src="" alt="user" />
                <AvatarFallback className="text-black font-bold bg-[#B49BC8]">
                  C
                </AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52 bg-inherit text-white flex flex-col gap-2 p-2 mt-3 border-zinc-400">
            <DropdownMenuLabel className="text-center text-zinc-400">
              My Account
            </DropdownMenuLabel>

            <Separator className="bg-zinc-500 w-[10rem] mx-auto " />

            <DropdownMenuItem className="cursor-pointer hover:bg-[#1F1F1F] ">
              {/* Or change Link to Dialog */}
              My Profile
            </DropdownMenuItem>

            <Separator className="bg-zinc-500 w-[10rem] mx-auto " />

            <DropdownMenuItem
              onClick={logoutHandler}
              className="cursor-pointer hover:bg-[#1F1F1F]"
            >
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
