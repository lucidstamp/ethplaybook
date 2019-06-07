console.log("[geth: force-block.js] Doing penny transaction to force next block")

var accounts = [
    "0x5b342f8b03c73c2d1aaa04290417592fe55f70be"
]

for (var i = 0; i < accounts.length; i ++) {
    web3.eth.sendTransaction({ 
        from: eth.accounts[0], to: accounts[i], 
        value: 1
    })
}