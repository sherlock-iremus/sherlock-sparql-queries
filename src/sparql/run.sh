SCENARIO=$(sh $1) ; curl -X POST http://data-iremus.huma-num.fr/sparql --data "query=$SCENARIO" | jq ; unset SCENARIO