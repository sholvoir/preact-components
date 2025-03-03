#!/bin/sh
set -euo pipefail

for file in components/*
do
  if test -f $file
  then
    #echo $file
    echo ${file#components/}
    #ln $file ../memword-web/components/${file#components/}
  fi
done