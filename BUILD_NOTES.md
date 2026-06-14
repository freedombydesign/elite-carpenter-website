# Elite Carpenter Programmatic SEO - Build Notes

**Project:** Programmatic SEO for Elite Carpenter Home Renovation
**Build Date:** June 14, 2026
**Status:** Phase 1 Complete (30 pages live)
**Production URL:** https://www.elitecarpenterreno.ca

---

## Summary

Successfully built and deployed 30 new SEO-optimized pages to expand Elite Carpenter's organic search presence across Hamilton and surrounding areas. All pages follow anti-doorway page strategy with genuinely unique local content.

---

## Pages Created

### Phase 1: Service + Location Pages (20 pages)

Location-specific service pages for 5 cities × 4 services:

**Cities:** Dundas, Burlington, Ancaster, Stoney Creek, Grimsby
**Services:** Kitchen Renovation, Bathroom Renovation, Basement Renovation, Flooring Installation

#### Kitchen Renovation Pages (5)
- ✅ `/kitchen-renovation-dundas.html`
- ✅ `/kitchen-renovation-burlington.html`
- ✅ `/kitchen-renovation-ancaster.html`
- ✅ `/kitchen-renovation-stoney-creek.html`
- ✅ `/kitchen-renovation-grimsby.html`

#### Bathroom Renovation Pages (5)
- ✅ `/bathroom-renovation-dundas.html`
- ✅ `/bathroom-renovation-burlington.html`
- ✅ `/bathroom-renovation-ancaster.html`
- ✅ `/bathroom-renovation-stoney-creek.html`
- ✅ `/bathroom-renovation-grimsby.html`

#### Basement Renovation Pages (5)
- ✅ `/basement-renovation-dundas.html`
- ✅ `/basement-renovation-burlington.html`
- ✅ `/basement-renovation-ancaster.html`
- ✅ `/basement-renovation-stoney-creek.html`
- ✅ `/basement-renovation-grimsby.html`

#### Flooring Installation Pages (5)
- ✅ `/flooring-installation-dundas.html`
- ✅ `/flooring-installation-burlington.html`
- ✅ `/flooring-installation-ancaster.html`
- ✅ `/flooring-installation-stoney-creek.html`
- ✅ `/flooring-installation-grimsby.html`

### Educational Content Pages (10 pages)

Authority-building informational pages:

- ✅ `/basement-permit-ontario.html` - Ontario basement permit requirements
- ✅ `/best-basement-flooring.html` - Basement flooring comparison guide
- ✅ `/egress-window-requirements-ontario.html` - OBC egress window specs
- ✅ `/how-long-does-renovation-take.html` - Renovation timeline guide
- ✅ `/what-does-general-contractor-do.html` - GC role explanation
- ✅ `/renovating-century-home-hamilton.html` - Heritage home renovation guide
- ✅ `/basement-renovation-cost-hamilton.html` - Basement cost breakdown
- ✅ `/kitchen-renovation-cost-hamilton.html` - Kitchen cost breakdown
- ✅ `/installation-only-kitchen.html` - Ikea/Home Depot install services
- ✅ `/wsib-insurance-contractor-ontario.html` - WSIB insurance guide

---

## Technical Implementation

### Anti-Doorway Page Strategy

Each page includes **genuinely unique local content** specific to the city:

**Example - Dundas:**
- Specific neighborhoods: Downtown Dundas, Pleasant Valley, University Gardens
- Housing stock: Heritage Victorian homes (1920s-1940s)
- Local considerations: Stone foundations, escarpment drainage
- Real project reference: Greenmeadow Way basement project

**Example - Burlington:**
- Specific neighborhoods: South Burlington, Roseland, Alton Village
- Housing stock: Post-WWII detached homes
- Local considerations: Lake Ontario humidity, waterfront moisture control

**Example - Grimsby:**
- Specific neighborhoods: Grimsby Beach, Dorchester Estates, Nelles Estates
- Housing stock: Victorian cottages, lakefront vs mountain builds
- Local considerations: Lakefront moisture vs escarpment drainage

### SEO Elements

All pages include:
- ✅ Unique meta titles (city + service specific)
- ✅ Unique meta descriptions (150-160 characters)
- ✅ Unique H1 tags with city highlighted
- ✅ Schema markup (Service type for location pages, Article for educational)
- ✅ Canonical URLs
- ✅ Meta robots: index, follow
- ✅ Internal linking to main service pages and contact
- ✅ Consistent NAP: (416) 526-4116 | info@elitecarpenterreno.ca

### Design Consistency

