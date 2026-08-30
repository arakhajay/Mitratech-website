# MitraTech website — Google-ready change list

**Site:** https://www.mitratechservices.in/  
**Repo:** https://github.com/arakhajay/Mitratech-website  
**Local:** `D:\\Python-2025\\Antigravity\\Mitra-Tech`  
**Audited:** 27–28 Aug 2026  
**Do not submit to Google Search Console until Must-fix is done and live.**

Legal name to use everywhere: **Mitratech Services (OPC) Pvt Ltd**  
Brand: **MitraTech**  
Do **not** confuse with US legal-tech company **Mitratech** (`mitratech.com`).

---

## Must-fix (blockers)

### 1. Stop pointing at the other Mitratech

`robots.txt` currently has:

```
Sitemap: https://mitratech.com/sitemap.xml
```

That URL is the US company’s Yoast sitemap. Change to:

```
User-Agent: *
Allow: /
Disallow: /thank-you

Sitemap: https://www.mitratechservices.in/sitemap.xml
```

Footer + Organization JSON-LD `sameAs` currently link:

- `https://twitter.com/mitratech`
- `https://linkedin.com/company/mitratech`
- `https://instagram.com/mitratech`
- `https://github.com/mitratech`

Those are the US company. **Remove them** until you have MitraTech’s own profiles. Then put only real URLs in `sameAs`.

Organization JSON-LD `url` and `logo` must use **www**:

- `https://www.mitratechservices.in/`
- `https://www.mitratechservices.in/logo.png` (must 200)

---

### 2. Strip unverifiable social proof before Google sees it

If these are not real paying clients / real metrics, take them down:

**Homepage logo marquee:** ACME, APEX LABS, NOVA, VORTEX, STARLIGHT, KRYPTON, ELEVATE

**Portfolio / case studies (and sitemap slugs):**

| Slug | Claimed client | Problem |
|---|---|---|
| `/portfolio/fintech-saas-dashboard` | Apex Financial Labs / ApexPay | Demo client; live link `apexpay-demo.com` NXDOMAIN |
| `/portfolio/luxe-ecommerce-store` | Verve Apparel Group | Demo; `verve-eyewear.demo` |
| `/portfolio/ai-healthtech-platform` | Pulse BioLabs / PulseAI | Demo; HIPAA claims |
| `/portfolio/b2b-saas-landing-page` | CloudVault Inc. | Demo |
| `/portfolio/brand-identity-vortex` | Vortex Intelligence | “$12M Series A” unverifiable |
| `/portfolio/google-ads-ppc-growth` | Krypton Medical Supplies | Demo |

**Testimonial:** David Vance, CTO, Apex Financial Labs — remove unless real and permissioned.

**Homepage stats** (only keep what you can prove):

- 100+ projects
- 99% client satisfaction
- 5+ years experience
- About timeline “2023: 50+ global clients”

Google treats fabricated reviews/portfolio as deceptive. Empty portfolio is safer than fake case studies.

---

### 3. One city, one legal name

| Place | Currently says |
|---|---|
| Contact, footer, Organization schema | Handewadi, Hadapsar, Pune, MH 411028 |
| FAQ JSON-LD (homepage + `/faq`) | Headquarters in **Bengaluru** |
| Privacy policy | **MitraTech Digital Solutions** |
| Footer / most copy | Mitratech Services (OPC) Pvt Ltd |

**Fix:** Pune everywhere. Privacy + terms use the OPC legal name. Do not invent a building number; add it only if it is the registered office.

When you have them, add to footer + schema:

- CIN
- GSTIN
- Full registered office
- Director / founder name (Ajay Arakh) on `/about`

---

### 4. Canonical host = www

Live host is `https://www.mitratechservices.in/` (apex 308s to www).

- Add `rel="canonical"` on every indexable page: `https://www.mitratechservices.in{path}`
- Rewrite **all** sitemap `<loc>` to www (today they are apex)
- Homepage sitemap loc should match the live URL (include trailing `/` if that is what www serves)
- `og:url` is currently **always** `https://mitratechservices.in` (homepage) even on inner pages. Set per-page www URL.
- JSON-LD `url` / `logo` → www

---

### 5. Favicon and logo (both 404 today)

| URL | Status |
|---|---|
| `/favicon.ico` | 404 |
| `/logo.png` | 404 (schema points here) |
| `/apple-touch-icon.png` | 404 |

Add real branded files that 200. Point Organization `logo` at the www URL that works. Stop using the Unsplash office photo as OG image; use a branded 1200×630 on your domain.

---

### 6. Unique titles and meta descriptions

These pages **clone the homepage title + description**. Give each its own:

- `/blog`
- `/contact`
- `/faq`
- `/portfolio`
- `/pricing`

**About title bug:**  
`About Us | Mitratech Services (OPC) Pvt Ltd | Mitratech Services (OPC) Pvt Ltd`  
→ one company name, ~50–60 characters.

