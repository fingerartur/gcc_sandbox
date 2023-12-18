# GCC Sandbox

When it comes to type-checking Google Closure Compiler lags behind TypeScript
and considerably so. It is very _unclear_ what which parts of code will be
correctly type-checked and which will be silently ignored by the compiler.

Here is a simple sandbox to test out the capabilities of GCC.

Note: I've already [reported a bunch of issues](https://github.com/google/closure-compiler/issues?q=is%3Aissue+author%3Afingerartur) to GCC previously, those not listed here
in the sandbox, not yet anyway.

## Links

- GCC Docs: https://github.com/google/closure-compiler
- GCC Intro: https://developers.google.com/closure/compiler
- GCC JAR Download: https://mvnrepository.com/artifact/com.google.javascript/closure-compiler/v20231112
- GCC NPM Package: https://www.npmjs.com/package/google-closure-compiler _(Typically lags behind JAR)_
