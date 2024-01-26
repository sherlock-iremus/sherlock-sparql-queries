SCRIPT=`realpath $0`
DIR=`dirname $SCRIPT`

curl -X DELETE -G http://localhost:3030/iremus/data --data-urlencode graph=http://data-iremus.huma-num.fr/graph/examples
for f in $DIR/*.ttl
do
    curl -I -X POST -H Content-Type:text/turtle -T $f -G http://localhost:3030/iremus/data?graph=http://data-iremus.huma-num.fr/graph/examples
done
