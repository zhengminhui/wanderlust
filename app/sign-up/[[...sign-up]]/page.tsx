import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <SignUp />
    </main>
  );
}
