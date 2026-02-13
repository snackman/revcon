# RevCon Handoff

## Live Site
- **Production**: https://revcon.tech (once DNS propagates)
- **Vercel**: https://revcon-sigma.vercel.app
- **Repo**: https://github.com/snackman/revcon

## Architecture
- **Framework**: Next.js 15 (App Router) + Tailwind CSS v4
- **Hosting**: Vercel (auto-deploys from master)
- **Forms**: Next.js API routes → Google Sheets API
- **Domain**: revcon.tech (Namecheap DNS → Vercel)

## Google Sheets Integration
- **Sheet**: https://docs.google.com/spreadsheets/d/18naTh1tqYUDM3gLIhETVuUIeky1O0kpwMSlCxwYC6-g
- **Service Account**: clod-307@clod-485916.iam.gserviceaccount.com
- **Tabs**:
  - `Newsletter` — Email signups (Email, Submitted At)
  - `Speaker Applications` — Speaker form (Name, Email, Topic, Bio, Submitted At)

## Environment Variables (Vercel)
Two env vars need to be set in Vercel project settings:
1. `GOOGLE_SERVICE_ACCOUNT_KEY` — Full JSON service account key
2. `REVCON_SHEET_ID` — `18naTh1tqYUDM3gLIhETVuUIeky1O0kpwMSlCxwYC6-g`

## Key Files
| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Main page, modal state management |
| `src/lib/constants.ts` | Event details, topics, nav links |
| `src/lib/sheets.ts` | Google Sheets API write functions |
| `src/app/api/newsletter/route.ts` | POST /api/newsletter |
| `src/app/api/speaker/route.ts` | POST /api/speaker |
| `src/components/newsletter-modal.tsx` | Email signup modal |
| `src/components/speaker-modal.tsx` | Speaker application modal |
| `src/components/modal.tsx` | Reusable modal wrapper |

## Section Order
1. Nav (sticky)
2. Hero (Independence Hall bg)
3. About ("What is RevCon?")
4. Topics (AI, Blockchain, Medicine, Robotics)
5. Stay in the Loop (newsletter CTA)
6. Speakers (revolutionary figures placeholder)
7. Divider (Liberty Bell + quote)
8. Sponsors
9. Venue (Philly skyline)
10. Footer

## Images
| Image | Source | Usage |
|-------|--------|-------|
| independence-hall.jpg | Pexels (free) | Hero background |
| liberty-bell.jpg | User provided | Divider section |
| philly-skyline.jpg | User provided | Venue section |
| ben-franklin.jpg | Wikimedia (public domain) | Speaker placeholder |
| betsy-ross.jpg | Wikimedia (public domain) | Speaker placeholder |
| thomas-jefferson.jpg | Wikimedia (public domain) | Speaker placeholder |
| thomas-paine.jpg | Wikimedia (public domain) | Speaker placeholder |

## Next Steps
- [ ] Set Vercel env vars (GOOGLE_SERVICE_ACCOUNT_KEY, REVCON_SHEET_ID)
- [ ] Verify forms work on production
- [ ] Add real speakers when confirmed
- [ ] Add real venue details when confirmed
- [ ] Set up ticketing integration
- [ ] Add schedule page
- [ ] Add sponsor logos when confirmed
