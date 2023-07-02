import { AddressLookupTableProgram, Connection, GetProgramAccountsConfig, Keypair, PublicKey, sendAndConfirmTransaction, Transaction } from "@solana/web3.js"
const PromisePool = require("@supercharge/promise-pool").default;

import fs from 'fs'
setTimeout(async function(){
// invalid cache. I will recommend using a paid RPC endpoint.
let  connection = new Connection((process.env.RPC_ENDPOINT as string));
var connection2= connection

  const payer = (
    Keypair.fromSecretKey(new Uint8Array(JSON.parse(fs.readFileSync((process.env.WALLET_KEYPAIR as string)).toString()))));
const configOrCommitment: GetProgramAccountsConfig = {
    commitment: 'confirmed',
    filters: [
     
    ],
  };

let myluts: any = []

    let luts = await connection2.getProgramAccounts(AddressLookupTableProgram.programId)
    console.log(luts.length)
    await PromisePool.withConcurrency(1)
    .for(luts.reverse())
    // @ts-ignore
    .handleError(async (err, asset) => {
      console.error(`\nError uploading or whatever`, err.message);
      console.log(err);
    })
    // @ts-ignore
    .process(async (lut: any) => {
      // @ts-ignore
      let maybemine = await connection2.getAddressLookupTable(lut.pubkey)
      if (    (maybemine.value?.state.deactivationSlot == 18446744073709551615n)
)
      {
        let temp = ""
        if (maybemine.value.state.addresses.map((pk) => pk.toBase58()).includes("So1endDq2YkqhipRh3WViPa8hdiSpxWy6z3Z6tMCpAo")){
       
     myluts.push( lut.pubkey )

    console.log(myluts.length)
    fs.writeFileSync('./luts.json', 
JSON.stringify(myluts))
    }
      }
      else {
        // @ts-ignore
      }
    })
})
