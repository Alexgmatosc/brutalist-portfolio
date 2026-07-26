import fs from 'fs';

const html = fs.readFileSync('/Users/alexander/Dev/portfolio/stitch_acid_red_brutalist_portfolio/code.html', 'utf8');

const headMatch = html.match(/<head>([\s\S]*?)<\/head>/);
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
const bodyTagMatch = html.match(/(<body[^>]*>)/);

const headContent = headMatch ? headMatch[1] : '';
const bodyContent = bodyMatch ? bodyMatch[1] : '';
const bodyTag = bodyTagMatch ? bodyTagMatch[1] : '<body>';

const layoutContent = `---
---
<!DOCTYPE html>
<html lang="es">
<head>
    ${headContent.trim()}
</head>
${bodyTag}
    <slot />
</body>
</html>
`;

const indexContent = `---
import Layout from '../layouts/Layout.astro';
---

<Layout>
    ${bodyContent.trim()}
</Layout>
`;

fs.writeFileSync('/Users/alexander/Dev/portfolio/src/layouts/Layout.astro', layoutContent);
fs.writeFileSync('/Users/alexander/Dev/portfolio/src/pages/index.astro', indexContent);
console.log('Split successful');
