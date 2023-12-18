# Build via Google Closure Compiler JAR
# Downloaded from https://mvnrepository.com/artifact/com.google.javascript/closure-compiler/v20231112

# --warning_level=VERBOSE Raise warnings and errors (not just errors)
# --jscomp_error='*' Configure the strictest error/type checking

java -jar closure-compiler-v20231112.jar \
  --js='./src/**.js' \
  --warning_level=VERBOSE \
  --jscomp_error='*' \
  --compilation_level=ADVANCED
