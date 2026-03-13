# Next.js + NestJS Full-Stack Starter

A production-ready monorepo starter template featuring **Next.js 15** on the frontend and **NestJS** on the backend, with **Prisma ORM** and **PostgreSQL** for data persistence. Designed for teams who want a clean, scalable architecture out of the box.

## Architecture

```
Browser  -->  Next.js 15 (React 19)  -->  NestJS API  -->  PostgreSQL
              Port 3002                    Port 3001        Port 5432
```

The project uses a **Yarn workspaces monorepo** with shared TypeScript configuration across all packages.

## Tech Stack

| Layer     | Technology                          |
| --------- | ----------------------------------- |
| Frontend  | Next.js 15, React 19, Tailwind CSS |
| Backend   | NestJS, TypeScript                  |
| ORM       | Prisma                              |
| Database  | PostgreSQL 16                       |
| Monorepo  | Yarn Workspaces                     |
| CI/CD     | GitHub Actions                      |
| Container | Docker Compose                      |

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) >= 20
- [Yarn](https://yarnpkg.com/) (v4 recommended)
- [Docker](https://www.docker.com/) and Docker Compose

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-username/nextjs-nestjs-fullstack-starter.git
cd nextjs-nestjs-fullstack-starter

# 2. Copy environment variables
cp .env.example .env

# 3. Install dependencies
yarn install

# 4. Start PostgreSQL
yarn docker:up

# 5. Run database migrations
yarn db:migrate

# 6. Generate Prisma client
yarn db:generate

# 7. Start development servers
yarn dev
```

The frontend will be available at [http://localhost:3002](http://localhost:3002) and the API at [http://localhost:3001](http://localhost:3001).

## Port Configuration

| Service  | Port |
| -------- | ---- |
| Web      | 3002 |
| API      | 3001 |
| Postgres | 5432 |
| pgAdmin  | 5050 |

## Available Scripts

| Command          | Description                         |
| ---------------- | ----------------------------------- |
| `yarn dev`       | Start all apps in development mode  |
| `yarn dev:web`   | Start Next.js frontend only         |
| `yarn dev:api`   | Start NestJS backend only           |
| `yarn build`     | Build all packages                  |
| `yarn lint`      | Lint all packages                   |
| `yarn test`      | Run tests across all packages       |
| `yarn db:migrate`| Run Prisma migrations               |
| `yarn db:generate`| Generate Prisma client             |
| `yarn db:studio` | Open Prisma Studio                  |
| `yarn docker:up` | Start Docker services               |
| `yarn docker:down`| Stop Docker services               |

## API Documentation

Swagger UI is available at [http://localhost:3001/api/docs](http://localhost:3001/api/docs) when the API is running.

## Project Structure

```
nextjs-nestjs-fullstack-starter/
├── apps/
│   └── web/                    # Next.js 15 frontend
│       ├── src/
│       │   ├── app/            # App Router pages
│       │   └── components/     # Shared components
│       ├── package.json
│       ├── next.config.ts
│       ├── tailwind.config.ts
│       └── tsconfig.json
├── packages/
│   ├── api/                    # NestJS backend
│   │   ├── src/
│   │   │   ├── main.ts         # Entry point + Swagger setup
│   │   │   ├── app.module.ts   # Root module
│   │   │   └── health/         # Health check module
│   │   ├── package.json
│   │   ├── nest-cli.json
│   │   └── tsconfig.json
│   └── database/               # Prisma schema + migrations
│       ├── prisma/
│       │   └── schema.prisma
│       └── package.json
├── docker/
│   └── docker-compose.yml      # PostgreSQL + pgAdmin
├── .github/
│   └── workflows/
│       └── ci.yml              # CI pipeline
├── package.json                # Root workspace config
├── tsconfig.base.json          # Shared TS config
├── .env.example
└── .gitignore
```

## Adding New Packages

To add a new workspace package:

1. Create a directory under `apps/` or `packages/`
2. Add a `package.json` with the `@starter/` scope
3. Run `yarn install` to link the workspace

## pgAdmin (Optional)

To start pgAdmin alongside PostgreSQL:

```bash
docker compose -f docker/docker-compose.yml --profile tools up -d
```

Access pgAdmin at [http://localhost:5050](http://localhost:5050) with credentials `admin@starter.local` / `admin`.

## License

MIT
