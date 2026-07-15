// Builds assets/site.css from src/site.css, stamping a generated-file banner
// on the output. Deliberately dependency-free so CI can run it without an
// `npm ci` step.
const fs = require('fs');

const SRC = 'src/site.css';
const OUT = 'assets/site.css';

const banner = `/* GENERATED FILE - DO NOT EDIT.
   Built from ${SRC} by \`npm run build:site\`. Edits made here are
   overwritten by the next build. Edit ${SRC} instead. */
`;

fs.writeFileSync(OUT, banner + fs.readFileSync(SRC, 'utf8'));