All pages follow existing site design:
- Same HTML/CSS structure as live site
- Inline CSS (no external stylesheets)
- Same header/footer/navigation
- Same color scheme (navy, blue, cream)
- Same fonts (Playfair Display + DM Sans)
- Responsive design (mobile breakpoints)
- Same CTA sections

---

## Internal Linking Strategy

### From New Pages → Existing Pages

All new pages link to:
- `/contact.html` - Multiple CTAs per page
- `/index.html` - Logo and main nav
- Main service pages when relevant:
  - `/kitchen.html`
  - `/bathroom.html`
  - `/basement.html`
  - `/flooring.html`

### Cross-Links Between New Pages

Educational pages cross-link to:
- Relevant service+location pages
- Other educational pages where contextually relevant

Example: `basement-permit-ontario.html` links to:
- All basement renovation city pages
- `egress-window-requirements-ontario.html`
- `basement-renovation-cost-hamilton.html`

### ⚠️ NEEDS INPUT: Links FROM Existing Pages

The following existing pages should be updated to link to new content:

**From `/basement.html`:**
- Add links to 5 basement city pages (Dundas, Burlington, Ancaster, Stoney Creek, Grimsby)
- Add link to `basement-permit-ontario.html`
- Add link to `basement-renovation-cost-hamilton.html`

**From `/kitchen.html`:**
- Add links to 5 kitchen city pages
- Add link to `kitchen-renovation-cost-hamilton.html`
- Add link to `installation-only-kitchen.html`

**From `/bathroom.html`:**
- Add links to 5 bathroom city pages

**From `/flooring.html`:**
- Add links to 5 flooring city pages
- Add link to `best-basement-flooring.html`

---

## Sitemap and robots.txt

### Sitemap Updates

`/sitemap.xml` updated with all 30 new pages:
- Phase 1 service+location pages (priority: 0.7)
- Educational content pages (priority: 0.6)
- All pages set to monthly changefreq
- Last modified: 2026-06-14

### robots.txt

Created `/robots.txt`:
- Allows all crawlers
- Disallows `/api/` endpoints
- Points to sitemap at https://elitecarpenterreno.ca/sitemap.xml

---

## Content That Still Needs to Be Created

### Case Study Page (Requires User Input)

**File:** `case-study-basement-renovation-dundas.html`

