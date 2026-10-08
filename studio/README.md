# MitraTech Blog Studio

This is the Sanity Studio for managing blog posts. It's a standalone application deployed separately from the main website.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env.local` file with your Sanity credentials:
   ```bash
   SANITY_STUDIO_PROJECT_ID=your_project_id
   SANITY_STUDIO_DATASET=production
   ```

3. Run locally for testing (optional):
   ```bash
   npm run dev
   ```
   Opens at http://localhost:3333

4. Deploy to Sanity hosting:
   ```bash
   npm run deploy
   ```
   This will deploy the Studio to a URL like: `https://mitratech-blog.sanity.studio`

## Deployment

The Studio should be deployed once after setting up the Sanity project:

```bash
cd studio
npm install
npm run deploy
```

You'll be prompted to log in to Sanity if not already authenticated. After deployment, you'll receive a URL like `https://your-studio.sanity.studio` where Ajay can manage blog posts.

## Notes

- This Studio uses Sanity v3 which is compatible with React 18
- It's completely separate from the main Next.js app to avoid dependency conflicts
- The schema matches the blog post structure used in the main website
