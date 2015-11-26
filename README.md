# gulp-snippet-highlight

This gulp plugin is based on [gulp-hihlight](http://github.com/johannestroeger/gulp-highlight). It has been modified to allow for manual language and options configuration.

`gulp-snippet-highlight` Uses [highlight.js](https://highlightjs.org/) to compile single html snippets. If no `language` option is specified, your snippet will be compiled with an `html` code highlighter as a default.

You can also pass in highlight.js configuration object as per highlight.js [docs](http://highlightjs.readthedocs.org/en/latest/api.html#configure-options):
- `tabReplace`: a string used to replace TAB characters in indentation.
- `useBR`: a flag to generate <br> tags instead of new-line characters in the output, useful when code is marked up using a non-pre container.
- `classPrefix`: a string prefix added before class names in the generated markup, used for backwards compatibility with stylesheets.
- `languages`: an array of language names and aliases restricting auto detection to only these languages.
Accepts an object r

## Install

```
npm install --save-dev gulp-snippet-highlight
```


## Example

```js
var gulp = require('gulp');
var highlight = require('gulp-snippet-highlight');

gulp.task('highlight-snippet', function () {
  return gulp.src("./src/snippet.html")
        .pipe(highlight({
         language: "html",
         configure: {},
         }))
    .pipe(gulp.dest("./docs"));
});

```

## License

MIT © [Kris Zima](https://github.com/kzima)
