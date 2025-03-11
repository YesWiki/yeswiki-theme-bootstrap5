# yeswiki-theme-bootstrap5

Bootstrap 5 theme for YesWiki Doryphore

## Install dependencies

You need sass and eslint globally installed `npm install sass globals @eslint/js @eslint/eslintrc -D`
Install Bootstrap dependencies with `npm install`

## Watch and build

While editing scss files, you can use `npm run watch` that will run
`sass --watch scss/yeswikeco.scss styles/yeswikeco.bs.min.css --style compressed --silence-deprecation mixed-decls --silence-deprecation color-functions --silence-deprecation import --silence-deprecation global-builtin`

And to build `npm run build` that will run 
`sass scss/yeswikeco.scss styles/yeswikeco.bs.min.css --style compressed --silence-deprecation mixed-decls --silence-deprecation color-functions --silence-deprecation import --silence-deprecation global-builtin`
