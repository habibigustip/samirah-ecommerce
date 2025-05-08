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
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "@/services/services-categroies";
import { Category } from "@/types/category";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Url } from "next/dist/shared/lib/router/router";
import { MENU_TITLE } from "@/lib/types/constants";
 
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
  const href: Url = props.href as Url;
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
         {children}
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default function NavigationMenuShop() {
  const { data: categories, isLoading , isError, error } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories
  })

  let content
  if (isLoading) {
    content = <div>Loading...</div>
  }
  if (isError) {
    content = <div>Error: {error.message}</div>
  }
  if (categories) {
    content = categories.map((category) => (
      <ListItem
        key={category.slug}
        href={`/shop/${category.name}`}
      >
        <div className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage src={category.image} alt="Avatar Image Feedback" />
            <AvatarFallback>Image Category</AvatarFallback>
          </Avatar>
          <span>{category.name}</span>
        </div>
      </ListItem>
    ))
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
        <NavigationMenuTrigger color="red" className="focus:text-purple-600">{MENU_TITLE.SHOP}</NavigationMenuTrigger>
          <NavigationMenuContent className="p-4">
            <div className="gap-2">Category</div>
            <ul className="grid w-[400px] gap-y-1 gap-x-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {content}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link href="/about-us">
              {MENU_TITLE.ABOUT_US}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}