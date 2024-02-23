import { ProfileNavTabsProps } from "./ProfileNavTabsProps";

/**
 * Generate modified profile tabs object with replaced paths based on the profile.
 * @param profile - The profile to replace in paths.
 * @param tabs - The array of tab objects.
 * @returns - An array of modified tab objects.
 */
export const profileNavTabs = ({ profile, tabs }: ProfileNavTabsProps) => {
  return tabs.map((tab) => ({
    ...tab,
    path: tab.path.replace("/[profile]", `/${profile}`),
  }));
};
