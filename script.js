// PROCESSING JS
let data = [
   {
      judul: "心海(Shinkai)",
      artis: "Eve",
      genre: "J-Pop",
      link: "https://www.youtube.com/watch?v=vRPCAAUBMms",
   },
   {
      judul: `セブンティーン (Seventeen)`,
      artis: "Yoasobi",
      genre: "J-Pop",
      link: `https://www.youtube.com/watch?v=0yoM7ETNPIY`,
   },
   {
      judul: `神山羊 Endroll`,
      artis: "Yoh Kamiyama",
      genre: "J-Pop",
      link: `https://www.youtube.com/watch?v=nyFuKqOQbFo`,
   },
   {
      judul: `Arjuna`,
      artis: "Dewa",
      genre: "Pop",
      link: `https://www.youtube.com/watch?v=EYACy7jELw4`,
   },
   {
      judul: `A Little Piece Of Heaven`,
      artis: "Avenged Sevenfold",
      genre: "Rock",
      link: `https://www.youtube.com/watch?v=KVjBCT2Lc94`,
   },
   {
      judul: `Queen`,
      artis: "Bohemian Rhapsody",
      genre: "Rock",
      link: `https://www.youtube.com/watch?v=fJ9rUzIMcZQ`,
   },
   {
      judul: `Sweet Child O' mine`,
      artis: "Guns N `Roses",
      genre: "Rock",
      link: `https://www.youtube.com/watch?v=1w7OgIMMRc4`,
   },
   {
      judul: `When I Was Your Man`,
      artis: "Bruno Mars",
      genre: "R&B",
      link: `https://www.youtube.com/watch?v=ekzHIouo8Q4`,
   },
   {
      judul: `I Will Survive`,
      artis: "Gloria Gaynor",
      genre: "R&B",
      link: `https://www.youtube.com/watch?v=6dYWe1c3OyU`,
   },
   {
      judul: `Don't Stop Me Now`,
      artis: "Queen",
      genre: "Rock",
      link: `https://www.youtube.com/watch?v=HgzGwKwLmgM`,
   },
   {
      judul: `World's Smallest Violin`,
      artis: "AJR",
      genre: "Pop",
      link: `https://www.youtube.com/watch?v=PEnJbjBuxnw`,
   },
   {
      judul: `What It Is`,
      artis: "Doechii",
      genre: "Rap",
      link: `https://www.youtube.com/watch?v=9xF9iQiS2Vs`,
   },
   {
      judul: `Pangeran Cinta`,
      artis: "Dewa",
      genre: "Pop",
      link: `https://www.youtube.com/watch?v=VOk3-JFiC4Y`,
   },
   {
      judul: `Without Me`,
      artis: "Eminem",
      genre: "Rap",
      link: `https://www.youtube.com/watch?v=YVkUvmDQ3HY`,
   },
   {
      judul: `The Real Slim Shady`,
      artis: "Eminem",
      genre: "Rap",
      link: `https://www.youtube.com/watch?v=eJO5HU_7_1w`,
   },
];

function sortingBy() {
   let sort = document.getElementById("sort").value;
   data.sort((a, b) => {
      let byA = a[sort].toUpperCase();
      let byB = b[sort].toUpperCase();
      if (byA > byB) return 1;
      if (byB > byA) return -1;
   });
   cetak();
}

function action(song, act, i) {
   if (act === "delete") delete song[i];
}

//DOM
function addButtonFunction() {
   let judulLagu = document.getElementById("judul_lagu");
   let genre = document.getElementById("genre");
   let artis = document.getElementById("artis");
   let link = document.getElementById("link");

   if (judulLagu.value.length <= 0) {
      alert("Judul lagu tidak boleh kosong");
      judulLagu.focus();
      return false;
   }
   if (artis.value.length <= 0) {
      alert("Artis tidak boleh kosong");
      artis.focus();
      return false;
   }
   if (link.value.length <= 0) {
      alert("Link lagu tidak boleh kosong");
      link.focus();
      return false;
   }
   if (genre.value == "Select Genre") {
      alert("Genre lagu tidak boleh kosong");
      genre.focus();
      return false;
   }

   data.push({
      judul: judulLagu.value,
      artis: artis.value,
      genre: genre.value,
      link: link.value,
   });
   reset();


   cetak();

}

