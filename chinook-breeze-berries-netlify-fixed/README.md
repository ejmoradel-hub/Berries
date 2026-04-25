# Chinook Breeze Berries

A presentation website for a family-run U-pick Saskatoon berry farm near Crossfield, Alberta.

## How to Edit Content

This is a static React application. To update the content, you will need to edit the React components in the `src/pages/` directory.

### Updating Picking Status

The picking status is displayed using the `PickingStatusCard` component. To update it, open `src/pages/Home.tsx` and find the `<PickingStatusCard />` usage. You can pass props to change its state:

```tsx
// Status options: "open", "closed", "ripening"
<PickingStatusCard 
  status="open" 
  message="We have plenty of ripe berries today! Come on out." 
  updatedAt="July 25, 8:00 AM" 
/>
```

### Updating Farm Information

- **Pricing**: Open `src/pages/UPick.tsx` and look for the pricing section to replace placeholders like `$X/lb` with actual prices.
- **Contact Info**: Open `src/pages/Contact.tsx` to update phone numbers, emails, and social links.
- **Location/Map**: Open `src/pages/Visit.tsx` to update the address, directions, and the Google Maps iframe embed code.
- **Hours/Dates**: Open `src/pages/Visit.tsx` to update operational hours.

### Updating Images

Images are stored in the `public/images/` directory. 
- `hero-bg.png`: The main large background image on the homepage.
- `saskatoon-berries.png`: Used on the U-Pick page.
- `farm-landscape.png`: Used on the About page.

To replace these images, simply upload new images with the exact same filenames to the `public/images/` folder, or add new images and update the `src="..."` paths in the respective page components.

**Important Reminder:**
Please ensure you only use original photography from the farm or properly licensed images. Do not reuse old website text, images, recipes, logos, or branding from any previous sites.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```