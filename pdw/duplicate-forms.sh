#!/bin/sh

dir=${1:-.}
ext=${2:-.png}
[[ "$dir" = /* ]] || dir=./$dir

cp -n "$dir/201-a$ext" "$dir/201$ext" &>/dev/null
cp -n "$dir/386-normal$ext" "$dir/386$ext" &>/dev/null
cp -n "$dir/412-plant$ext" "$dir/412$ext" &>/dev/null
cp -n "$dir/413-plant$ext" "$dir/413$ext" &>/dev/null
cp -n "$dir/421-overcast$ext" "$dir/421$ext" &>/dev/null
cp -n "$dir/422-west$ext" "$dir/422$ext" &>/dev/null
cp -n "$dir/423-west$ext" "$dir/423$ext" &>/dev/null
cp -n "$dir/487-altered$ext" "$dir/487$ext" &>/dev/null
cp -n "$dir/492-land$ext" "$dir/492$ext" &>/dev/null
cp -n "$dir/493-normal$ext" "$dir/493$ext" &>/dev/null
cp -n "$dir/550-red-striped$ext" "$dir/550$ext" &>/dev/null
cp -n "$dir/555-standard$ext" "$dir/555$ext" &>/dev/null
cp -n "$dir/585-spring$ext" "$dir/585$ext" &>/dev/null
cp -n "$dir/586-spring$ext" "$dir/586$ext" &>/dev/null
cp -n "$dir/647-ordinary$ext" "$dir/647$ext" &>/dev/null
cp -n "$dir/648-aria$ext" "$dir/648$ext" &>/dev/null
