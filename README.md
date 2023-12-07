# Artisan website

## Prerequisites

- Install [pnpm](https://pnpm.io/installation)
- Create a [PlanetScale account](https://planetscale.com/)
- [Link the Next.js App with PlanetScale](https://planetscale.com/docs/tutorials/connect-nextjs-app)
- **You'll most likely be required to create a ```/prisma/.env``` file, to write the DATABASE_URL endpoint**

## Running Locally

1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

3. Create the ```/prisma/.env``` containing your PlanetScale DATABASE_URL endpoint.
Then push the DB schema into your PlanetScale database:
```sh
npx prisma db push
``` 

3. Start the development server:

```sh
pnpm dev
```

## License

Licensed under the [AGPL-3.0](https://github.com/artisan-blockchain/artisan-website/LICENSE.md).

Feel free to reach out at [contact@artisanbuilder.xyz](contact@artisanbuilder.xyz)
