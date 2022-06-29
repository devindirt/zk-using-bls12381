const { initialize } = require('zokrates-js')
const fs = require("fs")
// const bigInt = require("big-integer");
const ffjavascript = require("ffjavascript")

// console.log(bigInt(0x1847b68c5a71e29a948c84e9aeb73c567b5cc5ae013196931380733c85c2c1f42d86d450a18d6c64e3ed1ff1a2b56e18))
// console.log(BigInt("0x1847b68c5a71e29a948c84e9aeb73c567b5cc5ae013196931380733c85c2c1f42d86d450a18d6c64e3ed1ff1a2b56e18"))
// console.log(bigInt(42))
// console.log(BigInt(42).toString())

initialize().then(async (defaultProvider) => {
  let zokratesProvider = defaultProvider.withOptions({ curve: "bls12_381", scheme: "g16" });
  const source = fs.readFileSync("root.zok", "utf8")
  const artifacts = zokratesProvider.compile(source);
  const keypair = zokratesProvider.setup(artifacts.program);
  fs.writeFileSync('verification_key.json', JSON.stringify(keypair.vk, null, 1))
  // const verifier = zokratesProvider.exportSolidityVerifier(keypair.vk);
  // fs.writeFileSync('solidity_verifier.sol', verifier)
  const { witness, output } = zokratesProvider.computeWitness(artifacts, ["81", "6561"]);
  const proof = zokratesProvider.generateProof(artifacts.program, witness, keypair.pk);
  fs.writeFileSync('proof.json', JSON.stringify(proof, null, 1))
  let _proof = JSON.parse(fs.readFileSync("proof.json", "utf8"))
  // let _proof = ffjavascript.utils.stringifyBigInts(_proof_)
  console.log('["' +
    BigInt(_proof.proof.a[0]).toString() + '","' +
    BigInt(_proof.proof.a[1]).toString() + '"],[["' +
    BigInt(_proof.proof.b[0][0]).toString() + '","' +
    BigInt(_proof.proof.b[0][1]).toString() + '"],["' +
    BigInt(_proof.proof.b[1][0]).toString() + '","' +
    BigInt(_proof.proof.b[1][1]).toString() + '"]],["' +
    BigInt(_proof.proof.c[0]).toString() + '","' +
    BigInt(_proof.proof.c[1]).toString() + '"],["' +
    BigInt(_proof.inputs[0]) + '"]')

  // const isVerified = zokratesProvider.verify(keypair.vk, proof);
  // console.log(isVerified)
});
