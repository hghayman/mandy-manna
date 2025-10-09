import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'cloud',
    },
    cloud: {
        project: 'mandy-manna/mandy-manna',
    },

    collections: {
        blog: collection({
            label: 'Blog',
            slugField: 'postSlug',
            path: 'src/content/blog/*',
            format: { contentField: 'content' },
            schema: {
                postSlug: fields.slug({
                    name: {
                        label: 'URL Slug',
                        description: 'URL-friendly version for the post',
                    },
                }),
                title: fields.text({
                    label: 'Title',
                    validation: { isRequired: true },
                }),
                description: fields.text({
                    label: 'Description',
                    description: 'A brief description of the blog post',
                    validation: { isRequired: true },
                }),
                pubDate: fields.date({
                    label: 'Publication Date',
                    description: 'The date this post was published',
                    validation: { isRequired: true },
                }),
                updatedDate: fields.date({
                    label: 'Updated Date',
                    description: 'The date this post was last updated',
                }),
                image: fields.image({
                    label: 'Hero Image',
                    description: 'The main image for the blog post',
                    directory: 'src/assets/blogs',
                    publicPath: '../../assets/blogs/',
                    transformFilename: (originalFilename) =>
                        originalFilename
                            .normalize("NFKD")
                            .replace(/[’'"]/g, '')
                            .replace(/[^a-zA-Z0-9.-]/g, '-')
                            .toLowerCase(),
                }),
                heroAlt: fields.text({
                    label: 'Hero Image Alt Text',
                    description: 'Alt text for the hero image',
                }),
                category: fields.select({
                    label: 'Category',
                    description: 'The academic category this post belongs to',
                    options: [
                        { label: 'Agricultural Science', value: 'Agricultural Science' },
                        { label: 'Crop Research', value: 'Crop Research' },
                        { label: 'Soil & Environment', value: 'Soil & Environment' },
                        { label: 'Sustainable Farming', value: 'Sustainable Farming' },
                        { label: 'Agri-Technology', value: 'Agri-Technology' },
                        { label: 'Food Systems', value: 'Food Systems' },
                        { label: 'Climate & Agriculture', value: 'Climate & Agriculture' },
                        { label: 'Rural Development', value: 'Rural Development' },
                        { label: 'Policy & Economics', value: 'Policy & Economics' },
                        { label: 'Academic Insights', value: 'Academic Insights' },
                    ],
                    defaultValue: 'Agricultural Science',
                }),
                tags: fields.text({
                    label: 'Tags (CSV)',
                    description: 'Enter tags separated by commas (e.g., soil, farming, research)',
                }),
                draft: fields.checkbox({
                    label: 'Draft',
                    description: 'Mark this post as a draft',
                    defaultValue: false,
                }),
                content: fields.mdx({
                    label: 'Content',
                    options: {
                        image: {
                            directory: 'src/assets/blogs',
                            publicPath: '../../assets/blogs/',
                            transformFilename: (originalFilename) =>
                                originalFilename
                                    .normalize("NFKD")
                                    .replace(/[’'"]/g, '')
                                    .replace(/[^a-zA-Z0-9.-]/g, '-')
                                    .toLowerCase(),
                        },
                    },
                }),
            },
        }),
    },
});
