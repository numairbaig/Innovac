const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://innovacbiotech.com';

function generateSitemap() {
  const appTsxPath = path.join(__dirname, '../src/App.tsx');
  const appTsxContent = fs.readFileSync(appTsxPath, 'utf8');

  const routeRegex = /path:\s*'([^']*)'/g;
  let match;
  const staticRoutes = ['/'];
  const dynamicRoutes = [];

  while ((match = routeRegex.exec(appTsxContent)) !== null) {
    const routePath = match[1];
    if (routePath === '*' || routePath === '') continue;
    
    if (routePath.includes(':')) {
      dynamicRoutes.push(routePath);
    } else {
      staticRoutes.push('/' + routePath);
    }
  }

  const resolvedDynamicRoutes = [];

  if (dynamicRoutes.includes('services/:id')) {
    try {
      const servicesData = fs.readFileSync(path.join(__dirname, '../src/data/services.ts'), 'utf8');
      const idRegex = /id:\s*"([^"]+)"/g;
      let idMatch;
      while ((idMatch = idRegex.exec(servicesData)) !== null) {
        resolvedDynamicRoutes.push(`/services/${idMatch[1]}`);
      }
    } catch (e) {
      console.warn("Could not parse services.ts");
    }
  }

  if (dynamicRoutes.includes('research/:topic')) {
    try {
      const researchData = fs.readFileSync(path.join(__dirname, '../src/data/research.ts'), 'utf8');
      const slugRegex = /slug:\s*"([^"]+)"/g;
      let slugMatch;
      while ((slugMatch = slugRegex.exec(researchData)) !== null) {
        resolvedDynamicRoutes.push(`/research/${slugMatch[1]}`);
      }
    } catch (e) {
      console.warn("Could not parse research.ts");
    }
  }

  if (dynamicRoutes.includes('reagents/:category')) {
    resolvedDynamicRoutes.push('/reagents/synthesis');
    resolvedDynamicRoutes.push('/reagents/supply');
  }

  const allRoutes = [...new Set([...staticRoutes, ...resolvedDynamicRoutes])].sort();

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${DOMAIN}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  const publicPath = path.join(__dirname, '../public');
  if (!fs.existsSync(publicPath)) {
    fs.mkdirSync(publicPath, { recursive: true });
  }

  fs.writeFileSync(path.join(publicPath, 'sitemap.xml'), sitemapContent);
  console.log(`Generated sitemap.xml with ${allRoutes.length} routes.`);
}

generateSitemap();
