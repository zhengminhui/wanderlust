import { UserButton } from "@clerk/nextjs";

export default function NavBar() {
  return (
    <div className="sticky w-full flex flex-col justify-center pl-6 h-16 text-gray-500 bg-[#6F61C0]">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
