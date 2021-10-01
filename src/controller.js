const { response, request } = require('express');
const axios = require('axios')

const getPairsOfPlayers = async (req = request, resp = response, next) => {
  //Implementar logica aquí
  console.log(resp,'aqui')
let url = 'https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players'

const findParejas = (arr,k) =>{
    let resp = []
    arr.forEach(persona1 => {
        arr.forEach(persona2=>{
            if(persona1!==persona2){
                if( parseFloat(persona1.h_in) + parseFloat(persona2.h_in) === parseFloat(k)){
                    resp.push([persona1,persona2])
                }
            }
        })
    });
    return resp
} 
//Prueba
let arr = []
axios.get(url).then(resp => {
    arr = resp.data.values
    let ans = findParejas(arr,K)
    console.log(ans)
})
  


  return resp.json({ data: arr });
};

module.exports = { getPairsOfPlayers };
