function legendaryFarming(str) {
    let keyMaterials = { shards: 0, fragments: 0, motes: 0 };
    let junkMaterials = {};
    
    let legendaries = { shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath' }

    let tokens = str.split(' ');
    // console.log(tokens);

    for(let i = 0; i < tokens.length; i +=2){
        let qty = Number(tokens[i]);
        let material = tokens[i + 1].toLowerCase();

        if (material in keyMaterials){
            keyMaterials[material] += qty;

            if (keyMaterials[material] >= 250){
                let legendaryWon = legendaries[material];
                console.log(`${legendaryWon} obtained!`);

                keyMaterials[material] -= 250;
                break;
            }

        } else {
            if (material in junkMaterials){
                junkMaterials[material] += qty;
            } else {
                junkMaterials[material] = qty;
            }
        }
    }

    let keyMatirialsEntries = Object.entries(keyMaterials)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    for(let [material, qty] of keyMatirialsEntries){
        console.log(`${material}: ${qty}`);
    }

    let junkMaterialsEntries = Object.entries(junkMaterials).sort((a, b) => a[0].localeCompare(b[0]));

    for(let [material, qty] of junkMaterialsEntries){
        console.log(`${material}: ${qty}`);
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');