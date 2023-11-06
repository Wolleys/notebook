import { TabProps } from "@/interfaces";

// If profile username is available, replace placeholders with the actual username
export const formatProfileTabs = (profile: string, tabs: TabProps[]) => {
  return tabs.map((tab) => ({
    ...tab,
    path: tab.path.replace("/[profile]", `/${profile}`),
  }));
};
