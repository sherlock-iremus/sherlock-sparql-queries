ssh tbottini@cchum-kvm-data-iremus.in2p3.fr "mkdir sherlock/rdf-data/examples"

for f in *.ttl
do
    scp $f tbottini@cchum-kvm-data-iremus.in2p3.fr:sherlock/rdf-data/examples
done

ssh tbottini@cchum-kvm-data-iremus.in2p3.fr "ls sherlock/rdf-data/examples"

scp fuseki.post.graph.examples.sh tbottini@cchum-kvm-data-iremus.in2p3.fr:sherlock/rdf-data/examples
ssh tbottini@cchum-kvm-data-iremus.in2p3.fr "cd sherlock/rdf-data/examples ; ./fuseki.post.graph.examples.sh"