OG title/description/image are also homepage-global on inner pages. Set per page.

Suggested title pattern: `{Page} | MitraTech` (keep under ~60 chars).

---

### 7. `/thank-you` must be noindex

`robots.txt` Disallow is not the same as noindex. Add:

```html
<meta name="robots" content="noindex,nofollow">
```

Keep it out of the sitemap (already absent — good).

---

### 8. Nav and tel links

These are `<button>`s, not links. Make them `<a href>`:

- Services → `/services`
- Products → `/products`
- Get Free Quote / Get Free Consultation → `/contact`

Tel is `tel:+91 8600352657` (space). Use `tel:+918600352657`.

---

### 9. Language

`html lang="en"` and `og:locale=en_US` on an India OPC. Use:

- `lang="en-IN"`
- `og:locale` = `en_IN`

---

### 10. FAQ answers must be in the HTML

Homepage and `/faq`: only the first answer is in the HTML. Q2–Q5 are accordion buttons with **no answer text** for crawlers (answers exist only in JSON-LD).

Render every answer in the DOM. Location answer must say **Pune**, not Bengaluru.

---

### 11. Analytics hook (no fake ID)

No GA4 / GTM / `google-site-verification` on the site today (pricing copy still claims “GA4 & GTM Setup”).

- Read measurement ID from env (`NEXT_PUBLIC_GA_ID` or GTM). If unset, render nothing.
- Add Search Console verification after Must-fix is live.
- Cookie / DPDP notice once tags collect data.

---

## Should-fix (quality / trust)

### Legal pages are too thin

`/privacy` and `/terms` are ~3 short sections, “Last updated: February 2026”.

Expand privacy for a contact form that collects name, email, phone:

- Correct legal name
- What you collect and why
- Retention
- Grievance / DPDP contact
- Cookies
- GSTIN when you have it

Terms: IP, payment, refunds, SLA — not three clauses. Have a human review before calling it legal advice.

Optional alias: `/privacy-policy` → `/privacy` (common path currently 404s).

### E-E-A-T

- `/about` has no founder. Add Ajay Arakh, role, Pune, photo if real.
- Blog authors Rohan Kapoor, Ananya Deshmukh, Priya Nair — only keep if they are real people. Add `Article` / `BlogPosting` schema on posts. Today `og:type=website` on posts.
- Precise address (building/shop) if you want Google Business Profile.
- `ProfessionalService` `priceRange: "$$$"` clashes with ₹25k starting prices. Drop or use INR.

### Sitemap hygiene

**Keep after meta/canonical/host fixes:**  
`/` `/about` `/services` + 6 service URLs `/contact` `/privacy` `/terms` `/faq` `/pricing` (if prices are real)

**Keep only if products are real and names are yours:**  
`/products` `/products/zivox-agent` `/products/leadspark`  
(`zivoxagent.com` did not resolve from audit; LeadSpark app is a Vercel login URL.)

**Remove from sitemap until real:**  
`/portfolio` + 6 case-study slugs, `/blog` + 3 posts if they are stock/demo

**Never include:** `/thank-you`, 404s, `mitratech.com` URLs, `*.demo` live sites

### Other

- Scroll-animated sections hide content until scroll — make critical copy visible without JS animation for crawlers.
- Unsplash srcsets go to 3840w. Conflict with “95+ Lighthouse / sub-second” claims. Compress or drop the claims.
- `BreadcrumbList` schema.
- LocalBusiness + `geo` once you have a precise Pune address.

---

## After Must-fix is live

1. Google Search Console → property `https://www.mitratechservices.in/`
2. Verify (HTML tag or DNS)
3. Submit sitemap `https://www.mitratechservices.in/sitemap.xml`
4. URL inspection on Home, `/services`, `/contact`, `/about` — request indexing
5. Google Business Profile for the **Pune** address (same NAP as the site)
6. Confirm `site:mitratechservices.in` (currently zero results — good, first impression is still clean)

Do **not** request indexing while robots.txt still points at mitratech.com.

---

## Still needed from you (cannot invent)

1. Which clients, stats, and social accounts are real
2. CIN, GSTIN, full registered office
3. Founder bio + photo permission
4. Real GA4 / GTM ID when you want analytics
5. Your own Twitter / LinkedIn / Instagram / GitHub URLs

---

## Suggested implementation order

1. `robots.txt` sitemap URL + remove US `sameAs` / socials  
2. Favicon + `logo.png`  
3. www canonical + sitemap locs + per-page `og:url`  
4. Unique titles on the five cloned pages + About title  
5. Privacy legal name; FAQ HTML + Pune  
6. Nav `<a href>` + tel  
7. Take down fake logos / portfolio / testimonial / stats  
8. `noindex` on `/thank-you`  
9. Deploy, then Search Console

A cloud agent was also started on this repo for the technical items. If you fix locally, pull `main` first and avoid conflicting with that PR if it lands.
