import { slugify } from "@/lib/utils/textConverter";

const taxonomyFilter = (posts: any[], name: string, key: string) =>
  posts.filter((post) => {
    if (!post.data || !post.data[name]) {
      return false;
    }
    let items = post.data[name];
    if (typeof items === 'string') {
      items = items.split(',').map(s => s.trim());
    }
    if (!Array.isArray(items)) {
      return false;
    }
    return items.map((name: string) => slugify(name)).includes(key);
  });

export default taxonomyFilter;
