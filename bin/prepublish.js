const cpx = require('cpx');
const fs = require('fs');

cpx.copy('LICENSE', 'dist/libs/ngx-forms');
cpx.copy('README.md', 'dist/libs/ngx-forms');
cpx.copy('CHANGELOG.md', 'dist/libs/ngx-forms');

const packageJson = JSON.parse(fs.readFileSync('package.json'));
delete packageJson['devDependencies'];
delete packageJson['scripts'];
delete packageJson['private'];
delete packageJson['lint-staged'];
fs.writeFileSync('dist/libs/ngx-forms/package.json', JSON.stringify(packageJson, undefined, 2));
