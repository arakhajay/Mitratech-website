# Blog CMS Setup Guide

This guide will help you set up Sanity CMS to manage blog posts on www.mitratechservices.in.

## Overview

The blog now uses **Sanity** as a headless CMS, allowing you to add, edit, and publish blog posts without touching code. You'll manage content through Sanity's hosted Studio at [sanity.io/manage](https://www.sanity.io/manage), which provides a secure, professional content management interface.

## Features

- ✅ Sanity hosted Studio for managing posts (accessed at sanity.io/manage)
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

## Step 2: Install the Sanity CLI and Set Up the Schema

On your local machine or development environment:

1. Install the Sanity CLI globally:
   ```bash
   npm install -g @sanity/cli
   ```

2. Navigate to your project directory:
   ```bash
   cd mitra-tech
   ```

3. Initialize Sanity in the project (this creates the schema files):
   ```bash
   sanity init --project-id YOUR_PROJECT_ID --dataset production
   ```
   
   When prompted:
   - Use the existing schema files in `sanity/schemas/`
   - Skip creating a new schema
   - The schema is already configured with the blog post structure

4. Deploy the schema to Sanity:
   ```bash
   cd sanity
   sanity schema deploy
   ```

---

## Step 3: Generate a Sanity API Token

1. In your Sanity project dashboard at [sanity.io/manage](https://www.sanity.io/manage), go to **Settings → API**
2. Click **"+ Add API Token"**
3. Give it a name like "Migration Script"
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
| `SANITY_WRITE_TOKEN` | Your token from Step 3 | For migration script only (keep secret!) |
| `SANITY_REVALIDATE_SECRET` | Generate a random string | For webhook security (e.g., use a UUID) |

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

1. Clone the repository (if not already):
   ```bash
   git clone <your-repo-url>
   cd mitra-tech
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file with your Sanity credentials:
   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_WRITE_TOKEN=your_write_token
   ```

4. Run the migration script:
   ```bash
   npm run migrate:blog
   ```

5. You should see output like:
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

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your "MitraTech Blog" project
3. Click **"Open Studio"** or **"Content"** in the sidebar
4. You should see all your imported blog posts in the Studio!

**Alternatively**, you can access the Studio directly at:
```
https://your-project-id.sanity.studio/desk
```

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

1. In your Sanity project dashboard, go to **Settings → Webhooks**
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
- Run `npm install` before running the script

### Images not showing
- If using an external image URL, paste it in the "Cover Image URL (Fallback)" field
- If uploading, ensure the image is under 4MB

### Can't access Sanity Studio
- Make sure you're logged in to sanity.io
- Verify you have access to the project
- Check that the project ID is correct

---

## Why Hosted Studio?

We use Sanity's hosted Studio (at sanity.io/manage) instead of an embedded Studio for several reasons:

1. **Better Performance:** No Studio bundle in your production build
2. **Automatic Updates:** Sanity maintains and updates the Studio
3. **Better Security:** Isolated from your production site
4. **Professional Features:** Access to all Studio plugins and features
5. **Mobile Access:** Manage content from any device with a browser

---

## Need Help?

If you encounter any issues, contact the development team or refer to the [Sanity documentation](https://www.sanity.io/docs).

Happy blogging! 🚀

