[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=chomamateusz_movie-search&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=chomamateusz_movie-search)

# Movie Search App

This is an example app that search movies from OMDb API!

## Running the project

1. Obtain an API key [here](https://omdbapi.com/apikey.aspx)
2. Set environment variables in `.env.local` file

```bash
API_URL=https://www.omdbapi.com/?apikey=<YOUR_API_KEY>
```

3. Run app via `yarn dev`.
4. Or build app using `yarn build` and start using `yarn start`

The API key is not exposed. The OMDb API is called from the backend proxy available on `/api` route.

## Developing

App uses TypeScript and is based on [React](https://reactjs.org/) with [NextJS](https://nextjs.org/) as it provides SSR features and nice file based routing.

The [next-pwa](https://github.com/shadowwalker/next-pwa) plugin was used to provide better mobile experience.

To maintain the structure and order in all files, whole app code is in the `src` folder, all tests are in the `tests` folder and the static assets are in the `public` folder. Moreover, inside the `src` Atomic Design was introduced in `components` folders.

All app domain logic is inside the pages components. If the app will grow the `view` folder can be introduced for components with logic that not necessary needs to be whole pages.

## Testing and linting

App contains unit test for one calculating process and snapshot tests for all reusable components in storybook.

To run tests use `yarn test` or `yarn ci` to run in watch mode.

To run linter use `yarn lint` or `yarn fix` to run linter with `--fix` flag.

To maintain code quality [husky](https://github.com/typicode/husky) is used to lint on precommit and test on prepush.

## Deployment

App is dockerized via two step docker build process introduced to reduce the image size.

To build an image you can use `yarn docker` script. The image has set `chomamateusz/movie-search` and that tag is used to publish it on Docker Hub. Feel free to change the tag in `package.json`.

To publish image use `yarn docker:push` or `docker:deploy` to build and push image at once.

App is deployed on the my VPS K8S cluster now [https://movie-search.ml](https://movie-search.ml).

## Performance

App was tested in Google Lighthouse and scored quite nice results.

Main problem that can't be fixed is the image size and format takt OMDb serves.
