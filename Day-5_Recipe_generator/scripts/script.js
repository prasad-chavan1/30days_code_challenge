const recipeGenerate = document.getElementById('recipeGenerate');
const recipe = document.getElementById('recipe');
const rec_name = document.getElementById('rec_name');
const igrediants = document.getElementById('igrediants');
const instructions = document.getElementById('instructions');
const time = document.getElementById('time');
const f_p = 'https://raw.githubusercontent.com/prasad-chavan1/sci_proj/main/recipe.json';
const request = new XMLHttpRequest;
request.open('GET', f_p);
request.send();

request.addEventListener('load', function () {

    let recipeCount = Math.floor(Math.random() * 500);
    const data = JSON.parse(this.responseText);

    recipeGenerate.addEventListener('click', function () {
        recipeCount = Math.floor(Math.random() * 500);
        let ingrediStr = "";
        //Reciepe heading
        let r_name = data[recipeCount].RecipeName;
        rec_name.innerHTML = r_name;
        //Time required to make recipe
        time.innerHTML = `${data[recipeCount].TimeRequired}mins`;

        //cuisine name
        document.querySelector('#cuisin').innerText = data[recipeCount].Cuisine;

        //Working on ingredients
        var in_str = '<h6 class="border-bottom border-dark pb-2 mb-0">Ingrediants</h6>';
        ingrediStr = data[recipeCount].Ingredients;
        const ingreArr = ingrediStr.split(',');
        const finalIngrArr = ingreArr.map(ingredient => ingredient.trim());
        for (i = 0; i < finalIngrArr.length; i++) {
            in_str += `<div class="media text-muted pt-3">
            <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
              <div class="d-flex justify-content-between align-items-center w-100">
                <strong class="text-gray-dark">${finalIngrArr[i]}</strong>
              </div>
            </div>
          </div>`;
        }
        igrediants.innerHTML = in_str;
        console.log(in_str);


        //set of instructions
        var inst_str = '<h6 class="border-bottom border-dark pb-2 mb-0">Instructions</h6>';
        const instStr = data[recipeCount].Instructions.split('.');
        const finalInstSet = instStr.map(instuction => instuction.trim());
        // console.log(finalInstSet);
        for (i = 0; i < finalInstSet.length; i++) {
            if (finalInstSet[i] != '') {

                inst_str += `<div class="media text-muted pt-3">
            <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
              <div class="d-flex justify-content-between align-items-center w-100">
                <strong class="text-gray-dark">${finalInstSet[i]}</strong>
              </div>
            </div>
          </div>`;
            }
        }
        instructions.innerHTML = inst_str;

        //image showing
        document.getElementById('image').src = data[recipeCount].imgUrl;
    });

});

document.getElementById('close').addEventListener('click', ()=>{
    document.getElementById('alertClose').style.display = 'none';
});

document.getElementById('linkedin').addEventListener('click', ()=>{
    window.location.href = `https://www.linkedin.com/in/prasad-chavan2003/`;
});

document.getElementById('git').addEventListener('click', ()=>{
    window.location.href = `https://github.com/prasad-chavan1`;
});