import {
  CalendarIcon,
  HomeIcon,
  ListIcon,
  ShoppingCartIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { id: 1, label: "Home", icon: HomeIcon, href: "/home" },
  { id: 2, label: "Meal Planner", icon: CalendarIcon, href: "/meal-planner" },
  {
    id: 3,
    label: "Grocery List",
    icon: ShoppingCartIcon,
    href: "/grocery-list",
  },
  { id: 4, label: "Habits", icon: ListIcon, href: "/habits" },
];
