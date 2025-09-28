const songsList = document.querySelector('.songs-list');

const player = document.querySelector(".player");

const slideR = document.querySelector('.slide-right');
const slideL = document.querySelector('.slide-left')
const artistslideR = document.querySelector('.artist-slide-right');
const artistslideL = document.querySelector('.artist-slide-left')
const artistList = document.querySelector(".artist-list")
const progressBar = document.querySelector('.progress-bar');
const playMainBtn = document.querySelector('.play-music-btn');
const playBtnIcon = playMainBtn.querySelector("i");
const songsArr = [{
    poster:"https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",
    name:"Blinding Lights",
    artist:"The Weeknd",
    musicUrl:"bl.mp3"
},{
    poster:"https://upload.wikimedia.org/wikipedia/en/7/78/Fitoor_Hindi_Film_Poster.jpg",
    name:"Yeh Fitoor Mera",
    artist:"Amit Trivedi,Arijit Singh",
    musicUrl:"yehfitoor.mp3"
},
{
    poster:"https://manganim.fr/cdn/shop/files/demon-slayer-poster-piliers_9ef462e5-3870-4b0f-959a-54daacee4092_2048x.jpg?v=1717584928",
    name:"Demon Slayer:Infinite Castle Entry Theme",
    artist:"Kibutsuji Muzan",
    musicUrl:"ds.mp3"
},{
    poster:"https://i.ytimg.com/vi/__SebSEKesQ/maxresdefault.jpg",
    name:"Dil ka jo haal he",
    artist:"Abhijeet Bhattacharya, Shreya Ghoshal",
    musicUrl:"dkjhh.mp3"

},{
    poster:"https://i.dailymail.co.uk/1s/2024/07/17/22/87467803-0-image-m-2_1721252298108.jpg",
    name:"Sao Paulo",
    artist:"The Weeknd",
    musicUrl:"sp.mp3"
}
,{
    poster:"https://i1.sndcdn.com/artworks-XbxZOWT3wDfia4Z5-5fiyBQ-t240x240.jpg",
    name:"Golden Hour",
    artist:"JVKE",
    musicUrl:""
},{
    poster:"https://i.pinimg.com/736x/12/58/93/1258931173e9861c652c27e53f41cf09.jpg",
    name:"Those eyes",
    artist:"New West",
    musicUrl:""
},{
    poster:"https://i1.sndcdn.com/artworks-000110993138-kfxe87-t1080x1080.jpg",
    name:"Lean On",
    artist:"Major Laser X DJ Snake",
    musicUrl:""
},{
    poster:"https://posterwa.com/cdn/shop/files/RAPPER13.jpg?v=1686078548",
    name:"Rap God",
    artist:"Eminem",
    musicUrl:""
},{
    poster:"https://preview.redd.it/q30kk4ohv2m41.jpg?width=640&crop=smart&auto=webp&s=00162899315f8755ab4be2df59ff5c89f4881f19",
    name:"Godzilla",
    artist:"Eminem X Juice Wrld",
    musicUrl:""

},{
    poster:"https://m.media-amazon.com/images/M/MV5BNmFlOWJkOTUtMzk5Ni00YjcxLTkyZTAtZjg5NmIzMTRkNjZkXkEyXkFqcGc@._V1_.jpg",
    name:"We dont talk anymore",
    artist:"Charlie Puth X Selena Gomez",
    musicUrl :""
},{
    poster:"https://m.media-amazon.com/images/M/MV5BNWUwZGYzMjgtNmY0OC00MTliLWIwMDMtMjAzYjBkNmJkYWEyXkEyXkFqcGc@._V1_.jpg",
    name:"Attention",
    artist:"Charlie Puth",
    musicUrl:""
}


]



