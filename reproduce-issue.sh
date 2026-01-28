#!/usr/bin/env bash

set -eo pipefail

if npm test; then
    echo "--> issue could not be reprodued"
    exit 1
else
    echo "--> issue reproduced: npm test is failing"
fi
