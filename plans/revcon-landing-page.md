# Revolution Conference - Landing Page Plan

## Overview
Build a modern, responsive landing page for **Revolution Conference** — a tech conference in Philadelphia. Start with a polished single-page site, designed to scale into a full multi-page conference site as details are confirmed.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel
- **Backend**: Static for now (Supabase-ready architecture)
- **Font/Icons**: Google Fonts + Lucide React icons

## Site Structure (Phase 1 - Landing Page)

### Sections

1. **Navigation**
   - Sticky top nav with logo/wordmark
   - Links to page sections (smooth scroll)
   - CTA button ("Get Notified" / "Stay Updated")

2. **Hero**
   - Event name: "Revolution Conference"
   - Tagline (e.g., "Where Philly's tech scene comes together")
   - Date: "2025 | Philadelphia, PA" (update when confirmed)
   - Primary CTA button
   - Bold, eye-catching visual treatment

3. **About**
   - What is RevCon?
   - Who it's for (developers, designers, founders, tech enthusiasts)
   - What to expect (talks, workshops, networking)

4. **Topics / Tracks** (placeholder content)
   - Grid of topic cards (AI/ML, Web Dev, DevOps, Design, etc.)
   - Each card: icon, title, short description

5. **Speakers** (placeholder/coming soon)
   - "Speakers announced soon" with email signup CTA
   - Grid layout ready for speaker cards when available

6. **Venue / Location**
   - "Philadelphia, PA" with placeholder for specific venue
   - Embedded map or city imagery
   - Travel/transportation notes (TBD)

7. **Newsletter / Interest Signup**
   - Email capture form
   - Phase 1: mailto or simple form (no backend)
   - Phase 2: Supabase-powered signup with confirmation

8. **Sponsors** (placeholder)
   - "Interested in sponsoring?" CTA
   - Logo grid ready for sponsor images

9. **Footer**
   - Social links (Twitter/X, LinkedIn, etc.)
   - Contact email
   - Copyright

### Design Direction
- **Vibe**: Bold, modern, tech-forward — Philadelphia energy
- **Color palette**: Dark base with vibrant accent colors (revolutionary red/blue or modern neon accents)
- **Typography**: Clean sans-serif (Inter or similar)
- **Animations**: Subtle scroll animations (framer-motion) for polish

## File Structure
```
revcon/
  src/
    app/
      layout.tsx          # Root layout, fonts, metadata
      page.tsx            # Landing page (imports sections)
      globals.css         # Tailwind + custom styles
    components/
      nav.tsx             # Sticky navigation
      hero.tsx            # Hero section
      about.tsx           # About section
      topics.tsx          # Topics/tracks grid
      speakers.tsx        # Speakers section (placeholder)
      venue.tsx           # Venue/location section
      signup.tsx          # Newsletter signup form
      sponsors.tsx        # Sponsors section
      footer.tsx          # Footer
    lib/
      constants.ts        # Event details, social links, etc.
  public/
    images/               # Logo, hero images, etc.
  tailwind.config.ts
  next.config.ts
  package.json
```

## Phase 2 (Future - as details are confirmed)
- **Speaker pages**: Individual speaker bios and talk descriptions
- **Schedule page**: Full conference schedule with time slots
- **Ticket sales**: Integration with ticketing platform or custom Supabase solution
- **Supabase backend**: Newsletter signups, speaker submissions, waitlist
- **Blog/updates**: News section for announcements
- **Sponsor tiers**: Detailed sponsor information and packages

## Implementation Steps
1. Initialize Next.js project with Tailwind CSS
2. Set up project structure and constants file
3. Build navigation component
4. Build hero section
5. Build about section
6. Build topics grid
7. Build speakers placeholder section
8. Build venue section
9. Build newsletter signup section
10. Build sponsors placeholder section
11. Build footer
12. Add scroll animations (framer-motion)
13. SEO metadata and Open Graph tags
14. Deploy to Vercel
15. Set up custom domain (when ready)

## Open Questions for Snax
- Any existing branding (logo, colors, fonts)?
- Preferred tagline or event description?
- Any specific topics/tracks to feature?
- Social media accounts to link?
- Target date for the site to go live?
