# 📦 action-npm-package-export-vars
A GitHub Action extracting various fields from package.json and exporting them as environment variables

## 📖 Docs (kind of)
### Extracted fields
- you can configure any fields of the package.json which will be exported
### Usage

```yaml
- uses: wirsich/action-npm-package-export-vars@v1
  with:
    path: './package.json' # Optional
    follow-symlinks: 'false' # Optional
```

And then you can use them, eg. `${{ env.PACKAGE_AUTHOR }}` 🎉
