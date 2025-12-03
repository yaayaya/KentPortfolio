# Kent Portfolio

A personal portfolio website for Digital Artist / Designer Kent 梁家誠, built with Next.js and TinaCMS.

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

To start the development server with TinaCMS (Content Editing Mode):

```bash
npm run tina:dev
```

This will start:
- Next.js app at `http://localhost:3000`
- TinaCMS admin at `http://localhost:3000/admin`

### 3. Build for Production

```bash
npm run tina:build
npm run build
```

## Tech Stack

- **Framework**: Next.js 14
- **CMS**: TinaCMS
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animation**: Framer Motion

## TinaCMS Cloud Setup (Production)

To enable content editing in production (e.g., on Vercel), you need to connect to Tina Cloud.

### 1. Setup Tina Cloud Project
1. Go to [Tina Cloud Dashboard](https://app.tina.io/) and sign up/login.
2. Create a new project and select your GitHub repository.
3. Once created, you will get a **Client ID**.
4. Go to the "Tokens" tab and create a **Content (Read/Write)** token.

### 2. Configure Environment Variables
In your hosting provider (e.g., Vercel), add the following environment variables:

```bash
NEXT_PUBLIC_TINA_CLIENT_ID=<Your Client ID>
TINA_TOKEN=<Your Content Token>
NEXT_PUBLIC_TINA_BRANCH=main
```

### 3. Enable Media Manager (Optional)
If you want to upload images to a cloud provider (like Cloudinary) instead of Git, you'll need to configure a media store. By default, this project uses Git-backed media (images saved to the repo).

### 4. Access Admin
Once deployed, navigate to `/admin` on your production URL to log in and edit content.
