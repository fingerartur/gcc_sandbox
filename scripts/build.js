// Build via the NPM version of Google Closure Compiler

const ClosureCompiler = require('google-closure-compiler').compiler;
const chalk = require('chalk')
const childProcess = require('child_process')

const DIST_DIR = './dist'

const cleanup = () => {
  console.info('Cleaning up...')

  childProcess.execSync(`
    rm -rf ${DIST_DIR};
    mkdir ${DIST_DIR};
  `, { stdio: 'inherit' })
}

const BASE_CONFIG = {
  js: [
    './base.js', // Google Closure base.js
    './src/**.js', // source
    './src/**.apijs', // externs (type definitions)
  ],

  hide_warnings_for: [
    'base.js', // full of type errors
  ],

  // Raise warnings and errors (not just errors)
  warning_level: 'VERBOSE',
  // Optimizations / minification
  assume_function_wrapper: true, // allow more optimizations because I'm not using Window. Really improves minification (cca 50% reduction)
  compilation_level: 'ADVANCED',
  // Configure the strictest error/type checking
  jscomp_error: '*',

  // Enable file tree shaking
  dependency_mode: 'PRUNE',
  // Enable modern import paths and import from node_modules
  module_resolution: 'NODE',

  // source maps
  create_source_map: '%outname%.map',
  source_map_include_content: true,
  output_wrapper: '%output%//# sourceMappingURL=bundle.js.map',
}

const gccCompile = (config) => {
  return new Promise((resolve, reject) => {
    new ClosureCompiler(config).run((exitCode, stdOut, stdErr) => {
      if (stdOut.length > 0) {
        console.info(stdOut)
      }
      if (stdErr.length > 0) {
        console.error(chalk.red(stdErr))
      }

      if (exitCode === 0) {
        resolve(null)
      } else {
        console.info(chalk('GCC Exit code:'), exitCode)
        reject()
      }
    });
  })
}

const compileBundle = () => {
  console.info('Compiling bundle...')

  const config = {
    ...BASE_CONFIG,
    entry_point: './src/js/index.js',
    js_output_file: `${DIST_DIR}/bundle.js`,

    // Debug: list of files included in the bundle
    output_manifest: `${DIST_DIR}/debug_filedeps_bundle.txt`,
  }

  return gccCompile(config)
}

const run = async () => {
  try {
    await compileBundle()
    cleanup()
    console.info(chalk.green('Done!'))
  } catch (error) {
    console.error(chalk.red('Build failed'))
  }
}

run()
