FROM golang:1.12-alpine
RUN apk add --no-cache git gcc libc-dev make
RUN go get -u github.com/AtlantPlatform/ethereum-playbook

FROM ethereum/solc:0.5.1-alpine
RUN apk add --no-cache bash
WORKDIR /root
VOLUME /root/contracts
VOLUME /var/chain
COPY --from=0 /go/bin/ethereum-playbook /usr/local/bin/ethereum-playbook
# COPY *.yml /root/
CMD ["bash"]