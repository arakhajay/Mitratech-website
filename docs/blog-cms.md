# Blog CMS Setup Guide

This guide will help you set up Sanity CMS to manage blog posts on www.mitratechservices.in.

## Overview

The blog now uses **Sanity** as a headless CMS, allowing you to add, edit, and publish blog posts without touching code. You'll manage content through a dedicated Sanity Studio deployed at a custom `*.sanity.studio` URL (e.g., `https://mitratech-blog.sanity.studio`).

## Features

- ✅ Dedicated Sanity Studio at your own `*.sanity.studio` URL
- ✅ Safe fallback: site builds and runs even without Sanity configured
- ✅ Automatic revalidation: new posts appear within 5 minutes or instantly via webhook
- ✅ SEO preserved: all metadata, slugs, and URLs remain the same
- ✅ Existing posts preserved: 6 existing posts ready to migrate

---

## Step 1: Create a Free Sanity Project

1. Go to [sanity.io](https://www.sanity.io/) and sign up (free plan available)
2. Click **"Create new project"**
3. Choose a project name (e.g., "MitraTech Blog")
4. Select **"Production"** as your dataset name
5. Choose a region (e.g., US or EU)
6. Note down your **Project ID** (you'll see it in the project settings)

---

## Step 2: Deploy the Sanity Studio

The Studio is located in the `studio/` folder and deploys separately to avoid any conflicts with the main website.

### From your local machine:

1. Navigate to the studio folder:
   ```bash
   cd studio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env.local` with your Sanity credentials:
   ```bash
   SANITY_STUDIO_PROJECT_ID=your_project_id_from_step_1
   SANITY_STUDIO_DATASET=production
   ```

4. Deploy the Studio to Sanity hosting:
   ```bash
   npm run deploy
   ```

5. When prompted:
   - Choose a unique studio hostname (e.g., `mitratech-blog`)
   - This creates a URL like: `https://mitratech-blog.sanity.studio`

6. **Save this URL!** This is where you'll manage blog posts.

**Note:** You only need to deploy the Studio once. It stays separate from your main website deployments.

---

## Step 3: Generate a Sanity API Token

1. In your Sanity project dashboard at [sanity.io/manage](https://www.sanity.io/manage), go to **Settings → API**
2. Click **"+ Add API Token"**
3. Give it a name like "Website & Migration"
4. Select **"Editor"** permissions (read + write)
5. Click **"Add Token"** and copy the token (you won't see it again!)

---

## Step 4: Configure Vercel Environment Variables

Add these environment variables in the **Vercel Dashboard**:

1. Go to your Vercel project settings
2. Navigate to **Settings → Environment Variables**
3. Add the following variables for **Production**, **Preview**, and **Development**:

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your project ID from Step 1 | Public Sanity project identifier |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | Sanity dataset name |
| `SANITY_WRITE_TOKEN` | Your token from Step 3 | For migration script (keep secret!) |
| `SANITY_REVALIDATE_SECRET` | Generate a random string | For webhook security |

**How to generate a random secret:**
```bash
# On your local machine or use an online UUID generator
node -e "console.log(require('crypto').randomUUID())"
```

4. After adding variables, trigger a new deployment:
   - Go to **Deployments** tab
   - Click **"..."** on the latest deployment
   - Select **"Redeploy"**

---

## Step 5: Run the Migration Script

This imports your 6 existing blog posts into Sanity. Run this **once** after setting up environment variables:

### On your local machine:

1. From the project root (not the `studio/` folder):
   ```bash
   cd ..  # if you're still in studio/
   ```

2. Create a `.env.local` file in the root with your Sanity credentials:
   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_WRITE_TOKEN=your_write_token
   ```

3. Run the migration script:
   ```bash
   npm run migrate:blog
   ```

4. You should see output like:
   ```
   Starting blog post migration to Sanity...
   
   ✓ Imported post: "How to Automate 85% of Customer Support..."
   ✓ Imported post: "B2B Lead Generation in 2026..."
   ...
   
   Migration complete!
   ```

**Note:** The script is idempotent—you can run it multiple times safely. It checks for existing posts by slug and skips duplicates.

---

## Step 6: Access the Sanity Studio

Open your Studio URL from Step 2 (e.g., `https://mitratech-blog.sanity.studio`) and log in with your Sanity account. You should see all your imported blog posts!

---

## Step 7: Create and Publish a New Blog Post

1. In the Sanity Studio, click **"+ Create"** → **"Blog Post"**
2. Fill in the required fields:
   - **Title:** Your blog post title
   - **Slug:** Click "Generate" to auto-generate from title, or customize
   - **Excerpt:** Short summary (2-3 sentences)
   - **Content:** Full post content in markdown format
   - **Cover Image:** Upload an image or provide an external URL in "Cover Image URL (Fallback)"
   - **Category:** Select from dropdown (AI & Products, Development, Design, Marketing)
   - **Author Name:** Pre-filled as "Ajay Arakh"
   - **Author Role:** Pre-filled as "Founder & Director, MitraTech"
   - **Author Avatar:** Upload your photo, or leave empty for the logo default
   - **Published Date:** Select the publication date
   - **Read Time:** e.g., "5 min read"
   - **Featured:** Toggle on/off (featured posts appear first)
   - **Tags:** Add relevant tags (e.g., "Next.js", "SEO", "AI")

3. Click **"Publish"** in the top right

4. Your post will appear on the live site within **5 minutes** (automatic revalidation) or **instantly** if you trigger the webhook (see below)

---

## Step 8: Instant Publishing with Webhook (Optional)

For instant updates without waiting 5 minutes:

1. In your Sanity project dashboard at [sanity.io/manage](https://www.sanity.io/manage), go to **Settings → Webhooks**
2. Click **"Create webhook"**
3. Configure:
   - **Name:** Vercel Revalidation
   - **URL:** `https://www.mitratechservices.in/api/revalidate?secret=YOUR_REVALIDATE_SECRET`
   - Replace `YOUR_REVALIDATE_SECRET` with the value you set in Step 4
   - **Dataset:** production
   - **Trigger on:** Create, Update, Delete
   - **Filter:** `_type == "post"`
4. Click **"Save"**

Now, whenever you publish, update, or delete a post in Sanity, the live site updates instantly!

---

## Uploading Author Photo

To replace the default logo avatar with your real photo:

1. In the Sanity Studio, open any blog post
2. Scroll to the **"Author"** section
3. Click the **"Avatar"** field
4. Upload your photo (recommended: 400x400px, square crop)
5. Publish the post

This avatar will be used for all future posts. If you want to update existing posts, open each one and save again.

---

## Writing Tips

### Markdown Formatting

The content field supports **markdown**. Here are some examples:

```markdown
# Main Heading
## Subheading

**Bold text**
*Italic text*

- Bullet point 1
- Bullet point 2

1. Numbered list
2. Another item

[Link text](https://example.com)

> Blockquote
```

### SEO Best Practices

- **Title:** 50-60 characters, include target keyword
- **Excerpt:** 140-160 characters, compelling summary
- **Cover Image:** Use high-quality images (1200x630px recommended)
- **Tags:** 3-7 relevant tags per post
- **Content:** 800+ words for better search rankings

---

## Troubleshooting

### Posts not appearing on the site
- Wait 5 minutes for automatic revalidation
- Check if the post is published (not draft) in Sanity Studio
- Verify environment variables are set in Vercel

### Migration script errors
- Ensure `SANITY_WRITE_TOKEN` is set and has Editor permissions
- Check that the token hasn't expired
- Make sure you're in the project root (not the `studio/` folder)
- Run `npm install` before running the script

### Images not showing
- If using an external image URL, paste it in the "Cover Image URL (Fallback)" field
- If uploading, ensure the image is under 4MB

### Can't access Sanity Studio
- Make sure you deployed the Studio (Step 2)
- Verify you're logged in to sanity.io
- Check that the Studio URL is correct
- Try clearing browser cache and logging in again

### Need to redeploy the Studio
If you make changes to the Studio schema or configuration:
```bash
cd studio
npm run deploy
```

---

## Studio Architecture

The Studio is located in the `studio/` folder and has:
- Its own `package.json` with Sanity v3 (compatible with React 18)
- Separate from the main website to avoid dependency conflicts
- Deployed independently to `*.sanity.studio` hosting
- Only needs to be deployed once (unless you change the schema)

---

## Need Help?

If you encounter any issues, contact the development team or refer to the [Sanity documentation](https://www.sanity.io/docs).

Happy blogging! 🚀

