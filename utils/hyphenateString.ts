export const hyphenateString = (slug: string): string => {
  const lowercasedSlug = slug.toLowerCase();
  return lowercasedSlug.replace(/\s+/g, "-");
};
