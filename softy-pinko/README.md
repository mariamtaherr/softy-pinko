# Softy Pinko (React + Vite + Tailwind CSS)

The original Softy Pinko landing page, migrated from Create React App + Bootstrap + SCSS
to **React 18 + Vite + Tailwind CSS**.

## Run it

```bash
npm install
npm run dev      # development server
npm run build    # production build (output in /dist)
npm run preview  # preview the production build
```

## Structure

```
src/
  main.jsx            entry point (imports index.css, AOS css, Boxicons css)
  App.jsx             only assembles the sections
  index.css           Tailwind directives + small base styles
  assets/images/      all original images
  components/
    Navbar.jsx          fixed glass navbar + mobile menu
    Hero.jsx            "We provide the best strategy" banner
    Features.jsx        3 cards   -> FeatureCard.jsx
    About.jsx           2 rows    -> AboutRow.jsx
    WorkProcess.jsx     6 steps   -> WorkCard.jsx
    Testimonials.jsx    3 cards   -> TestimonialCard.jsx
    Pricing.jsx         3 plans   -> PricingCard.jsx
    Stats.jsx           4 counters-> StatCard.jsx
    Blog.jsx            3 posts   -> BlogCard.jsx
    Contact.jsx         contact form
    Footer.jsx          footer
    SectionTitle.jsx    reusable heading + paragraph
```

Colours, breakpoints, shadow and radius from the old SCSS live in `tailwind.config.js`.
