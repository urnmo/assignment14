function getScramble() {
//     // let request = new XMLHttpRequest();
//     // request.open("GET", 'https://harold-ejcpxaenph.now.sh/scrambled');
//     // request.addEventListener('load', function () {
//     //     let response = JSON.parse(request.responseText);
//     //     let word = response.scrambled;
//     //     console.log(word);



//     })

//define the parent
window.addEventListener('load', function(){
    let parent = document.querySelector('#version');
    let template = document.querySelector('#scramble-template').innerHTML;
    let scrambles = [];

    scrambles.push({
        title: 'UnsCRAMble IT',
        letter: [f, a, r, t,],
        correct: "you got it bucko",
        incorrect: "Wrong, sporto",
        });

for (let i = 0; i < scrambles.length; i++){
    let section = document.createElement('section');
   section.innerHTML = Mustache.render(template, scrambles[i]);
   parent.appendChild(section);
    }   
     request.send();
     console.log(scrambles);
})
}



window.addEventListener('load', function () {
    getScramble();
})

