# Landing Page Test Documentation

## Overview
This repository contains a modern landing page for a customer service software product, along with comprehensive automated tests using Playwright.

## Project Structure
```
.
├── index.html              # Main landing page
├── styles.css              # Styling for the landing page
├── package.json            # Node.js dependencies and scripts
├── playwright.config.js    # Playwright test configuration
├── tests/
│   └── landing-page.spec.js # Automated test suite
└── README.md              # This file
```

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in UI mode (interactive)
```bash
npm run test:ui
```

### Run tests in headed mode (see browser)
```bash
npm run test:headed
```

### Run tests in debug mode
```bash
npm run test:debug
```

### View test report
```bash
npm run test:report
```

## Test Coverage

The automated test suite includes:

### 1. Header Section Tests
- Logo visibility and content
- Navigation links (Home, Products, Resources, Pricing)
- Authentication buttons (Log in, Sign up)

### 2. Hero Section Tests
- Hero title and description
- Call-to-action buttons (Demo, Sign up)
- Hero image display

### 3. Social Proof Section Tests
- Company logos display
- Social proof text
- All 5 partner companies listed

### 4. Features Section Tests
- Features section title
- 6 feature cards display
- Each card has icon, title, and description
- All feature titles verified

### 5. Testimonial Section Tests
- 5-star rating display
- Testimonial quote
- Author information (name and title)
- Author image
- Carousel dots (3 indicators)

### 6. Accessibility Tests
- Page title
- Image alt text validation
- Button accessibility

### 7. Responsive Design Tests
- Mobile viewport (375x667)
- Tablet viewport (768x1024)
- Desktop viewport (1920x1080)

### 8. Visual Regression Tests
- Hero section screenshot comparison
- Features section screenshot comparison
- Full page screenshot comparison

### 9. Performance Tests
- Page load time verification
- Critical resources loading

## Viewing the Landing Page

### Local Development Server
The tests automatically start a local server on port 8080. To view the page manually:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080 in your browser.

### GitHub Pages
This repository is configured to deploy to GitHub Pages via Jekyll workflow.

## Test Configuration

The tests run across multiple browsers:
- Chromium (Desktop)
- Firefox (Desktop)
- WebKit/Safari (Desktop)
- Mobile Chrome (Pixel 5)
- Mobile Safari (iPhone 12)

## Continuous Integration

The test suite is designed to work in CI/CD environments:
- Automatic retries on failure (2 retries in CI)
- Screenshot capture on test failure
- Trace recording on first retry
- HTML report generation

## Troubleshooting

### Tests failing locally
1. Ensure you've installed Playwright browsers: `npx playwright install`
2. Check that port 8080 is not already in use
3. Clear test results: `rm -rf test-results playwright-report`

### Visual regression test failures
Visual regression tests may fail on different operating systems or screen resolutions. To update baseline screenshots:
```bash
npx playwright test --update-snapshots
```

## Contributing

When adding new features to the landing page:
1. Update the HTML/CSS as needed
2. Add corresponding tests to `tests/landing-page.spec.js`
3. Run the full test suite to ensure nothing breaks
4. Update this documentation if needed

## License
MIT
