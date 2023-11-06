import { TabProps } from "@/interfaces";

export const feedsTabs: TabProps[] = [
  { path: "/feed", label: "For you" },
  { path: "/feed/following", label: "Following" },
  { path: "/explore", label: "Explore" },
];

export const profileNavTabs: TabProps[] = [
  { path: "/[profile]", label: "Home" },
  { path: "/[profile]/lists", label: "Lists" },
  { path: "/[profile]/about", label: "About" },
];
