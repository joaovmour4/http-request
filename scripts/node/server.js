const express = require('express');
const axios = require('axios');
const fs = require('fs');

const app = express();
const PORT = 3000;


app.get('/getNota', async (req, res) => {
  const url = 'https://nfe.maraba.pa.gov.br/eSiat/Valida_NFE_Emissao.aspx?InscricaoMunicipal=309239&NumeroNota=1&Origem=RELACAO';
  
  try {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://nfe.maraba.pa.gov.br/eSiat/Valida_NFE_Emissao.aspx?Origem=RELACAO&InscricaoMunicipal=309239&NumeroNota=1',
      headers: {}
    };
    axios.request(config)
    .then((response)=>{
      res.send(JSON.stringify(response.data));
    })
    .catch((error) =>{
      console.log(error);
    })
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
