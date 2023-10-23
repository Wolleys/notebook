interface TabItem {
  path: string;
  label: string;
}

// If profile username is available, replace placeholders with the actual username
export const formatProfileTabs = (profile: string, tabs: TabItem[]) => {
  return tabs.map((tab) => ({
    ...tab,
    path: tab.path.replace("/[profile]", `/${profile}`),
  }));
};
