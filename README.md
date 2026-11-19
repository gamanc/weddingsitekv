> [!IMPORTANT]
> **Pending: redeploy Cloud Functions.** `functions/` was upgraded (firebase-functions 7 with the v1 API, firebase-admin 14, axios, Node 18 → 22) and both Telegram triggers now ignore `demo*` guest docs and deleted docs. These changes are **not deployed yet**. When ready:
> ```bash
> cd functions && npm install && npm run deploy
> ```
> Until then, production keeps running the previous functions build. The site does not depend on this, because demo invitations never write to Firestore.

## Demo invitations

Open the site with `?key=demo` (family invite) or `?key=demo-pareja` (couple invite) to see every feature without a real guest key. Submitting the RSVP form only shows a popup that explains the notification the couple would receive. Nothing is saved. Demo guests are defined in `src/constants/demo.ts`.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
