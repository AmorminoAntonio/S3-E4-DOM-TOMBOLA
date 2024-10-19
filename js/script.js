// 1)--->  creazione dei div  che rappresentano i numeri della ..tombola --- (1 ---> 76);

// 2)--->  creazione del bottone che selezioni numero random (math.random) da array dei numeri ..tombola.

//3)--->  evento onclick su Btn + :marker la cella corrispondente (cambiando il colore della cella)

//4)--->  persistenza della marcatura del numero dopo ogni estrazione.

const tabellone = document.getElementById("tabellone");
const estraiBtn = document.getElementById("estraiBtn");
const cartellaGiocatore = document.getElementById("cartellaGiocatore");

const numeriEstratti = [];
const numeriCartella = [];

function creaTabellone() {
  for (let i = 1; i <= 76; i++) {
    const cella = document.createElement("div");
    cella.classList.add("cella");
    cella.textContent = i;
    cella.id = "cella" + i;
    tabellone.appendChild(cella);
  }
}

function creaCartella() {
  for (let i = 1; i <= 24; i++) {
    const Cartella = document.createElement("div");
    Cartella.classList.add("Cartella");
    Cartella.textContent = i;
    Cartella.id = "Cartella" + i;
    cartellaGiocatore.appendChild(Cartella);
  }
}

function estraiNumero() {
  if (numeriEstratti.length >= 76) {
    alert("Picciotti, i numeri sono finiti !!!");
    return;
  }

  console.log(estraiNumero());

  let numeroEstratto;

  do {
    numeroEstratto = Math.floor(Math.random() * 76) + 1;
  } while (numeriEstratti.includes(numeroEstratto));

  numeriEstratti.push(numeroEstratto);

  const cellaEstratta = document.getElementById("cella" + numeroEstratto);
  cellaEstratta.classList.add("estratta");
}

// Funzione per evidenziare i numeri che sono presenti sia nell'array originale che in quello estratto casualmente
function evidenziaNumeri() {
  const numeriEstratti = estraiNumeriCasuali();
  const containerEstratti = document.getElementById("arrayEstratto");
  //containerEstratti.innerHTML = ''; // Pulisce il contenuto precedente

  // Mostra i numeri estratti
  numeriEstratti.forEach((num) => {
    const div = document.createElement("div");
    div.classList.add("numero");
    div.textContent = num;
    containerEstratti.appendChild(div);
  });

  // Evidenzia i numeri corrispondenti tra numeriOriginali e numeriEstratti
  const numeriDivs = document.querySelectorAll("#arrayOriginale .numero");
  numeriDivs.forEach((div) => {
    const num = parseInt(div.textContent);
    if (numeriEstratti.includes(num)) {
      div.classList.add("evidenziato"); // Aggiunge lo stile di evidenziazione
    } else {
      div.classList.remove("evidenziato"); // Rimuove lo stile di evidenziazione se non trovato
    }
  });
}

estraiBtn.addEventListener("click", estraiNumero);
// cartellaGiocatore.addEventListener("click",)

creaTabellone();
creaCartella();
