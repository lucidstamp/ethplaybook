console.log("[geth: init.js] Initial Accounts Funding")

var accounts = [
    "0x4511c0ea3d413a98716f562bc7b3faf53fcb830a",
    // "0x1d323641210a3578e45fdaca973ff58ea0b7e6a3",
    // "0x1afcaf26e733f9ae93e22e1018b8ee0153129807",
    // "0xea477504132102c39166b9825fcb8994b9f180e8",
    // "0xfa0045de1a72368490ae292b1a54d179b7112954",
    // "0xaf8ba676a381940749c9dcc2c9a00897a0a13910",
    // "0x3ded47f846dbe37e3da193903623d9fb7d93ce87",
    // "0xce4ced3c7f8b28833717d54c9a60ca78d2fb5fb8",
    // "0x371ac1dbe4abd7e93e8dcf3db2a4b9fc9bbcf237",
    // "0x5b342f8b03c73c2d1aaa04290417592fe55f70be"
]

// web3.personal.unlockAccount(eth.accounts[0])
for (var i = 0; i < accounts.length; i ++) {
    web3.eth.sendTransaction({ 
        from: eth.accounts[0], to: accounts[i], 
        value: 100e18
    })
}