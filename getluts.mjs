import { AddressLookupTableProgram, Connection, GetProgramAccountsConfig, Keypair, PublicKey, sendAndConfirmTransaction, Transaction } from "@solana/web3.js"
const PromisePool = require("@supercharge/promise-pool").default;

import fs from 'fs'
setTimeout(async function(){
// invalid cache. I will recommend using a paid RPC endpoint.
let  connection = new Connection((process.env.NODE_ENV == 'production' ? 'http://localhost:8899' : 'https://solana-mainnet.g.alchemy.com/v2/ETWO1_-exD_tuIyq9YTW9d37nAvNT7XQ'));
var connection2= new Connection(process.env.RPC1 as string);

process.env.SEARCHER ? connection = connection2 : connection = connection

  const payer = (
    Keypair.fromSecretKey(new Uint8Array(JSON.parse(fs.readFileSync((process.env.NODE_ENV == 'production' ? '/Users/jarettdunn' : '/Users/jarettdunn') + '/jaregm.json').toString()))));
const configOrCommitment: GetProgramAccountsConfig = {
    commitment: 'confirmed',
    filters: [
     
    ],
  };

let myluts: any = {}
while (true){

    let luts = await connection2.getProgramAccounts(AddressLookupTableProgram.programId)
    await PromisePool.withConcurrency(250)
    .for(luts)
    // @ts-ignore
    .handleError(async (err, asset) => {
      console.error(`\nError uploading or whatever`, err.message);
      console.log(err);
    })
    // @ts-ignore
    .process(async (lut: any) => {
      // @ts-ignore
      let maybemine = await connection2.getAddressLookupTable(lut.pubkey)
      if (maybemine.value?.state.authority?.toBase58()== (payer.publicKey.toBase58()) &&         (maybemine.value?.state.deactivationSlot == 18446744073709551615n)
)
      {

        // `payer` is a valid `Keypair` with enough SOL to pay for the execution
var blockhash = await connection2
.getLatestBlockhash()
.then((res) => res.blockhash);

let lookupTableInst0 =
  await AddressLookupTableProgram.deactivateLookupTable({lookupTable:
    lut.pubkey,
    authority:
    payer.publicKey,}
);
let lookupTableInst =
  await AddressLookupTableProgram.closeLookupTable({lookupTable:
    lut.pubkey,
    authority:
    payer.publicKey,
    recipient:
    payer.publicKey}
);

let tx2 = new Transaction()
tx2.add(lookupTableInst0)
blockhash = await connection2
    .getLatestBlockhash()
    .then((res) => res.blockhash);
tx2.recentBlockhash = blockhash
tx2.sign(payer)

try{
await sendAndConfirmTransaction(connection, tx2,[payer], {skipPreflight: false})
} catch (err){
    
console.log(err)
}

 tx2 = new Transaction()
tx2.add(lookupTableInst)
blockhash = await connection
    .getLatestBlockhash()
    .then((res) => res.blockhash);
tx2.recentBlockhash = blockhash
tx2.sign(payer)

try{
 ///await sendAndConfirmTransaction(connection, tx2,[payer], {skipPreflight: false})
} catch (err){
    
console.log(err)
}

        let temp = ""
        for (var abc of maybemine.value.state.addresses){
          temp+=(abc.toBase58() + ",")
        }
     myluts[ temp ] = lut.pubkey
      }
      else {
        // @ts-ignore

      }
    })
    console.log(myluts.length)
    fs.writeFileSync('./luts.json', 
JSON.stringify(myluts))
  }
})
