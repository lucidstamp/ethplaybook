FROM alpine:3.8.4

RUN apk --update --no-cache add \
    netcat-openbsd jq curl bash bc && \
    rm -rf /var/lib/apt/lists/* 

VOLUME /curl/output

ADD *.sh /bin/