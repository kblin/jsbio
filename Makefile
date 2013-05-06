SOURCES=src/sjsi.js src/bio.js src/bio.data.js src/bio.alphabet.js \
	src/bio.seq.js

all: bio.min.js

bio.min.js: ${SOURCES}
	uglifyjs ${SOURCES} --comments -o bio.min.js
