import { ProfileTabsProps } from "@/interfaces";

export const profileTabs = ({ profile, tabs }: ProfileTabsProps) => {
  return tabs.map((tab) => ({
    ...tab,
    path: tab.path.replace("/[profile]", `/${profile}`),
  }));
};
