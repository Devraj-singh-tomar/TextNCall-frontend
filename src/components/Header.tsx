import { auth } from "@/firebase";
import { RootState } from "@/redux/store";
import { signOut } from "firebase/auth";
import { FaRegUserCircle } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { PiBell } from "react-icons/pi";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
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

const Header = () => {
  const { user } = useSelector((state: RootState) => state.userReducer);

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
                {user?.photo ? (
                  <AvatarImage src={user?.photo} alt="user" />
                ) : (
                  <AvatarFallback className="text-black font-bold bg-[#B49BC8]">
                    {user?.name ? (
                      user?.name.charAt(0).toUpperCase()
                    ) : (
                      <FaRegUserCircle fontSize={22} />
                    )}
                  </AvatarFallback>
                )}
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52 bg-inherit text-white flex flex-col gap-2 p-2 mt-3 border-zinc-400">
            <DropdownMenuLabel className="text-center text-zinc-400 truncate">
              {/* My Account */}
              {user?.name}
            </DropdownMenuLabel>

            <Separator className="bg-zinc-500 w-[10rem] mx-auto " />

            <span className="cursor-pointer text-center hover:bg-zinc-800 rounded-sm  p-1 font-medium">
              {/* Or change Link to Dialog */}
              Update Profile
            </span>

            <Separator className="bg-zinc-500 w-[10rem] mx-auto " />

            <span
              onClick={logoutHandler}
              className="cursor-pointer text-center hover:bg-zinc-800 rounded-sm p-1  font-medium"
            >
              Logout
            </span>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
