#!/bin/bash
today=`date '+%Y_%m_%d__%H_%M_%S'`;
filename="./backups/strapi-$today.db"
echo "Backing up strapi.db to $filename"
scp -s srv-cjal7nue546c73avn3s0@ssh.oregon.render.com:/data/strapi.db $filename