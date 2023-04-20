Usage issues (can be fixed): https://github.com/iden3/snarkjs/issues/122

1. Use old `js` based 0.5 version circom lib `npm i -g circom` & latest snarkjs `npm i -g snarkjs`
2. Compile it using prime bls12381 `circom circuit.circom --prime BLS12381 --r1cs --wasm --sym`
3. Create input.json with values & Calculate witness using `snarkjs wc circuit.wasm input.json witness.wtns` https://docs.circom.io/getting-started/computing-the-witness/#computing-the-witness-with-c
4 then follow all steps from https://docs.circom.io/getting-started/proving-circuits/


**Calldata To test** convert to bigint if required using https://www.rapidtables.com/convert/number/hex-to-decimal.html
```
["0x1473ebd8b0a03faa87a0bd8dfc47a5c48898f0f9efd46d0dae39dfafcc0ac5ca548bd8fe9382a80e4821952389794e0c", "0x60b16ec324dce974a1437fb18903810737613b0bbe02022d08f9546815eb5a76dfc7eef987eea4d18af426243d33934"],[["0xd6b0b391dcac320a0056b3ba2a78679e0c761f7c634782a0e7e0070955e93261edb9428126a7a8d776c000d1c042501", "0x12df1368133e7a00b8dc007e298a9af0d61618b9c8af7cc4acda7633d722f3aa1953ca2d173fe8a266b7dd2636261d5b"],["0xd01aecee6ee1183ef3252f8d222b234049220a4c96a2337b6dc18f5eacf684c486259555ecaed1a61a63b133a83f3e5", "0x85b963951c54b2a8ad5d4446284fd871d672f42dd3fccfd52d73bd42a00bf4a23bfaee2437be63fd63f6018274f790"]],["0x1977b68ca648c486bb3b2f958397801201a2c667cd71738df81d6552caf002a28fe60253089be49c317ef824fb9933dd", "0x171e3d98632a648d417273af9d5a3f0028a513c17f0a88ff9a0e78255e83d6ebcec9c8559cf29d63bcdb04e0e3db535a"],["0x0000000000000000000000000000000000000000000000000000000000000021"]
```


A working example of this on top of Aeternity's FATE (Virtual Machine) using Sophia programming language. Run `static_verification` to perform verification operation using static values (proof & public output)
https://gist.github.com/VitalJeevanjot/9d9e248714795fc6e48dcba9b8b00680#file-bls12_381_latest_verifier-aes-L2
