# Hill Country Cricket Association Website

A modern, responsive, professional website for the Hill Country Cricket Association built with Next.js, Tailwind CSS, and Contentful CMS, deployed on Vercel.

## 🏏 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Headless CMS**: Contentful integration for dynamic content management
- **Responsive Design**: Mobile-first approach with cricket-themed styling
- **Youth Cricket Programs**: U10, U13, U15 age groups with dedicated pages
- **Adult Cricket Leagues**: APCL Plate and APCL Elite competitive leagues
- **Dynamic Team Management**: Scalable team pages with no maximum limits
- **Contact & Registration Forms**: Built-in form handling with validation
- **SEO Optimized**: Dynamic metadata and Open Graph tags
- **Performance Focused**: Static generation with on-demand revalidation

## 📁 Project Structure

```
/app
  /layout.tsx               # Root layout with global styles
  /page.tsx                 # Home page
  /globals.css              # Tailwind + global styles
  
  /(pages)                  # Page routes
    /contact-registration   # Contact & registration forms
    /youth-cricket          # Youth program pages
      /facilities
      /infrastructure
      /curriculums
      /coaches
      /[ageGroup]           # Dynamic pages (U10, U13, U15)
      /teams                # Youth teams listing
    /adult-cricket          # Adult program pages
      /apcl-plate           # APCL Plate league
        /teams
      /apcl-elite           # APCL Elite league
        /teams
    /teams                  # Global teams listing
      /[teamId]             # Individual team pages

/components
  /Header.tsx               # Navigation header
  /Footer.tsx               # Footer with social links
  /Hero.tsx                 # Hero section component
  /TeamCard.tsx             # Team card component
  /ContactForm.tsx          # Contact form
  /RegistrationForm.tsx     # Registration form

/lib
  /cms.ts                   # Contentful API client
  /types.ts                 # TypeScript types
  /utils.ts                 # Helper functions

/public
  /images                   # Images and assets
  /fonts                    # Custom fonts

/api
  /contact                  # Contact form API route
  /register                 # Registration form API route
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Contentful account and space
- Vercel account (for deployment)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hill-country-cricket-association
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Add your Contentful credentials to `.env.local`:
```
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Contentful Setup

### Content Models

Create the following content models in your Contentful space:

#### 1. Team
- **name** (Short text) - Team name
- **league** (Short text) - League name
- **leagueTier** (Short text) - "APCL Plate" or "APCL Elite"
- **level** (Short text) - Competition level
- **ageGroup** (Short text) - "U10", "U13", or "U15" (for youth teams)
- **description** (Long text) - Team description
- **playersList** (Short text, list) - Array of player names
- **teamImage** (Media) - Team photo
- **schedule** (Long text) - Match schedule (optional)
- **programType** (Short text) - "Youth" or "Adult"

#### 2. League
- **name** (Short text) - League name
- **tier** (Short text) - League tier
- **description** (Long text) - League description
- **overview** (Long text) - Detailed overview
- **rules** (Long text) - League rules (optional)
- **format** (Long text) - Competition format (optional)
- **parentProgram** (Short text) - "Youth" or "Adult"

#### 3. Program
- **title** (Short text) - Program title
- **type** (Short text) - "Youth" or "Adult"
- **description** (Long text) - Program description
- **image** (Media) - Program image (optional)
- **content** (Rich text) - Detailed content

#### 4. Coach
- **role** (Short text) - Coach role/title
- **qualifications** (Long text) - Coach qualifications
- **bio** (Long text) - Coach bio
- **programType** (Short text) - "Youth" or "Adult"

#### 5. Facility
- **name** (Short text) - Facility name
- **type** (Short text) - Facility type
- **location** (Short text) - Location
- **description** (Long text) - Facility description

#### 6. Page (Optional)
- **title** (Short text) - Page title
- **slug** (Short text) - URL slug
- **content** (Rich text) - Page content
- **heroImage** (Media) - Hero image (optional)
- **metadata** (JSON) - SEO metadata (optional)

