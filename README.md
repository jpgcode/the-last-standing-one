## Phaser game

An experiment with Phaser!

> [Gulp](http://gulpjs.com/) the task automation tool,
> [Node.js](https://nodejs.org/) Containing
> modern web development tools such as 
>[BrowserSync](http://www.browsersync.io/).
> Helping you to stay productive following the best practices. A solid starting
> point for both professionals and newcomers to the industry.

### Directory Layout

```
.
├── /app/                       # The source code of the application
│   ├── /assets/                # The main folder for assets (images and sounds)
│   ├── /js/                  	# The JS for the gulp project
│   ├── /lib/                  	# Here will go the phaser library and/or any other libraries needed
│   └── index.html              # Main html file of the project
├── /node_modules/              # 3rd-party libraries and utilities
│── .gitignore                  # Git ignore rules
│── gulpfile.js                 # The Gulp task manager configuration
│── package.json                # The node.js modules dependencies file
└── README.md                   # Important information related
```

### Getting Started

Just clone the repo:

```shell
$ git clone -o https://jpgcode@bitbucket.org/jpgcode/starterkit-2.0.git
$ cd MyApp
$ npm install                   # Install Node.js components listed in ./package.json
$ bower install                 # Install Bower dependencies listed in ./bower.json
```

### Development server

```shell
$ gulp                          # Start the static node.js server and runs it in browser
```

This will start a light-weight development server with "live reload" and
synchronized browsing across multiple devices and browsers.

---
Made with ♥ by Jose Pablo Granados ([@jpgcode](https://twitter.com/jpgcode))# gulpAssemble
