#!/bin/bash

# Extract the version from package.json
PACKAGE_VERSION=$(grep '"version"' package.json | head -1 | awk -F: '{ print $2 }' | sed 's/[", ]//g')

# Get the last git commit hash
LAST_COMMIT_HASH=$(git rev-parse HEAD)

if [ ! -f .snapshot_counter.txt ]; then
  echo 0 > .snapshot_counter.txt
fi
count=$(cat .snapshot_counter.txt)
newcount=$((count + 1))
echo $newcount > .snapshot_counter.txt

cp package.json /tmp/package.bkp.json

SNAPSHOT_TAG=${PACKAGE_VERSION}-SNAPSHOT.${newcount}
echo $SNAPSHOT_TAG
npm version --no-git-tag-version $SNAPSHOT_TAG