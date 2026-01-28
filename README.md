# mre-sf-plugin-flags-dir

> Minimal reproducible example to demonstrate the --flags-dir flag is not working for (third-party) sf plugins.

[![Actions Status](https://github.com/mdapi-issues/mre-sf-plugin-flags-dir/actions/workflows/default.yml/badge.svg?branch=main)](https://github.com/mdapi-issues/mre-sf-plugin-flags-dir/actions?query=branch:main)

> [!IMPORTANT]
> A green status badge means the issue was successfully reproduced.
>
> A red status badge means the issue was fixed or the pipeline failed for another reason.

## Installation

```shell
npm ci
```

## Reproduction

This is the flags-dir "mascots":

```sh-session
$ tree mascots
mascots
└── name

1 directory, 1 file
$ cat mascots/name
Astro
Codey
```

Using the `--flags-dir mascots` does not work:

```shell
./bin/dev.js hello --flags-dir mascots
./bin/run.js hello --flags-dir mascots
sf plugins link && sf hello --flags-dir mascots
```

All those commands print the default value of the `--name` flag ("Salesforce")

Output:

```
Hello Salesforce!
Hello Salesforce!
Hello Salesforce!
```

While specyfing multiple `--name` flags works fine:

```shell
./bin/run.js hello --name Astro --name Codey
```

Output:

```
Hello Astro, Codey!
```

## Testing

```shell
npm test
```

Output:

```
hello
✔ should greet Salesforce by default
✔ should greet a single mascot
✔ should greet two mascots given two flags
1) should greet two mascots given a flags dir


3 passing (35ms)
1 failing

1) hello
    should greet two mascots given a flags dir:

    AssertionError: expected 'Hello Salesforce!' to deeply equal 'Hello Astro, Codey!'
    + expected - actual

    -Hello Salesforce!
    +Hello Astro, Codey!
```
