const { chromium } = require('playwright');
const path = require('path');

const pages = [
  { template: 'og-home.html', output: 'og-home.png' },
  { template: 'og-about.html', output: 'og-about.png' },
  { template: 'og-services.html', output: 'og-services.png' },
  { template: 'og-contact.html', output: 'og-contact.png' },
];

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });

  for (const page of pages) {
    const p = await context.newPage();
    const templatePath = path.resolve(__dirname, 'og-templates', page.template);
    await p.goto(`file://${templatePath}`);
    // Wait for fonts to load
    await p.waitForTimeout(2000);
    const outputPath = path.resolve(__dirname, 'assets', page.output);
    await p.screenshot({ path: outputPath, fullPage: false });
    console.log(`Created: ${outputPath}`);
    await p.close();
  }

  await browser.close();
  console.log('All OG images generated.');
})();
