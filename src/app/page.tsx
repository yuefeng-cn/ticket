import { UserButton } from "@clerk/nextjs";
import { Button } from "@nextui-org/button";
import { div } from "framer-motion/client";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
export default function Home() {
  return (
    <div>
      <ThemeSwitcher />
      <UserButton />
      <Button>Click me</Button>
    </div>
  );
}