let addButtonId = document.getElementById("addButton");

addButtonId.addEventListener("click", addButtonFunction);

//DOM TABLE
let table = document.querySelector(".cetakTable");

function cetak() {
   document.getElementById("kontenmusik").innerHTML = "";
   for (let x = 0; x < data.length; x++) {
      //create TR
      let no = `<td>${x + 1}</td>`;
      let judul = `<td>${data[x].judul}</td>`;
      let artis = `<td>${data[x].artis}</td>`;
      let genre = `<td>${data[x].genre}</td>`;
      let btnEdit = `<td><button class="buttonKecil" type="button" onclick="editBaris(${x})">Edit</button></td>`;
      let btnDelete = `<td><button class="buttonKecil" onclick="deleteBaris(${x})">Delete</button></td>`;
      let btnPlay = `<td><button class="buttonKecil"><a href="${data[x].link}" target="_blank">Play</a></button></td>`;
      document.getElementById("kontenmusik").innerHTML += `<tr>${no}${judul}${artis}${genre}${btnEdit}${btnDelete}${btnPlay}</tr>`;
   }
}
cetak();

function deleteBaris(index) {
   data.splice(index, 1);
   cetak();
}

function editBaris(index) {
   document.getElementById("judul_lagu").value = data[index].judul;
   document.getElementById("genre").value = data[index].genre;
   document.getElementById("artis").value = data[index].artis;
   document.getElementById("link").value = data[index].link;
   document.getElementById("indexlagu").value = index;

   document.getElementById("addButton").style.display = "none";
   document.getElementById("updateButton").style.display = null;
}

let updateeButton = document.getElementById("updateButton");

updateeButton.addEventListener("click", updateButtonFunction);

function updateButtonFunction() {
   let judulLagu = document.getElementById("judul_lagu");
   let genre = document.getElementById("genre");
   let artis = document.getElementById("artis");
   let link = document.getElementById("link");
   let index = document.getElementById("indexlagu");

   if (judulLagu.value.length <= 0) {
      alert("Judul lagu tidak boleh kosong");
      judulLagu.focus();
      return false;
   }
   if (artis.value.length <= 0) {
      alert("Artis tidak boleh kosong");
      artis.focus();
      return false;
   }
   if (link.value.length <= 0) {
      alert("Link lagu tidak boleh kosong");
      link.focus();
      return false;
   }
   if (genre.value == "Select Genre") {
      alert("Genre lagu tidak boleh kosong");
      genre.focus();
      return false;
   }

   data[index.value] = {
      judul: judulLagu.value,
      artis: artis.value,
      genre: genre.value,
      link: link.value,
   };

   document.getElementById("addButton").style.display = null;
   document.getElementById("updateButton").style.display = "none";

   reset();

   cetak();
}

function search() {
   let input = document.getElementById("cari").value;
   let temp = [];
   let obj = data.find(function (post) {
      if (post.artis.toLowerCase() == input.toLowerCase() || post.judul.toLowerCase() == input.toLowerCase()) return true;
   });

   temp.push(obj);
   if (obj !== undefined) {
      document.getElementById("kontenmusik").innerHTML = "";
      for (let x = 0; x < temp.length; x++) {
         //create TR
         let no = `<td>${x + 1}</td>`;
         let judul = `<td>${temp[x].judul}</td>`;
         let artis = `<td>${temp[x].artis}</td>`;
         let genre = `<td>${temp[x].genre}</td>`;
         let btnEdit = `<td><button class="buttonKecil" type="button" onclick="editBaris(${x})">Edit</button></td>`;
         let btnDelete = `<td><button class="buttonKecil" onclick="deleteBaris(${x})">Delete</button></td>`;
         let btnPlay = `<td><button class="buttonKecil"><a href="${temp[x].link}" target="_blank" style="text-decoration:none">Play</a></button></td>`;
         document.getElementById("kontenmusik").innerHTML += `<tr>${no}${judul}${artis}${genre}${btnEdit}${btnDelete}${btnPlay}</tr>`;
      }
   } else {
      cetak();
   }
}

function reset() {
   document.getElementById("judul_lagu").value = "";
   document.getElementById("genre").value = "Select Genre";
   document.getElementById("artis").value = "";
   document.getElementById("link").value = "";
   document.getElementById("indexlagu").value = "";
}
