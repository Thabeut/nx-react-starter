export const filterByFeatureFlag = (items, feature_flags) => {
  const filterItemsByFeatureFlag = (item) => {
    if (item?.children) {
      item.children = item.children.filter((child) => {
        if (child?.feature) return feature_flags[child.feature];
        return item.children.length > 0;
      });
    }
    if (item?.feature) {
      if (!(item.feature in feature_flags)) {
        console.warn(
          `Feature "${item.feature}" not found in feature flags config`
        );
        return true;
      }

      return feature_flags[item.feature];
    }
    return true;
  };

  const filteredItems = items.filter((item) => filterItemsByFeatureFlag(item));

  return filteredItems;
};
