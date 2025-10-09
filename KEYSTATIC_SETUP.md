# Keystatic Cloud Storage Setup Guide

This guide will help you configure Keystatic with GitHub cloud storage for the Dr. Mandy Manna portfolio website.

## Prerequisites

- GitHub account with access to the repository
- GitHub Personal Access Token (classic)

## Step 1: Generate GitHub Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Direct link: https://github.com/settings/tokens

2. Click "Generate new token" → "Generate new token (classic)"

3. Configure the token:
   - **Note**: `Keystatic CMS Access for mandy-manna`
   - **Expiration**: Choose your preferred expiration (90 days, 1 year, or no expiration)
   - **Scopes**: Select the following:
     - ✅ **repo** (Full control of private repositories)
       - This includes: repo:status, repo_deployment, public_repo, repo:invite, security_events

4. Click "Generate token"

5. **IMPORTANT**: Copy the token immediately - you won't be able to see it again!

## Step 2: Configure Environment Variables

1. Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

2. Edit the `.env` file and add your GitHub token:

```env
KEYSTATIC_GITHUB_TOKEN=your_actual_token_here
KEYSTATIC_GITHUB_REPO_OWNER=hghayman
KEYSTATIC_GITHUB_REPO_NAME=mandy-manna
```

3. **IMPORTANT**: Never commit the `.env` file to version control (it's already in `.gitignore`)

## Step 3: Configure Netlify Environment Variables

For production deployment on Netlify:

1. Go to your Netlify dashboard
2. Select your site (mandy-manna)
3. Go to Site settings → Environment variables
4. Add the following variables:
   - **Key**: `KEYSTATIC_GITHUB_TOKEN`
   - **Value**: Your GitHub personal access token
   - **Scopes**: Select all deploy contexts (Production, Deploy Previews, Branch deploys)

## Step 4: Keystatic Configuration

The [`keystatic.config.tsx`](keystatic.config.tsx) file is already configured with:

```tsx
storage: {
  kind: 'github',
  repo: {
    owner: 'hghayman',
    name: 'mandy-manna',
  },
}
```

### Configuration Features:

- **Cloud Storage**: GitHub-based content storage
- **Collections**: Blog posts with full schema
- **Fields**:
  - Title (slug field)
  - Draft status
  - Date
  - Featured image
  - Authors (array)
  - Categories (array)
  - Tags (array)
  - Content (Markdoc with image support)

## Step 5: Access Keystatic Admin

### Local Development:

1. Start the development server:
```bash
yarn dev
```

2. Access Keystatic at:
```
http://localhost:4321/keystatic
```

3. You'll be prompted to authenticate with GitHub on first access

### Production:

Access the admin panel at:
```
https://drmandy-manna.netlify.app/keystatic
```

## How It Works

### Content Management Flow:

1. **Edit Content**: Make changes in Keystatic admin interface
2. **Save**: Keystatic creates a Git commit
3. **Push**: Changes are pushed to the GitHub repository
4. **Deploy**: Netlify automatically detects the change and rebuilds the site
5. **Live**: Your changes are live on the website

### File Structure:

- Content is stored in: `src/content/blog/`
- Images are stored in: `public/images/`
- Each blog post is a markdown file with frontmatter

## Authentication

Keystatic uses GitHub OAuth for authentication:

- **Local**: Uses your GitHub token from `.env`
- **Production**: Uses OAuth App (needs to be configured in GitHub)

### Setting up GitHub OAuth App (for production):

1. Go to GitHub Settings → Developer settings → OAuth Apps
2. Click "New OAuth App"
3. Configure:
   - **Application name**: `Keystatic CMS - Dr. Mandy Manna`
   - **Homepage URL**: `https://drmandy-manna.netlify.app`
   - **Authorization callback URL**: `https://drmandy-manna.netlify.app/api/keystatic/github/oauth/callback`
4. Click "Register application"
5. Add the credentials to Netlify environment variables:
   - `KEYSTATIC_GITHUB_CLIENT_ID`
   - `KEYSTATIC_GITHUB_CLIENT_SECRET`

## Content Schema

### Blog Post Fields:

```typescript
{
  title: string,           // Post title (also used for slug)
  draft: boolean,          // Draft status (default: false)
  date: date,              // Publication date
  image: string,           // Featured image path
  authors: string[],       // List of authors
  categories: string[],    // List of categories
  tags: string[],          // List of tags
  content: markdoc        // Main content (Markdoc format)
}
```

## Troubleshooting

### Issue: "Failed to authenticate with GitHub"
- **Solution**: Verify your GitHub token is correct in `.env`
- Check token hasn't expired
- Ensure token has correct scopes (repo)

### Issue: "Permission denied"
- **Solution**: Ensure your GitHub account has write access to the repository
- Verify token permissions

### Issue: "Changes not appearing on site"
- **Solution**: Check Netlify build logs
- Ensure the build was triggered
- Verify the content was committed to the repository

### Issue: "Images not loading"
- **Solution**: Ensure images are in `public/images/` directory
- Check image paths in the content

## Best Practices

1. **Regular Token Rotation**: Update your GitHub token periodically for security
2. **Backup**: GitHub serves as your backup - all content is version controlled
3. **Testing**: Test changes in a branch before merging to main
4. **Images**: Optimize images before uploading (use appropriate sizes)
5. **Drafts**: Use the draft field to work on posts before publishing

## Security Notes

- ⚠️ Never commit `.env` file to version control
- ⚠️ Never share your GitHub token
- ⚠️ Rotate tokens regularly
- ⚠️ Use token expiration for better security
- ✅ `.env` is already in `.gitignore`
- ✅ `.env.example` provides template without secrets

## Support

For issues or questions:
- Keystatic Documentation: https://keystatic.com/docs
- GitHub Issues: https://github.com/hghayman/mandy-manna/issues

## Migration Notes

If migrating from local storage:

1. Existing content in `src/content/blog/` will be used by Keystatic
2. First edit will commit to GitHub
3. All subsequent edits will be version controlled
4. No data loss - local files remain until overwritten

## Resources

- [Keystatic Documentation](https://keystatic.com/docs)
- [Keystatic GitHub Storage](https://keystatic.com/docs/github-mode)
- [Astro + Keystatic Guide](https://keystatic.com/docs/installation-astro)
- [GitHub Token Documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)