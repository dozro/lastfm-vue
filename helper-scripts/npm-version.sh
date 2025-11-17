#!/bin/bash

# Extract the version from package.json
PACKAGE_VERSION=$(grep '"version"' package.json | head -1 | awk -F: '{ print $2 }' | sed 's/[", ]//g')
echo $PACKAGE_VERSION