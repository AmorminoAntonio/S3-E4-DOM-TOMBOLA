// 1)--->  creazione dei div  che rappresentano i numeri della ..tombola --- (1 ---> 76);

// 2)--->  creazione del bottone che selezioni numero random (math.random) da array dei numeri ..tombola.

//3)--->  evento onclick su Btn + :marker la cella corrispondente (cambiando il colore della cella)

//4)--->  persistenza della marcatura del numero dopo ogni estrazione.

const tabellone = document.getElementById("tabellone");
const estraiBtn = document.getElementById("estraiBtn");

const numeriEstratti = [];

function creaTabellone() {
  for (let i = 1; i <= 76; i++) {
    const cella = document.createElement("div");
    cella.classList.add("cella");
    cella.textContent = i;
    cella.id = "cella" + i;
    tabellone.appendChild(cella);
  }
}

function estraiNumero() {
  if (numeriEstratti.length >= 76) {
    alert("Picciotti, i numeri sono finiti !!!");
    return;
  }

  let numeroEstratto;

  do {
    numeroEstratto = Math.floor(Math.random() * 76) + 1;
  } while (numeriEstratti.includes(numeroEstratto));

  numeriEstratti.push(numeroEstratto);

  const cellaEstratta = document.getElementById("cella" + numeroEstratto);
  cellaEstratta.classList.add("estratta");
}

estraiBtn.addEventListener("click", estraiNumero);

creaTabellone();