const artistArr = [{
    poster:"https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca",
    name:"Pritam",
    
   
},{
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBy9yNSritHoVpM2NTY9-AmZTn15q_2IUoyw&s",
    name:"A.R Rahman",
    
},
{
    poster:"https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_m_1739172212.jpg",
    name:"Arijit Singh",
   
},{
    poster:"https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9",
    name:"Drake",
    

},{
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL7svg323DD6Fcv7YCvZ43chm4AF4aMjwv6Q&s",
    name:"Eminem",
   
}
,{
    poster:"https://www.shreyaghoshal.com/static/asset/images/shreya-image.png",
    name:"Shreya Ghosal",
   
},{
    poster:"https://artistbookingcompany.com/wp-content/uploads/2024/03/atif-aslam-680x680.jpg",
    name:"Atif Aslam",
    
},{
    poster:"https://i.abcnewsfe.com/a/e16f0222-a991-4a91-a8f2-574eba868991/billie-eilish-1-gty-bb-240424_1713987300511_hpMain_16x9.jpg?w=992",
    name:"Billie Elish",
   
},{
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKjAP928tutk2KSKLcDnnTV1mhbS-Vud7klA&shttps://posterwa.com/cdn/shop/files/RAPPER13.jpg?v=1686078548",
    name:"Ed Sheeran",
  
},{
    poster:"https://upload.wikimedia.org/wikipedia/commons/e/e7/%22AM%22_%28Arctic_Monkeys%29.jpg",
    name:"Arctic Monkeys"
}

]


function generateCards(){

let html ="";
for (let i = 0; i < 12; i++) {
    const song = songsArr[i % songsArr.length];
  
  
    html+= `
      <div data-song="${song.musicUrl}" class="card"> <button class="play-btn"><i class="icon ri-play-fill"></i></button> <img src="${song.poster}" alt=""> <p>${song.name}</p> <p>${song.artist}</p> </div>
    `;
  
  
  }

  songsList.innerHTML = html;
}

generateCards();

const playBtn = document.querySelectorAll(".play-btn");


//function to play music on button click
function playMusic(){
let currentSong = null;
let isPlaying = false;
let currentIcon = null;
playBtn.forEach(btn =>{
    btn.addEventListener("click", e=>{
        const crd = e.target.closest(".card");
        const song = crd.getAttribute("data-song");
        const icon = crd.querySelector(".icon")

        if(!song) return; // no file, ignore click

        if(currentSong === song && isPlaying){
            // pause if same song clicked again
            player.pause();
            isPlaying = false;
            icon.classList.remove("ri-pause-fill");
            icon.classList.add("ri-play-fill");
        }else{
            if (currentIcon) {
                currentIcon.classList.remove("ri-pause-fill");
                currentIcon.classList.add("ri-play-fill");
            }
            // play new song
            player.src = song;
            player.play();
            currentSong = song;
            isPlaying = true;
            icon.classList.remove("ri-play-fill");
            icon.classList.add("ri-pause-fill");

            currentIcon = icon;
        }
    })
});

}
playMusic();



//function to slide cards when slideR button is clicked
function slideCards(){
slideR.addEventListener("click",()=>{
    songsList.scrollBy({
        left:400,
        behavior:"smooth"
    })

    
})
slideL.addEventListener("click",()=>{
    
    songsList.scrollBy({
        left:-400,
        behavior:"smooth"
    })

    
})

songsList.addEventListener("scroll", () => {
    slideL.style.opacity = songsList.scrollLeft > 0 ? 1 : 0;
});



}
slideCards();
function slideCardsArtist(){
artistslideR.addEventListener("click",()=>{
    artistList.scrollBy({
        left:400,
        behavior:"smooth"
    })

    
})
artistslideL.addEventListener("click",()=>{
    
    artistList.scrollBy({
        left:-400,
        behavior:"smooth"
    })

    
})

artistList.addEventListener("scroll", () => {
    artistslideL.style.opacity = artistList.scrollLeft > 0 ? 1 : 0;
});



}
slideCardsArtist();

//function to generate artist cards
function generateArtistCards(){
    let html ="";
    for(let i=0;i<10;i++){
        const song = artistArr[i];

        html+=` <div class="card br">
                    <img src="${song.poster}" alt="">
                    <p>${song.name}</p>
                    <p>Artist</p></div>`
    }

    artistList.innerHTML = html;
}

generateArtistCards()


//play music for the main player
playMainBtn.addEventListener('click',()=>{
    if(player.paused){
        player.play();
    }else{
        player.pause();
    }
})

player.addEventListener("play",()=>{
    playBtnIcon.className ="ri-pause-fill"
})

player.addEventListener('pause',()=>{
    playBtnIcon.className="ri-play-fill"
})


//function to increase the progress bar 
function increaseProgressBar(){
    player.addEventListener("timeupdate",()=>{
         let playerValue = (player.currentTime/player.duration)*100;
        progressBar.style.setProperty("--x",playerValue+"%")
    })
}
increaseProgressBar();