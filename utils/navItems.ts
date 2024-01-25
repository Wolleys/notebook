import { INavTabs } from "@/components/navTabs/INavTabs";

export const feedsTabs: INavTabs[] = [
  { path: "/feed", label: "For you" },
  { path: "/feed/following", label: "Following" },
  { path: "/explore", label: "Explore" },
];

export const profileNavTabs: INavTabs[] = [
  { path: "/[profile]", label: "Home" },
  { path: "/[profile]/lists", label: "Lists" },
  { path: "/[profile]/about", label: "About" },
];
