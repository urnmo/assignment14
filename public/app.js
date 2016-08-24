function getScramble(){
    let request = new XMLHttpRequest();
    request.open("GET",  'https://harold-ejcpxaenph.now.sh/scrambled');
    request.addEventListener('load', function(){
        let response = JSON.parse(request.responseText);
        let word = response.scrambled;
        console.log(word);
    })
    request.send();
}
    function refresh(){

        
    }

       window.addEventListener('load', function(){
            getScramble();
        })