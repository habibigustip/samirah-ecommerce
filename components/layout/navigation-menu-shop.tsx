import { forwardRef, ComponentRef, ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
 
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Lorem ipsum 1",
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Lorem ipsum 2",
    href: "/",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Lorem ipsum 3",
    href: "/",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Lorem ipsum 4",
    href: "/",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Lorem ipsum 5",
    href: "/",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Lorem ipsum 6",
    href: "/",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

const ListItem = forwardRef<
  ComponentRef<"a">,
  ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
        ref={ref}
        className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
        )}
        {...props}
        >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
        </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default function NavigationMenuShop() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
        <NavigationMenuTrigger color="red" className="focus:text-purple-600">Shop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
            ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
          <Link href="/about-us">
            About Us
          </Link>
        </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}