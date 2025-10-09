// similar products
const similarItems = (currentItem: any, allItems: any[]) => {
  let categories: string[] = [];
  let tags: string[] = [];

  // set categories - handle both old array format and new single string format
  if (currentItem.data.category) {
    categories = [currentItem.data.category];
  } else if (currentItem.data.categories && currentItem.data.categories.length > 0) {
    categories = currentItem.data.categories;
  }

  // set tags - handle both old array format and new CSV string format
  if (typeof currentItem.data.tags === 'string') {
    tags = currentItem.data.tags.split(',').map((tag: string) => tag.trim()).filter((tag: string) => tag);
  } else if (Array.isArray(currentItem.data.tags) && currentItem.data.tags.length > 0) {
    tags = currentItem.data.tags;
  }

  // filter by categories
  const filterByCategories = allItems.filter((item: any) => {
    const itemCategory = item.data.category || (item.data.categories && item.data.categories[0]);
    return categories.some((category) => itemCategory === category);
  });

  // filter by tags
  const filterByTags = allItems.filter((item: any) => {
    let itemTags: string[] = [];
    if (typeof item.data.tags === 'string') {
      itemTags = item.data.tags.split(',').map((tag: string) => tag.trim()).filter((tag: string) => tag);
    } else if (Array.isArray(item.data.tags)) {
      itemTags = item.data.tags;
    }
    return tags.some((tag) => itemTags.includes(tag));
  });

  // merged after filter
  const mergedItems = [...new Set([...filterByCategories, ...filterByTags])];

  // filter by slug
  const filterBySlug = mergedItems.filter(
    (product) => product.id !== currentItem.id,
  );

  return filterBySlug;
};

export default similarItems;
