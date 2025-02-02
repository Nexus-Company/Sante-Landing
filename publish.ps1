ng b --output-path docs --base-href /
Copy-Item "CNAME" -Destination "docs/browser"
npx angular-cli-ghpages --dir=docs/browser