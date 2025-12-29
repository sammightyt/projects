# Contentful Setup Guide

This guide will help you set up Contentful CMS for the Hill Country Cricket Association website.

## 1. Create a Contentful Account

1. Go to [contentful.com](https://www.contentful.com/)
2. Sign up for a free account
3. Create a new space (e.g., "Hill Country Cricket")

## 2. Get API Credentials

1. In your Contentful space, go to **Settings** → **API keys**
2. Click **Add API key**
3. Give it a name (e.g., "HCCA Website")
4. Copy the following values:
   - **Space ID**
   - **Content Delivery API - access token**
   - **Content Preview API - access token**

5. Add these to your `.env.local` file:
```
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_delivery_token_here
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token_here
```

## 3. Create Content Models

### Team Content Model

1. Go to **Content model** → **Add content type**
2. Name: "Team"
3. API identifier: "team"
4. Add the following fields:

| Field Name | Field ID | Type | Required | Validations/Notes |
|-----------|----------|------|----------|-------------------|
| Name | name | Short text | Yes | Team name |
| League | league | Short text | Yes | e.g., "Youth League", "APCL" |
| League Tier | leagueTier | Short text | No | "APCL Plate" or "APCL Elite" |
| Level | level | Short text | Yes | e.g., "Intermediate", "Advanced" |
| Age Group | ageGroup | Short text | No | "U10", "U13", or "U15" (for youth only) |
| Description | description | Long text | Yes | Team description |
| Players List | playersList | Short text, List | No | Array of player names |
| Team Image | teamImage | Media | No | One file, Images only |
| Schedule | schedule | Long text | No | Match schedule |
| Program Type | programType | Short text | Yes | "Youth" or "Adult" |

### League Content Model (Optional)

1. Name: "League"
2. API identifier: "league"

| Field Name | Field ID | Type | Required |
|-----------|----------|------|----------|
| Name | name | Short text | Yes |
| Tier | tier | Short text | Yes |
| Description | description | Long text | Yes |
| Overview | overview | Long text | Yes |
| Rules | rules | Long text | No |
| Format | format | Long text | No |
| Parent Program | parentProgram | Short text | Yes |

### Program Content Model (Optional)

1. Name: "Program"
2. API identifier: "program"

| Field Name | Field ID | Type | Required |
|-----------|----------|------|----------|
| Title | title | Short text | Yes |
| Type | type | Short text | Yes |
| Description | description | Long text | Yes |
| Image | image | Media | No |
| Content | content | Rich text | Yes |

### Coach Content Model (Optional)

1. Name: "Coach"
2. API identifier: "coach"

| Field Name | Field ID | Type | Required |
|-----------|----------|------|----------|
| Role | role | Short text | Yes |
| Qualifications | qualifications | Long text | Yes |
| Bio | bio | Long text | Yes |
| Program Type | programType | Short text | Yes |

### Facility Content Model (Optional)

1. Name: "Facility"
2. API identifier: "facility"

| Field Name | Field ID | Type | Required |
|-----------|----------|------|----------|
| Name | name | Short text | Yes |
| Type | type | Short text | Yes |
| Location | location | Short text | Yes |
| Description | description | Long text | Yes |

## 4. Add Sample Content

### Sample Youth Team

1. Go to **Content** → **Add entry** → **Team**
2. Fill in:
   - **Name**: "Lightning U13"
   - **League**: "Youth Development League"
   - **League Tier**: (leave empty)
   - **Level**: "Development"
   - **Age Group**: "U13"
   - **Description**: "A competitive U13 team focusing on skill development and match experience."
   - **Players List**: Add player names (one per item)
   - **Team Image**: Upload a cricket-related image
   - **Program Type**: "Youth"
3. Click **Publish**

### Sample APCL Plate Team

1. **Name**: "Hill Country Hawks"
2. **League**: "Austin Premier Cricket League"
3. **League Tier**: "APCL Plate"
4. **Level**: "Intermediate"
5. **Age Group**: (leave empty)
6. **Description**: "An intermediate-level adult team competing in APCL Plate division."
7. **Players List**: Add player names
8. **Program Type**: "Adult"
9. Click **Publish**

### Sample APCL Elite Team

1. **Name**: "Thunder Elite"
2. **League**: "Austin Premier Cricket League"
3. **League Tier**: "APCL Elite"
4. **Level**: "Premier"
5. **Age Group**: (leave empty)
6. **Description**: "A premier-level team competing at the highest standard in APCL Elite."
7. **Players List**: Add player names
8. **Program Type**: "Adult"
9. Click **Publish**

## 5. Test the Integration

1. Make sure your `.env.local` file has the correct credentials
2. Restart your development server:
```bash
npm run dev
```
3. Navigate to:
   - [http://localhost:3000/teams](http://localhost:3000/teams) - Should show all teams
   - [http://localhost:3000/youth-cricket/teams](http://localhost:3000/youth-cricket/teams) - Youth teams only
   - [http://localhost:3000/adult-cricket/apcl-plate/teams](http://localhost:3000/adult-cricket/apcl-plate/teams) - Plate teams
   - [http://localhost:3000/adult-cricket/apcl-elite/teams](http://localhost:3000/adult-cricket/apcl-elite/teams) - Elite teams

## 6. Content Management Tips

### Adding New Teams
- Always set **programType** correctly ("Youth" or "Adult")
- For youth teams, set **ageGroup** ("U10", "U13", or "U15")
- For adult teams, set **leagueTier** ("APCL Plate" or "APCL Elite")
- Use consistent naming for **league** field across teams in the same league

### Player Lists
- Add player names only (no personal details)
- One name per list item in Contentful
- Names will be displayed in numbered roster format

### Images
- Recommended size: 1200x800px
- Format: JPG or PNG
- Keep file size under 2MB for best performance
- Images will be automatically optimized by Next.js

### Content Updates
- Changes are reflected on the live site within 1 hour (revalidation period)
- For immediate updates, trigger a new deployment in Vercel
- Always use "Publish" to make changes live (don't just "Save")

## 7. Scaling

The system is designed to handle unlimited teams:
- No maximum team count per league
- No maximum number of leagues
- Pages are generated dynamically
- Consider adding pagination if team count exceeds 50+ per league

## 8. Troubleshooting

### Teams not appearing
- Check that entries are **Published** (not just saved)
- Verify field IDs match exactly (case-sensitive)
- Check `.env.local` credentials are correct
- Wait for revalidation period (1 hour) or redeploy

### Images not loading
- Verify image is uploaded in Contentful
- Check `next.config.js` has Contentful domain whitelisted
- Ensure images are under 10MB

### API errors
- Verify Space ID and Access Token are correct
- Check API key has proper permissions in Contentful
- Look for errors in browser console or terminal

## Need Help?

For issues with Contentful setup:
1. Check Contentful documentation: [contentful.com/developers](https://www.contentful.com/developers/)
2. Review API logs in Contentful dashboard
3. Check browser console for error messages
