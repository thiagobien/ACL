#!/bin/bash

version=$(<version)

git checkout -b release/$version
git push -u origin release/$version

git checkout master

minor_version=`cat version | cut -d'.' -f2`
new_minor_version=$((minor_version+1))

new=`cat version | sed 's/\.'"$minor_version"'\..*/\.'"$new_minor_version"'\.0/'`

git add version
git commit -m 'bump version to $new'
git push