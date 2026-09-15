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
  if (await page.locator('a[href="flujo.html"]').count() < 1) throw new Error('Falta el acceso al mapa de preguntas.');

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

  const flowUrl = pathToFileURL(path.resolve(__dirname, 'flujo.html')).href;
  await page.setViewportSize({ width: 1440, height: 1050 });
  await page.goto(flowUrl, { waitUntil: 'domcontentloaded', timeout: 10000 });
  const expected = { all: 18, solution: 18, ally: 14, articulator: 12, public: 5 };
  for (const [route, count] of Object.entries(expected)) {
    await page.locator(`[data-route="${route}"]`).click();
    const visible = await page.locator('.question:visible').count();
    if (visible !== count) throw new Error(`Ruta ${route}: se esperaban ${count} bloques y se encontraron ${visible}.`);
  }
  await page.locator('[data-route="articulator"]').click();
  await page.screenshot({ path: '/private/tmp/sello-v5-flujo-desktop.png', fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(flowUrl, { waitUntil: 'domcontentloaded', timeout: 10000 });
  await page.locator('[data-route="public"]').click();
  await page.screenshot({ path: '/private/tmp/sello-v5-flujo-mobile.png', fullPage: true });
  await browser.close();
  if (errors.length) throw new Error(errors.join('\n'));
  console.log('OK: formulario y mapa del flujo validados en las 4 rutas; sin errores de página.');
})().catch(error => { console.error(error); process.exit(1); });
