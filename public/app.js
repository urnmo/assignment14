function getScramble() {
    let request = new XMLHttpRequest();
    request.open("GET", 'https://harold-ejcpxaenph.now.sh/scrambled');
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);
        let word = response.scrambled;
        console.log(word);
            
let parent = document.querySelector('#version');
        let template = document.querySelector('#scramble-template').innerHTML;
        let scrambles = [];
         scrambles.letter = word.split('');
        
        scrambles.push({
        title: 'UnsCRAMble IT',
        letter: [],
        correct: "you got it bucko",
        incorrect: "Wrong, sporto",
        });


    let section = document.createElement('section');
   section.innerHTML = Mustache.render(template, scrambles);
   parent.appendChild(section);
    })

     request.send();

}



window.addEventListener('load', function () {
    getScramble();
})

