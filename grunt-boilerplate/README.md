# Setup

## Global Installation

Download and install [Node.js](https://nodejs.org/) (which includes the [NPM command-line tool](https://www.npmjs.com/)).

Install the [Grunt command line interface](http://gruntjs.com/) (you may have to use `sudo`):

    $ npm install -g grunt-cli

## Local, Per-Project Installation

### In your project’s root directory:

Install Grunt (note: the `--save-dev` argument will add `grunt` to `package.json`):

    $ npm install grunt --save-dev

Install [SASS](https://www.npmjs.com/package/grunt-contrib-sass), [Watch](https://www.npmjs.com/package/grunt-contrib-watch), [Concat](https://www.npmjs.com/package/grunt-contrib-concat) and [Uglify](https://www.npmjs.com/package/grunt-contrib-uglify):

    $ npm install grunt-contrib-sass grunt-contrib-watch grunt-contrib-concat grunt-contrib-uglify --save-dev
