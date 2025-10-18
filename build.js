// build.js — Static Site Builder for edublog
// ------------------------------------------

import fs from 'fs';
import path from 'path';

// Root & components folder
const rootDir = process.cwd();
const componentsDir = path.join(rootDir, 'components');

// Output file
const outputFile = path.join(rootDir, 'index.html');

// --- Helper: read HTML component ---
const read = (p) => fs.readFileSync(p, 'utf8');

// --- Template: define build structure ---
const template = `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>EduBlog</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

  <!-- HEADER -->
  {{header}}

  <!-- HERO -->
  {{hero}}

  <!-- SIDEBAR -->
  {{sidebar}}

  <!-- LATEST POSTS -->
  {{latest}}

  <!-- CATEGORY BLOCKS -->
  {{blocks}}

  <!-- FOOTER -->
  {{footer}}

  <script src="script.js"></script>
</body>
</html>
`;

// --- Load HTML components ---
const sections = {
  header: read(path.join(componentsDir, '_global', 'header.html')),
  hero: read(path.join(componentsDir, 'hero', 'hero.html')),
  sidebar: read(path.join(componentsDir, '_global', 'sidebar.html')),
  latest: read(path.join(componentsDir, 'latest-posts', 'latest.html')),
  blocks: read(path.join(componentsDir, 'category-blocks', 'blocks.html')),
  footer: read(path.join(componentsDir, '_global', 'footer.html')),
};

// --- Merge template ---
let html = template;
for (const [key, value] of Object.entries(sections)) {
  html = html.replace(`{{${key}}}`, value);
}

// --- Save final index.html ---
fs.writeFileSync(outputFile, html);
console.log('✅ Build selesai → index.html berhasil digabungkan!');
