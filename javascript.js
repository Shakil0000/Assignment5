






function myFunction(id){
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
              console.log(data.meals[0])
              const objectMealProperty = data.meals[0];
               
              const mealDetailsDiv = document.getElementById('mealDetailsDiv');
              const containerDiv = document.createElement('div');
              const InfoDiv = `<img class="detailsPic" src="${objectMealProperty.strMealThumb}"> <h3>${objectMealProperty.strMeal}</h3>`;
              containerDiv.innerHTML = InfoDiv;
              mealDetailsDiv.appendChild(containerDiv);
              
              const ul = document.createElement('ul');
              
              function creatLi(){
                 const li1 = document.createElement('li');
                 li1.innerHTML = objectMealProperty.strIngredient1;
                 ul.appendChild(li1);

                 const li2 = document.createElement('li');
                 li2.innerHTML = objectMealProperty.strIngredient2;
                 ul.appendChild(li2);

                 const li3 = document.createElement('li');
                 li3.innerHTML = objectMealProperty.strIngredient3;
                 ul.appendChild(li3);

                 const li4 = document.createElement('li');
                 li4.innerHTML = objectMealProperty.strIngredient4;
                 ul.appendChild(li4);

                 const li5 = document.createElement('li');
                 li5.innerHTML = objectMealProperty.strIngredient5;
                 ul.appendChild(li5);
                
              }
              creatLi();
              mealDetailsDiv.appendChild(ul);

  })
}


 document.getElementById('button').addEventListener("click",function(){
   const input = document.getElementById('input').value;
      if (input == '') {
        alert("Please Inter a Value");
      }
      else{
        const apiurl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`; 

          
        fetch(apiurl)
        .then(response => response.json())
        .then(data => {
              
            const foodArray =data.meals;
            console.log(foodArray);
            
            const mainDiv = document.getElementById('mainDiv');
            for (let i = 0; i < foodArray.length; i++) {
              const foodName = foodArray[i].strMeal;
              const image = foodArray[i].strMealThumb;
              const element = foodArray[i];
              
              
              const divFoodImage = document.createElement('div');
              const divInfo = `<button onclick="myFunction('${element.idMeal}')" id="detailsBtn"><img class="pic" src="${image}"> <h3>${foodName}</h3></button>`;
              divFoodImage.innerHTML = divInfo;
              divFoodImage.className = "grid";
              mainDiv.appendChild(divFoodImage);
            }
        });
      }
      

 })

