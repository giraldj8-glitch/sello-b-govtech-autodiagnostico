const { chromium } = require('playwright');
const { pathToFileURL } = require('url');
const path = require('path');

(async () => {
  console.log('Iniciando navegador de prueba…');
  const browser = await chromium.launch({ headless: true, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', args: ['--disable-gpu'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1050 }, deviceScaleFactor: 1 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  page.setDefaultTimeout(7000);
  const errors = [];
  page.on('pageerror', error => { errors.push(error.message); console.error('PAGEERROR:', error.message); });
  const url = pathToFileURL(path.resolve(__dirname, process.argv[2] ?? 'index.html')).href;
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });

  const demos = ['solution', 'ally', 'articulator', 'public'];
  if (await page.locator('[data-demo]').count() !== 4) throw new Error('Deben existir cuatro rutas demo.');
  for (const demo of demos) {
    console.log('Validando ruta:', demo);
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });
    await page.locator(`[data-demo="${demo}"]`).click();
    await page.locator('.result-title').waitFor();
    const title = await page.locator('.result-title').innerText();
    if (!title.includes('Tu punto de partida')) throw new Error(`Resultado incompleto para ${demo}.`);
    if (await page.locator('.capability').count() < 2) throw new Error(`Sin capacidades visibles para ${demo}.`);
  }

  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });
  await page.screenshot({ path: '/private/tmp/sello-v4-desktop.png', fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });
  await page.locator('[data-demo="public"]').click();
  await page.screenshot({ path: '/private/tmp/sello-v4-mobile-public.png', fullPage: true });
  await browser.close();
  if (errors.length) throw new Error(errors.join('\n'));
  console.log('OK: 4 rutas, resultados y capacidades visibles; sin errores de página.');
})().catch(error => { console.error(error); process.exit(1); });
