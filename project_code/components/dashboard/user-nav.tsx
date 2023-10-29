import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {usePathname } from "next/navigation";
import { useContextValue } from "@/components/context";
import Link from "next/link";

interface NavbarProps {
  userEmail: string;
  userName: string;
}

export function UserNav(NavbarProps: NavbarProps) {
  const { getters,setters } = useContextValue();
  let currentPath = usePathname();

  currentPath =
      currentPath?.startsWith('/student') ? '/student' :
          currentPath?.startsWith('/tutor') ? '/tutor' :
              currentPath;

  const handleLogout = () => {
    setters.setEmail("");
    setters.setName("");
    window.location.href = "/";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/default-user.png" alt="default-user" />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{NavbarProps.userName}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {NavbarProps.userEmail}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={`${currentPath}/profile/demo`}>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href={`${currentPath}/message`}>
            <DropdownMenuItem>
              Notification
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <Link href={"/"} onClick={handleLogout}>
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
