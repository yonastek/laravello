const mix = require('laravel-mix');


 if(mix.inProduction()) {
     mix.version()
 }
 mix.extend(
    'graphql',
    new class {
        dependencies() {
            return ['graphql', 'graphql-tag']
        }
        webpackRules() {
            return {
                test: /\.(grapql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader'
            }
        }
    }()
);
mix.js('resources/js/app.js', 'public/js')
.vue()
.postCss('resources/css/app.css', 'public/css', [
    require('tailwindcss'),
]);
mix.graphql();