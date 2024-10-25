#!/bin/bash
#git checkout master
#git pull
#source ~/.nvm/nvm.sh
nvm use 18.17.1
yarn run build
zip -r out.zip  out/
scp /home/huy/Documents/dev/the20-main/out.zip  ubuntu@13.212.116.52:/opt/huyhoang/the20-theme

exec $@
