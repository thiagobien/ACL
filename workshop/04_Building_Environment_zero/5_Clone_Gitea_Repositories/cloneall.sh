#!/bin/bash

YLW='\033[1;33m'
NC='\033[0m'

if [ -z $1 ]
then
    echo "Please provide Gitea IP address"
    echo ""
    echo "$ ./cloneall.sh <Gitea IP>"
    exit 1
fi

IP=$1


HTTP_RESPONSE=`curl -k -s -o /dev/null -I -w "%{http_code}" https://gitea.$IP.nip.io/sockshop`

if [ $HTTP_RESPONSE -ne 200 ]
then
	echo "GitHub organization doesn't exist - https://gitea.$IP.nip.io/sockshop - HTTP status code $HTTP_RESPONSE"
	exit 1
fi

declare -a repositories=( $(curl -k -s https://gitea.$IP.nip.io/api/v1/orgs/sockshop/repos | jq -r '.[].name') )

if [ ${#repositories[@]} -eq 0 ]
then
    echo "No GitHub repositories found in sockshop"
    exit 1
fi

mkdir sockshop
cd sockshop

for repo in "${repositories[@]}"
do
	echo -e "${YLW}Cloning https://gitea.$IP.nip.io/sockshop/$repo ${NC}"
	git clone -q "https://gitea.$IP.nip.io/sockshop/$repo"
	echo -e "${YLW}Done. ${NC}"
done

echo ""
echo "The repositories have been cloned to: ${PWD}"
echo ""
cd ..