## 🎨 Design System

### Colors

- **Cricket Blue**: `#003f5c` (Primary)
- **Cricket Gold**: `#ffa600` (Accent)
- **Cricket Green**: `#2f9e44` (Youth programs)
- **APCL Plate**: Blue palette (Intermediate)
- **APCL Elite**: Purple palette (Premier)

### Typography

- **Headlines**: Bold, 32-48px (desktop)
- **Subheadings**: 24-32px
- **Body**: 16-18px with 1.5-1.6 line height

## 📱 Responsive Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🔧 API Routes

### POST /api/contact
Handles general inquiry form submissions.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "inquiryType": "string",
  "message": "string"
}
```

### POST /api/register
Handles player registration form submissions.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "dob": "string",
  "program": "Youth" | "Adult",
  "ageGroup": "U10" | "U13" | "U15" (if Youth),
  "league": "APCL Plate" | "APCL Elite" (if Adult),
  "agreeToTerms": boolean
}
```

## 🚢 Deployment to Vercel

1. Push your code to GitHub, GitLab, or Bitbucket

2. Import project in Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository

3. Configure environment variables in Vercel:
   - Add `CONTENTFUL_SPACE_ID`
   - Add `CONTENTFUL_ACCESS_TOKEN`
   - Add `CONTENTFUL_PREVIEW_ACCESS_TOKEN` (optional)

4. Deploy:
   - Vercel will automatically build and deploy
   - Get your production URL
   - Set up custom domain (optional)

## 🔄 Content Management

### Adding Teams

1. Go to your Contentful space
2. Navigate to Content
3. Click "Add entry" → "Team"
4. Fill in team details:
   - Name, league, tier, level
   - Age group (for youth)
   - Description
   - Players list (comma-separated)
   - Upload team image
   - Set program type
5. Publish the entry
6. Team will appear on the website within an hour (or on next deployment)

### Managing Content

- All content can be managed through Contentful
- Changes are reflected on the website after revalidation period (1 hour)
- For immediate updates, trigger a new deployment in Vercel

## 🎯 Key Features

### Scalability
- **No team limits**: Add unlimited teams to any league
- **Dynamic routing**: All team pages generated automatically
- **CMS-driven**: Non-technical content updates via Contentful
- **Pagination ready**: Can be added for large team lists

### Accessibility
- **WCAG AA compliant**: Proper color contrast and semantic HTML
- **Keyboard navigation**: Full keyboard support
- **Screen reader friendly**: Proper ARIA labels and alt text
- **Responsive**: Works on all devices and screen sizes

### Performance
- **Static generation**: Fast page loads with SSG
- **Image optimization**: Next.js Image component
- **Code splitting**: Automatic route-based splitting
- **Lighthouse 90+**: Optimized for performance

## 📚 Documentation

### Adding New Pages

1. Create a new file in `app/(pages)/your-page/page.tsx`
2. Import Hero and other components
3. Add to navigation in `components/Header.tsx`
4. Update sitemap if needed

### Customizing Styles

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.js`
- Component styles: Use Tailwind utility classes

### Form Handling

Forms use React Hook Form for validation and submission. To integrate with email services:

1. Install email service SDK (e.g., SendGrid)
2. Add API key to environment variables
3. Update API routes in `/api/contact` and `/api/register`
4. Configure email templates

## 🐛 Troubleshooting

### Teams not showing
- Check Contentful credentials in `.env.local`
- Verify content model fields match code
- Check team entries are published in Contentful

### Build errors
- Run `npm install` to ensure dependencies are installed
- Check TypeScript errors with `npm run lint`
- Verify environment variables are set

### Styling issues
- Clear `.next` cache: `rm -rf .next`
- Rebuild: `npm run build`
- Check Tailwind configuration

## 📄 License

© 2024 Hill Country Cricket Association. All rights reserved.

## 🤝 Support

For support or questions, please contact:
- Email: info@hillcountrycricket.com
- Phone: (512) 555-0100

---

Built with ❤️ and 🏏 by the HCCA team
