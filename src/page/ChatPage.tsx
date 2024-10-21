import Header from "@/components/Header";
import { User } from "@/types/type";
import { Link } from "react-router-dom";

interface PropsType {
  user: User | null;
}

const ChatPage = ({ user }: PropsType) => {
  return (
    <div>
      {user?._id ? (
        <>
          <Header />
          <main>ChatPage</main>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center w-1/2 mx-auto mt-[15%] p-10 rounded-lg border gap-6">
            <p className="text-4xl">Please login to view the content</p>
            <Link to={"/"}>
              <span className="text-white text-3xl">click to </span>
              <span className="underline text-3xl text-blue-600 uppercase">
                signIN{" "}
              </span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatPage;
