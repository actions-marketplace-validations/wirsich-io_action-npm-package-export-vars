# 📦 action-npm-package-export-vars
A GitHub Action extracting various fields from package.json and exporting them as environment variables

## 📖 Docs (kind of)
### Extracted fields
All properties of the package.json will be exported, and are accessible like:

### Usage
```yaml
steps:
- uses: actions/checkout@v3
- uses: wirsich/action-npm-package-export-vars@v2
  with:
    path: './package.json' # Optional
    follow-symlinks: 'false' # Optional
- uses: 
- uses: actions/setup-node@v3
  with:
    node-version: 16
- run: npm ci
- run: npm test
- run: echo ${{ env.PKG_AUTHOR }}
- run: echo ${{ env.PKG_VERSION }}
- run: echo ${{ env.PKG_DESCRIPTION }}
```

## TODO

### Maintain
 
 - [ ] use act to replace redundant local build build steps
 - [ ] integrate release gh-action
 - [ ] use "changesets" for release notes
 - [ ] integrate linting via gh-action
 
 ### Features

 - [ ] sync package vars with github repository settings




