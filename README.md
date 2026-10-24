# Huzaifa Ahmed Khan — Portfolio

A single-page portfolio built with React, Vite, and Tailwind CSS. Dark
charcoal theme with a warm gold accent, monospace labels, and a small
"workflow node" motif running through each section — a nod to the n8n /
automation pipelines you build.

## 1. Before you touch any code

Open `src/data.js`. That is the **only file** you need to edit to make this
site yours:

- `links.linkedin`, `links.github`, `links.twitter` — replace the placeholder
  URLs with your real profile links.
- `links.resume` already points at `public/resume.pdf` (your résumé is
  already dropped in there).
- Everything else (name, role, about text, experience, skills, projects,
  education) is already filled in from your résumé — edit freely if anything
  changes.

Your photo is already saved at `public/profile.jpg`. To swap it, just replace
that file with a new image of the same name (or update `profile.photo` in
`data.js` to point at a different filename).

## 2. Run it on your PC

You need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
# 1. Unzip the project, then open a terminal inside the folder
cd huzaifa-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`) — open it in
your browser. The page hot-reloads as you edit files.

To build the production files (used for deployment):

```bash
npm run build
```

This outputs a `dist/` folder with the finished static site. You can preview
that exact build locally with:

```bash
npm run preview
```

## 3. Deploy to Vercel with huzaifakhan.me

### Step 1 — Push the project to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
```

Create a new empty repository on GitHub (e.g. `huzaifa-portfolio`), then:

```bash
git remote add origin https://github.com/<your-username>/huzaifa-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2 — Import the project into Vercel

1. Go to [vercel.com](https://vercel.com) and sign up / log in (GitHub login
   is easiest).
2. Click **Add New → Project**.
3. Select the `huzaifa-portfolio` repository you just pushed.
4. Vercel auto-detects Vite. Confirm these settings (they should already be
   filled in):
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. In about a minute you'll get a live URL like
   `huzaifa-portfolio.vercel.app`.

### Step 3 — Point huzaifakhan.me at the deployment

1. In the Vercel project, go to **Settings → Domains**.
2. Type `huzaifakhan.me` and click **Add**.
3. Vercel will show you DNS records to add. If the domain was bought
   elsewhere (Namecheap, GoDaddy, etc.), go to that registrar's DNS settings
   and add whichever Vercel asks for:
   - Simplest: set an **A record** for `@` pointing to `76.76.21.21`, and a
     **CNAME record** for `www` pointing to `cname.vercel-dns.com`.
   - Or, in your registrar, switch the domain's nameservers to Vercel's
     (`ns1.vercel-dns.com` and `ns2.vercel-dns.com`) if you'd rather let
     Vercel manage all DNS.
4. Back in Vercel, wait for the domain status to turn green (**Valid
   Configuration**) — this can take a few minutes up to a few hours depending
   on DNS propagation.
5. Vercel issues an SSL certificate automatically once the domain is
   verified, so `https://huzaifakhan.me` will work with no extra setup.

### Step 4 — Future updates

Any time you edit files locally and want to publish changes:

```bash
git add .
git commit -m "Update content"
git push
```

Vercel redeploys automatically on every push to `main` — no extra steps
needed.

## Project structure

```
huzaifa-portfolio/
├── public/
│   ├── profile.jpg      ← your photo
│   └── resume.pdf       ← your résumé, linked from the nav + contact section
├── src/
│   ├── components/      ← one file per section (Hero, About, Experience, ...)
│   ├── data.js          ← all editable content and links live here
│   ├── App.jsx           ← assembles the page
│   ├── index.css
│   └── main.jsx
├── index.html
├── tailwind.config.js
└── package.json
```
