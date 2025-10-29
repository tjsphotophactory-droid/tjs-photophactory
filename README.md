client/
 ┣ package.json
 ┣ src/
 ┣ public/
{
  "private": true,
  "scripts": {
    "build": "cd client && npm ci && npm run build"
  }
}
git add package.json
git commit -m "Add root package.json for Cloudflare build"
git push

