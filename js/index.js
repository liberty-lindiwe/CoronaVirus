import $ from 'jquery';   //jquery ajax 


let form = document.getElementById('user-form');


form.addEventListener('submit', event => {

    let searchedItem = form.elements['search'];
    
    let posting = {
        searchedItem: searchedItem.value
    };

    let promise = $.post(
        "http://5b32a4fd82407e001413f1d1.mockapi.io/api/v1/users",posting
    );

    promise.then(               // then methods allow you to do something with the response and chain together multiple things we want to do with the response 
        data => console.log('success: ',data),
        error => console.log('error: ',error)
    );

    event.preventDefault();
});