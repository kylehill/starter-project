# Kyle's Starter Project

This is mine, I assembled all the configs by hand. You should absolutely do this yourself at some point.

It makes heavy use of:

- [Typescript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/)
- [React-Aria](https://react-spectrum.adobe.com/react-aria/)

## Commands

- `yarn dev`: Run the application locally (localhost:3000)
- `yarn build`: Create a production build
- `yarn start`: Basically just for Vercel; I guess you can see production issues
- `yarn tsc`: Type-checking
- `yarn storybook`: Runs storybook locally for isolated component development (localhost:6006)
- `yarn test`: Sets up a watcher to run tests on file save
- `yarn coverage`: One-off run and report on test coverage
- `yarn lint`: Just runs the `jsx-a11y` static checker since I use Prettier integrated in my editor to lint on file save
