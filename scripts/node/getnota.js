const { ifError } = require('assert');
const axios = require('axios');
const express = require('express');
const fs = require('fs');
const zlib = require('zlib');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://nfe.maraba.pa.gov.br/eSiat/Valida_NFE_Emissao.aspx?Origem=RELACAO&InscricaoMunicipal=309239&NumeroNota=1',
  headers: {'Content-Type':'Application/pdf',
            'Accept':'*/*',
            'Accept-Encoding':'gzip, deflate, br'}
};

axios.request(config)
.then((response) => {
  compressedData = Buffer.from(response.data, 'binary');
  zlib.deflate(compressedData, (err, uncompressedData)=>{
    if(err){
      console.log(err);
    }else{
      console.log(uncompressedData);
    }
  })
})
.catch((error) => {
  console.log(error);
});