**Status:** ⚠️ [NEEDS_INPUT] Blocked pending:
1. **Client permission** from Joe Kim & Sabina Fritz (Greenmeadow Way project)
2. **Project photos** (before/after, construction progress)
3. **Testimonial text** or approval to quote from existing testimonial
4. **Project details:**
   - Exact square footage of basement
   - Timeline (start date → completion date)
   - Specific features added (# of bedrooms, bathroom details, etc.)
   - Any challenges overcome during the project

Once client approval and materials are received, create case study page following this structure:
- Hero with before/after photos
- Project overview (scope, timeline, budget bracket)
- Challenges and solutions
- Client testimonial (quoted)
- Photo gallery
- CTA to contact for similar projects
- Schema markup: Article or CreativeWork type

### Phase 2: Additional Cities (Future)

**Not yet built - requires research and data verification:**

Potential expansion cities (mentioned in original data but marked [NEEDS_RESEARCH]):
- Waterdown
- Oakville
- St. Catharines
- Niagara Falls
- Milton

Before creating Phase 2 pages:
1. ✅ **Verify service area reach** - Confirm Elite Carpenter actively services these cities
2. ✅ **Gather local data:**
   - Specific neighborhoods in each city
   - Housing stock characteristics (era, style, common issues)
   - Local considerations (topography, climate, building codes)
3. ✅ **Ensure genuine uniqueness** - Each page must have genuinely unique local content

If approved, Phase 2 would add **20 more pages** (4 services × 5 cities).

---

## Items Requiring Clarification

### 1. WSIB Insurance Status

**Page:** `/wsib-insurance-contractor-ontario.html`

**Current state:** Page explains WSIB in general terms and states Elite Carpenter maintains proper coverage.

**⚠️ [NEEDS_INPUT]:** Specific WSIB details to add (if desired):
- WSIB account number (for transparency)
- WSIB clearance certificate availability
- Specific coverage amounts
- Whether to offer WSIB cert download/request

**Recommendation:** Current general approach is safe. Can be enhanced with specific details if Sheldon wants to emphasize compliance.

### 2. Pricing Information

**Current approach:** All cost pages (kitchen-renovation-cost-hamilton.html, basement-renovation-cost-hamilton.html) provide:
- Itemized breakdowns of what's included
- Factors that affect cost
- General budget guidance
- **No specific dollar amounts**

**⚠️ [NEEDS_INPUT]:** If Sheldon wants to add specific pricing:
- Typical ranges for each service type
- Per-square-foot estimates
- Minimum project sizes

**Recommendation:** Keep current approach (no specific numbers). Encourages quote requests and avoids pricing outdating or scaring away qualified leads.

### 3. Service Area Boundaries

**Current approach:** All pages state services for "Hamilton, Dundas, Burlington, Ancaster, Stoney Creek, and Grimsby" without distance limits.

**⚠️ [NEEDS_INPUT]:** Confirm service area boundaries:
- Do you travel beyond these 6 cities?
- Maximum drive time or radius from Hamilton?
- Any areas you specifically don't serve?

**Recommendation:** Current approach is safe. Can add "and surrounding areas" if desired.

---

## Git Commits and Deployment

All work committed to `main` branch with descriptive commit messages:

```
2cc3bf7 - Add redesigned client brief pages with dark mode support (existing)
335d4bf - Add 20 Phase 1 programmatic SEO pages for service+location coverage
1f62a32 - Update sitemap.xml and add robots.txt for SEO
34a5d04 - Add 10 educational content pages for SEO and authority building
dd0800a - Update sitemap.xml with 10 educational content pages
```

All pages deployed to production: **https://www.elitecarpenterreno.ca**

---

## Performance and SEO Considerations

### Page Speed
- All pages use inline CSS (no external stylesheets)
- Minimal JavaScript (header scroll effect only)
- Google Fonts loaded with preconnect
- No large images (SVG icons only)
- Clean, semantic HTML

### Accessibility
- Semantic HTML5 structure
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images (SVG icons have semantic meaning)
- Sufficient color contrast (navy on cream, white on navy)
- Responsive design for mobile users

### Schema Markup
- Service schema for location pages (with city-specific areaServed)
- Article schema for educational content
- LocalBusiness schema on main pages (inherited from existing pages)

---

## Next Steps

### Immediate (Optional)
1. ✅ **Add internal links from existing service pages** to new city pages (see Internal Linking Strategy section)
2. ✅ **Submit sitemap to Google Search Console** for faster indexing
3. ✅ **Monitor Google Search Console** for indexing status and any issues

### Short-term (If desired)
1. ✅ **Case study page** - Once client permission and photos are obtained
2. ✅ **Add testimonials section** to city pages if more customer testimonials become available
3. ✅ **Add photo galleries** to city pages showing local projects (with client permission)

### Long-term (Future expansion)
1. ✅ **Phase 2 cities** - Waterdown, Oakville, St. Catharines, Niagara Falls, Milton (20 more pages)
2. ✅ **Additional services** - Deck building, trim carpentry, custom carpentry (if desired)
3. ✅ **Seasonal content** - "Winter renovation tips", "Spring home refresh", etc.
4. ✅ **FAQ pages** - Aggregate common questions by service type

---

## Contact for Questions

All pages reference:
- **Phone:** (416) 526-4116
- **Email:** info@elitecarpenterreno.ca
- **Contact form:** /contact.html

---

## Files Created

### HTML Pages (30 total)
```
basement-renovation-ancaster.html
basement-renovation-burlington.html
basement-renovation-dundas.html
basement-renovation-grimsby.html
basement-renovation-stoney-creek.html

bathroom-renovation-ancaster.html
bathroom-renovation-burlington.html
bathroom-renovation-dundas.html
bathroom-renovation-grimsby.html
bathroom-renovation-stoney-creek.html

kitchen-renovation-ancaster.html
kitchen-renovation-burlington.html
kitchen-renovation-dundas.html
kitchen-renovation-grimsby.html
kitchen-renovation-stoney-creek.html

flooring-installation-ancaster.html
flooring-installation-burlington.html
flooring-installation-dundas.html
flooring-installation-grimsby.html
flooring-installation-stoney-creek.html

basement-permit-ontario.html
basement-renovation-cost-hamilton.html
best-basement-flooring.html
egress-window-requirements-ontario.html
how-long-does-renovation-take.html
installation-only-kitchen.html
kitchen-renovation-cost-hamilton.html
renovating-century-home-hamilton.html
what-does-general-contractor-do.html
wsib-insurance-contractor-ontario.html
```

### Supporting Files
```
sitemap.xml (updated)
robots.txt (created)
BUILD_NOTES.md (this file)
```

---

**Build completed:** June 14, 2026
**Built by:** Claude Sonnet 4.5
**Status:** ✅ All Phase 1 work complete and live
