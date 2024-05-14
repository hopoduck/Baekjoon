#!/bin/bash

# Get the current date and time in ISO format
NOW=$(date +%Y-%m-%d)

# Write the commit message with the current date and time
git add .
git commit -m "$NOW 추가"

git push origin master
