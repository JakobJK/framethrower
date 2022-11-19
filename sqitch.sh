#!/usr/bin/env bash

CONNECTION='db:pg://framethrower:framethrower@localhost:2345/framethrower'
DEFAULTS='--chdir packages/sqitch'


function main() {
  echo -e "\033[1;2m$ sqitch $DEFAULTS $@ $CONNECTION\033[0m"
  sqitch $DEFAULTS "$@" $CONNECTION
}

set -e
main "$@" || exit 1