#!/bin/bash
today=`date '+%Y_%m_%d__%H_%M_%S'`;
filename="./backups/strapi-$today.db"
echo "Backing up strapi.db to $filename"
scp -s srv-cio541tgkuvudi8r97s0@ssh.oregon.render.com:/data/strapi.db $filename