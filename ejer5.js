function organizeShoes(shoes) {

    const peers = [];

    const shoeCount = shoes.reduce((acc, shoe) => {
        if (!acc[shoe.size]){
            acc[shoe.size] = { left: 0, right: 0 };
        }

        if(shoe.type === 'I'){
            acc[shoe.size].left++;

        }else if (shoe.type === 'R'){
            acc[shoe.size].right++;
        }

        return acc;


    }, {});
    
    for (const size in shoeCount) {
     const { left, right } = shoeCount[size];

     const pairs = Math.min(left, right);

     for (let i = 0; i < pairs; i++){
        peers.push(parseInt(size));
     }
        
    };

    return peers;

  }

  console.log(organizeShoes([
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ])); 
 

  const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
  ]

  const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
  ]