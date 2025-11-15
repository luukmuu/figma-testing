const { test, expect } = require('@playwright/test');

test.describe('Landing Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Header Section', () => {
    test('should display header with logo', async ({ page }) => {
      const header = page.getByTestId('header');
      await expect(header).toBeVisible();

      const logo = page.getByTestId('logo');
      await expect(logo).toBeVisible();
      await expect(logo).toContainText('Untitled UI');
    });

    test('should display navigation links', async ({ page }) => {
      const navLinks = page.getByTestId('nav-links');
      await expect(navLinks).toBeVisible();

      await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
      await expect(page.getByRole('link', { name: /Products/ })).toBeVisible();
      await expect(page.getByRole('link', { name: /Resources/ })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Pricing' })).toBeVisible();
    });

    test('should display auth buttons', async ({ page }) => {
      const authButtons = page.getByTestId('auth-buttons');
      await expect(authButtons).toBeVisible();

      const loginBtn = page.getByRole('button', { name: 'Log in' });
      const signupBtn = authButtons.getByRole('button', { name: 'Sign up' });

      await expect(loginBtn).toBeVisible();
      await expect(signupBtn).toBeVisible();
    });
  });

  test.describe('Hero Section', () => {
    test('should display hero section with title', async ({ page }) => {
      const heroSection = page.getByTestId('hero-section');
      await expect(heroSection).toBeVisible();

      const heroTitle = page.getByTestId('hero-title');
      await expect(heroTitle).toBeVisible();
      await expect(heroTitle).toContainText('Customer service software for customer-first teams');
    });

    test('should display hero description', async ({ page }) => {
      const heroDescription = page.getByTestId('hero-description');
      await expect(heroDescription).toBeVisible();
      await expect(heroDescription).toContainText('The best customer service software');
    });

    test('should display hero CTA buttons', async ({ page }) => {
      const heroButtons = page.getByTestId('hero-buttons');
      await expect(heroButtons).toBeVisible();

      const demoBtn = page.getByRole('button', { name: 'Demo' });
      const signupBtn = heroButtons.getByRole('button', { name: 'Sign up' });

      await expect(demoBtn).toBeVisible();
      await expect(signupBtn).toBeVisible();
    });

    test('should display hero image', async ({ page }) => {
      const heroImage = page.getByTestId('hero-image');
      await expect(heroImage).toBeVisible();

      const img = heroImage.locator('img');
      await expect(img).toBeVisible();
    });
  });

  test.describe('Social Proof Section', () => {
    test('should display social proof section', async ({ page }) => {
      const socialProof = page.getByTestId('social-proof');
      await expect(socialProof).toBeVisible();
    });

    test('should display company logos', async ({ page }) => {
      const companyLogos = page.getByTestId('company-logos');
      await expect(companyLogos).toBeVisible();

      // Check for all 5 company names
      await expect(companyLogos).toContainText('Layers');
      await expect(companyLogos).toContainText('Sisyphus');
      await expect(companyLogos).toContainText('Circoleos');
      await expect(companyLogos).toContainText('Catalog');
      await expect(companyLogos).toContainText('Quotient');
    });

    test('should display social proof text', async ({ page }) => {
      await expect(page.locator('.social-proof-text')).toContainText('4,000+ companies');
    });
  });

  test.describe('Features Section', () => {
    test('should display features section with title', async ({ page }) => {
      const featuresSection = page.getByTestId('features-section');
      await expect(featuresSection).toBeVisible();

      const featuresTitle = page.getByTestId('features-title');
      await expect(featuresTitle).toBeVisible();
      await expect(featuresTitle).toContainText('All you need to run your finances effectively');
    });

    test('should display 6 feature cards', async ({ page }) => {
      const featuresGrid = page.getByTestId('features-grid');
      const featureCards = featuresGrid.locator('.feature-card');

      await expect(featureCards).toHaveCount(6);
    });

    test('should display all feature titles', async ({ page }) => {
      const featureTitles = [
        'Unlimited cards',
        'Easy expense policies',
        'Advanced analytics',
        'Real-time visibility on spending',
        'Connect the tools you already use',
        'Our people make the difference'
      ];

      for (const title of featureTitles) {
        await expect(page.locator('.feature-title', { hasText: title })).toBeVisible();
      }
    });

    test('each feature card should have icon, title, and description', async ({ page }) => {
      const featureCards = page.locator('.feature-card');
      const count = await featureCards.count();

      for (let i = 0; i < count; i++) {
        const card = featureCards.nth(i);
        await expect(card.locator('.feature-icon')).toBeVisible();
        await expect(card.locator('.feature-title')).toBeVisible();
        await expect(card.locator('.feature-description')).toBeVisible();
      }
    });
  });

  test.describe('Testimonial Section', () => {
    test('should display testimonial section', async ({ page }) => {
      const testimonialSection = page.getByTestId('testimonial-section');
      await expect(testimonialSection).toBeVisible();
    });

    test('should display 5-star rating', async ({ page }) => {
      const stars = page.getByTestId('testimonial-stars');
      await expect(stars).toBeVisible();

      const starCount = await stars.locator('span').count();
      expect(starCount).toBe(5);
    });

    test('should display testimonial quote', async ({ page }) => {
      const quote = page.getByTestId('testimonial-quote');
      await expect(quote).toBeVisible();
      await expect(quote).toContainText('Love the simplicity of the service');
    });

    test('should display author information', async ({ page }) => {
      await expect(page.locator('.author-name')).toContainText('Renee Wells');
      await expect(page.locator('.author-title')).toContainText('Product Designer, Quotient');
    });

    test('should display testimonial image', async ({ page }) => {
      const testimonialImage = page.locator('.testimonial-image img');
      await expect(testimonialImage).toBeVisible();
    });

    test('should display carousel dots', async ({ page }) => {
      const dots = page.locator('.testimonial-dots .dot');
      await expect(dots).toHaveCount(3);

      // Check that one dot is active
      const activeDot = page.locator('.dot.active');
      await expect(activeDot).toHaveCount(1);
    });
  });

  test.describe('Accessibility Tests', () => {
    test('page should have proper title', async ({ page }) => {
      await expect(page).toHaveTitle(/Untitled UI/);
    });

    test('all images should have alt text', async ({ page }) => {
      const images = page.locator('img');
      const count = await images.count();

      for (let i = 0; i < count; i++) {
        const img = images.nth(i);
        const altText = await img.getAttribute('alt');
        expect(altText).toBeTruthy();
      }
    });

    test('all buttons should be accessible', async ({ page }) => {
      const buttons = page.locator('button');
      const count = await buttons.count();

      for (let i = 0; i < count; i++) {
        const button = buttons.nth(i);
        await expect(button).toBeVisible();

        const text = await button.textContent();
        expect(text.trim().length).toBeGreaterThan(0);
      }
    });
  });

  test.describe('Responsive Design Tests', () => {
    test('should be responsive on mobile viewport', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });

      const heroTitle = page.getByTestId('hero-title');
      await expect(heroTitle).toBeVisible();

      const featuresGrid = page.getByTestId('features-grid');
      await expect(featuresGrid).toBeVisible();
    });

    test('should be responsive on tablet viewport', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });

      const header = page.getByTestId('header');
      await expect(header).toBeVisible();

      const heroSection = page.getByTestId('hero-section');
      await expect(heroSection).toBeVisible();
    });

    test('should be responsive on desktop viewport', async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });

      const container = page.locator('.container').first();
      await expect(container).toBeVisible();
    });
  });

  test.describe('Visual Regression Tests', () => {
    test('should match hero section screenshot', async ({ page }) => {
      const heroSection = page.getByTestId('hero-section');
      await expect(heroSection).toHaveScreenshot('hero-section.png', {
        maxDiffPixels: 100,
      });
    });

    test('should match features section screenshot', async ({ page }) => {
      const featuresSection = page.getByTestId('features-section');
      await expect(featuresSection).toHaveScreenshot('features-section.png', {
        maxDiffPixels: 100,
      });
    });

    test('should match full page screenshot', async ({ page }) => {
      await expect(page).toHaveScreenshot('full-page.png', {
        fullPage: true,
        maxDiffPixels: 200,
      });
    });
  });

  test.describe('Performance Tests', () => {
    test('page should load within acceptable time', async ({ page }) => {
      const startTime = Date.now();
      await page.goto('/');
      const loadTime = Date.now() - startTime;

      // Page should load in less than 3 seconds
      expect(loadTime).toBeLessThan(3000);
    });

    test('all critical resources should load', async ({ page }) => {
      const response = await page.goto('/');
      expect(response.status()).toBe(200);

      // Check CSS is loaded
      const styleSheets = await page.evaluate(() => document.styleSheets.length);
      expect(styleSheets).toBeGreaterThan(0);
    });
  });
});
