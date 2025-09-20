const songsList = document.querySelector('.songs-list');
const playBtn = document.querySelector(".play-btn");

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


function generateCards(){

let html ="";
for (let i = 0; i < 12; i++) {
    const song = songsArr[i % songsArr.length];
  
  
    html+= `
      <div class="card"> <button class="play-btn"><i class="ri-play-fill"></i></button> <img src="${song.poster}" alt=""> <p>${song.name}</p> <p>${song.artist}</p> </div>
    `;
  
  
  }

  songsList.innerHTML = html;
}

generateCards();


