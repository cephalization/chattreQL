# chattreQL

![Demo](/image/2022-10-12%2015.23.35.gif)

Barebones chat apps to learn experiment with frontend frameworks, meta-frameworks, api design, new hotnesses

- Vanilla React w/ apollo frontend built with Vite
- NextJS React w/ apollo frontend
- Apollo Express Server API

# Commands

The top level of the workspace supports some turbo/yarn workspace commands

- Install all deps
  - `yarn`
  - installs deps for all sub apps and packages
- Build all apps and packages
  - `yarn build`
- Run all apps in dev mode
  - `yarn dev`
- Deploy all deployable apps and packages
  - `yarn deploy`
- Lint all apps and packages
  - `yarn lint`
- Clean build artifacts for all apps and packages
  - `yarn clean`
- Format code with prettier
  - `yarn format`

Each sub app or package will support a subset of these commands.

# Adding new apps/packages to the Monorepo

Apps

- App creation is very close to a normal app initialization. The main differences live in package.json, namely that imports from other places in the monorepo can have a version of '\*'.
- I usually just copy examples from turborepo and then tweak from there to use my own internal packages
  - https://github.com/vercel/turborepo/tree/main/examples

Packages

- The packages in this repo are more than likely only going to be internal

  - The process described here sets up internal packages to be built/bundled
    by the importing app/package
  - https://turborepo.org/docs/handbook/sharing-code/internal-packages

- External packages are configured similarly to apps, and are built before import

  - https://turborepo.org/docs/handbook/publishing-packages/bundling

## Tools

- yarn
- turborepo
