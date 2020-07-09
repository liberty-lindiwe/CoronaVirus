const app_id = 'e77af6ff';
const api_key = '956da3b88ec380e7eb39b395d150fcf7';



const searchInput = document.getElementById('searchTerm');
const searchButton = document.getElementById('searchButton');
const itemList = document.getElementById('foodResults');
const text = document.getElementById("Text");

parsedRecipes:any = [];
recipesList:any = [];

searchButton.addEventListener('click',searchForRecipes);

function searchForRecipes()
{  
    //Remove existing search result if it exists
    while(itemList.hasChildNodes()){
        itemList.removeChild(itemList.lastChild);
    }

    //if no input is provided, a warning text shall be displayed
    function validate(){
        let x = searchInput.value;

        if(x =="" || x ==null)
        {
            while(itemList.hasChildNodes()){
                itemList.removeChild(itemList.lastChild);
            }

            let item = document.createElement('li');
            item.innerHTML = 'Wrong Input.Enter a valid text!<i class="far fa-angry"></i>';
            searchInput.value = "";
            item.setAttribute("id","mystyle");


            itemList.append(item);


            return false;
        }
    }

    validate();

    //Connect to the API using XMLHttpRequest
    var request = new XMLHttpRequest();
    
    request.open('GET', `https://api.edamam.com/search?q=${searchInput.value}&app_id=${app_id}&app_key=${api_key}&from=0&to=3&calories=591-722&health=alcohol-free`);

    request.onreadystatechange = function(){ //Use anonymous function to observe request states

        if(request.readyState == 4 && request.status == 200){ //Check if request state is on complete(4) and request status is successful (200)
            
            //Get request response and assign it to an array
            let response = request.response;
            parsedRecipes = JSON.parse(response);
            recipesList = parsedRecipes.hits;

            if(searchInput.value !== "")
            {
                //Loop through the array that contains recipes and push them to the list

              recipesList.forEach(element => {  
                
                  let single = element.recipe;
            
                  let item = document.createElement('li');                
                  let link  = document.createElement('a');                
                  link.textContent = single.label; 
                  link.href = single.url;
                  item.appendChild(link);  
                  itemList.append(item)

                  //Clear Input value
                  searchInput.value = "";
             }); 
            
            //Check if search was found
            if(recipesList.length === 0 ){
                let item = document.createElement('li');
                item.innerHTML = 'Search result not found.Try again <i class="fas fa-sad-tear"></i>';
                searchInput.value = "";
                item.setAttribute("id","mystyle");
                itemList.append(item);
            }

            }
        }
    } 
    request.send();
}