# Copper Button Games website — setup instructions

This is a simple temporary landing page for **copperbuttongames.com**, ready for GitHub Pages.

## 1) Create the GitHub repository
1. Sign in to GitHub.
2. Create a **new public repository**, e.g. `copperbuttongames-site`.
3. Upload `index.html`, `styles.css`, `favicon.svg`, and `CNAME` to the repository root.
4. Commit the files.

## 2) Turn on GitHub Pages
1. Repository → **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Branch: `main`.
4. Folder: `/ (root)`.
5. Save.

GitHub may take a few minutes to publish the first version.

## 3) Set the custom domain
In **Settings → Pages**, set **Custom domain** to:

`copperbuttongames.com`

Leave the `CNAME` file in the repository.

GitHub recommends verifying your custom domain as well. If GitHub gives you a TXT record for verification, add that TXT record in VentraIP and leave it there.

## 4) Change only the website DNS records in VentraIP
Go to **VentraIP → copperbuttongames.com → Manage DNS**.

DO NOT delete your Google Workspace records (MX, SPF, DKIM, DMARC, Google verification) or the NS records.

### Root domain
Delete the current root A record pointing to the VentraIP parked page:

`copperbuttongames.com → 103.42.108.46`

Add these four A records, each with blank/root hostname:

`185.199.108.153`
`185.199.109.153`
`185.199.110.153`
`185.199.111.153`

TTL `3600` is fine.

### www
Delete the current `www` A record pointing to:

`103.42.108.46`

Add a CNAME:

- Hostname: `www`
- Value: `<YOUR-GITHUB-USERNAME>.github.io`
- TTL: `3600`

Example: if your GitHub username is `garybatz`, use:

`garybatz.github.io`

Do not include the repository name in the CNAME target.

## 5) HTTPS
Return to **GitHub → Settings → Pages**.

Once GitHub has issued the certificate, turn on **Enforce HTTPS**.

## 6) Redirect the Australian domains
Once the `.com` is live, use VentraIP forwarding so:

- `copperbuttongames.com.au` → `https://copperbuttongames.com`
- `copperbuttongames.au` → `https://copperbuttongames.com`

Use a permanent redirect if VentraIP offers that option.

## 7) Editing later
Edit `index.html` or `styles.css` directly on GitHub and commit. GitHub Pages republishes automatically.

## Important
The website and Google Workspace email share the domain but use different DNS records. Replacing the old VentraIP **A/www web records** will not break email as long as you leave the Google MX/TXT records untouched.
