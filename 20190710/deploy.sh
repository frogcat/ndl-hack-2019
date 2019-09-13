#!/usr/bin/env bash

curl -v -H 'Accept: application/sparql-results+json' --data-urlencode 'query@-' https://jpsearch.go.jp/rdf/sparql > data.json << EOS
select ?s ?p ?label (count(?x) as ?count) where{
?s rdfs:subClassOf* <https://jpsearch.go.jp/term/type/記述情報> ; rdfs:label ?label
  optional { ?s rdfs:subClassOf ?p}
  optional { ?x a ?s}
} group by ?s ?p ?label
EOS
