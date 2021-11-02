let div = document.querySelector('.childpoke');
console.log(div)
let img1 = 25;
function fazget(url){
    
     fetch(`https://pokeapi.co/api/v2/pokemon/${img1}`).then(function(response){
     
    return response.json()
  }).then(jsonBody =>{
        let para = document.createElement('p');
        let texto = document.createTextNode(jsonBody.name)
        para.appendChild(texto)
        div.appendChild(para)
     
     
      let img = document.createElement("img");
      img.src= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${img1}.svg`;    
      
      div.appendChild(img)
    console.log(jsonBody)
    let cor = jsonBody.types[0].type.name;
    switch (cor){
      case  'ground':
       cor = document.querySelector('.childpoke').style.backgroundColor = '#ab880c';
       break;
      case 'fire':
        cor = document.querySelector('.childpoke').style.backgroundColor = '#912013';
        break;
      case 'water':
        cor = document.querySelector('.childpoke').style.backgroundColor = '#26b4c9';
        break;
      case 'electric':
        cor = document.querySelector('.childpoke').style.backgroundColor = '#e8a813';
    }
   
    
     
    
  })
}

fazget()