/* =========================================================
   FUNCIONES PRINCIPALES
========================================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);


/* =========================================================
   NAVEGACIÓN ENTRE SECCIONES
========================================================= */

function ocultarTodo() {

    document.querySelectorAll(".seccion").forEach((seccion) => {
        seccion.style.display = "none";
    });

    document.querySelectorAll(".pantalla-especial").forEach((seccion) => {
        seccion.style.display = "none";
    });

    const final = document.getElementById("final");

    if (final) {
        final.classList.add("oculto");
    }
}


function mostrarSeccion(id) {

    ocultarTodo();

    const elemento = document.getElementById(id);

    if (!elemento) {
        console.error("No se encontró la sección:", id);
        return;
    }

    if (elemento.classList.contains("pantalla-especial")) {

        elemento.style.display = "flex";

    } else {

        elemento.style.display = "flex";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   INICIO
========================================================= */

const btnComenzar = $("#btnComenzar");

if (btnComenzar) {

    btnComenzar.addEventListener("click", () => {

        const inicio = $("#inicio");
        const contenido = $("#contenido");

        if (inicio) {
            inicio.style.display = "none";
        }

        if (contenido) {
            contenido.classList.remove("oculto");
        }

        mostrarSeccion("musicaSeccion");

        const musica = $("#musica");

        if (musica) {

            musica.volume = 0.5;

            musica.play().catch(() => {
                console.log("El navegador requiere interacción para reproducir música.");
            });
        }

    });
}


/* =========================================================
   BOTONES DATA-NEXT
========================================================= */

document.querySelectorAll("[data-next]").forEach((boton) => {

    boton.addEventListener("click", () => {

        const siguiente = boton.dataset.next;

        mostrarSeccion(siguiente);

    });

});


/* =========================================================
   MÚSICA
========================================================= */

const btnMusica = $("#btnMusica");
const musica = $("#musica");

let musicaSonando = false;

if (btnMusica && musica) {

    btnMusica.addEventListener("click", () => {

        if (musica.paused) {

            musica.play();

            musicaSonando = true;

            btnMusica.textContent = "⏸ Pausar música";

        } else {

            musica.pause();

            musicaSonando = false;

            btnMusica.textContent = "▶ Reproducir música";

        }

    });
}


/* =========================================================
   PREGUNTA
========================================================= */

const respuestaPregunta = $("#respuestaPregunta");

if ($("#btnSi")) {

    $("#btnSi").addEventListener("click", () => {

        respuestaPregunta.classList.remove("oculto");

        respuestaPregunta.textContent =
            "Entonces nunca olvides que eres alguien muy especial. ❤️";

    });
}

if ($("#btnClaro")) {

    $("#btnClaro").addEventListener("click", () => {

        respuestaPregunta.classList.remove("oculto");

        respuestaPregunta.textContent =
            "Sabía que lo sabías... pero quería recordártelo. 💕";

    });
}


/* =========================================================
   CONTADOR DESDE 07/10/2023
========================================================= */

const fechaInicio = new Date(
    2023,
    9,
    7,
    0,
    0,
    0
);

function actualizarContador() {

    const ahora = new Date();

    let diferencia =
        ahora.getTime() - fechaInicio.getTime();

    if (diferencia < 0) {
        diferencia = 0;
    }

    const segundosTotales =
        Math.floor(diferencia / 1000);

    const dias =
        Math.floor(
            segundosTotales / 86400
        );

    const horas =
        Math.floor(
            (segundosTotales % 86400) / 3600
        );

    const minutos =
        Math.floor(
            (segundosTotales % 3600) / 60
        );

    const segundos =
        segundosTotales % 60;

    if ($("#dias")) {
        $("#dias").textContent = dias;
    }

    if ($("#horas")) {
        $("#horas").textContent =
            String(horas).padStart(2, "0");
    }

    if ($("#minutos")) {
        $("#minutos").textContent =
            String(minutos).padStart(2, "0");
    }

    if ($("#segundos")) {
        $("#segundos").textContent =
            String(segundos).padStart(2, "0");
    }
}

actualizarContador();

setInterval(
    actualizarContador,
    1000
);


/* =========================================================
   MODAL DE RECUERDOS
========================================================= */

const modal = $("#modalRecuerdo");
const imagenModal = $("#imagenModal");
const tituloModal = $("#tituloModal");
const textoModal = $("#textoModal");

document.querySelectorAll(".timeline-card img").forEach((imagen, index) => {

    imagen.addEventListener("click", () => {

        if (!modal) return;

        imagenModal.src = imagen.src;

        const titulos = [
            "Un momento especial",
            "Una sonrisa",
            "Un instante",
            "Y muchos más..."
        ];

        const textos = [
            "Un recuerdo que merece quedarse guardado.",
            "Una pequeña sonrisa que hace especial el momento.",
            "Porque algunos instantes valen muchísimo.",
            "Y todavía quedan muchos recuerdos por crear."
        ];

        tituloModal.textContent =
            titulos[index] || "Un recuerdo";

        textoModal.textContent =
            textos[index] || "Un momento especial.";

        modal.classList.remove("oculto");

    });

});


if ($("#cerrarModal")) {

    $("#cerrarModal").addEventListener("click", () => {

        modal.classList.add("oculto");

    });
}


if (modal) {

    modal.addEventListener("click", (event) => {

        if (event.target === modal) {

            modal.classList.add("oculto");

        }

    });

}


/* =========================================================
   FLOR
========================================================= */

if ($("#btnFlor")) {

    $("#btnFlor").addEventListener("click", () => {

        const mensaje = $("#mensajeFlor");

        mensaje.classList.remove("oculto");

        mensaje.textContent =
            "Si pudiera regalarte una flor por cada pensamiento bonito, necesitaríamos un jardín entero. 🌷❤️";

    });
}


/* =========================================================
   JUEGO DEL NÚMERO
   CORRECTO = 2
========================================================= */

document.querySelectorAll(".numero").forEach((numero) => {

    numero.addEventListener("click", () => {

        const valor =
            numero.textContent.trim();

        const resultado =
            $("#resultadoNumero");

        const carta =
            $("#cartaSecreta");

        if (valor === "2") {

            resultado.textContent =
                "¡Encontraste el número correcto! ❤️";

            resultado.style.color =
                "#ff9dc2";

            carta.classList.remove("oculto");

        } else {

            resultado.textContent =
                "Ese no es... intenta con otro. ✨";

            resultado.style.color =
                "#cdbbc5";

        }

    });

});


/* =========================================================
   PUZZLE INICIAL
========================================================= */

const puzzleGrid = $("#puzzleGrid");

let puzzleValores = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9
];

let primeraPieza = null;
let segundaPieza = null;

function mezclarArray(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];
    }

    return array;
}

mezclarArray(puzzleValores);

function renderPuzzle() {

    puzzleGrid.innerHTML = "";

    puzzleValores.forEach((valor, indice) => {

        const pieza =
            document.createElement("button");

        pieza.className =
            "pieza-puzzle";

        pieza.textContent =
            valor;

        pieza.dataset.index =
            indice;

        pieza.addEventListener("click", () => {

            seleccionarPieza(indice);

        });

        puzzleGrid.appendChild(pieza);

    });
}

function seleccionarPieza(indice) {

    if (primeraPieza === null) {

        primeraPieza = indice;

        const piezas =
            puzzleGrid.children;

        piezas[indice].style.transform =
            "scale(1.08)";

        piezas[indice].style.boxShadow =
            "0 0 25px rgba(255,79,145,.6)";

        return;
    }

    segundaPieza = indice;

    [
        puzzleValores[primeraPieza],
        puzzleValores[segundaPieza]
    ] =
    [
        puzzleValores[segundaPieza],
        puzzleValores[primeraPieza]
    ];

    primeraPieza = null;
    segundaPieza = null;

    renderPuzzle();

    comprobarPuzzle();
}

function comprobarPuzzle() {

    const correcto =
        puzzleValores.every(
            (valor, indice) =>
                valor === indice + 1
        );

    if (correcto) {

        $("#mensajePuzzle").textContent =
            "¡Lo lograste! 🌷";

        $("#ramoFlores")
            .classList.remove("oculto");

    }

}

renderPuzzle();


/* =========================================================
   CÓDIGO 071023
========================================================= */

const digitosCodigo =
    document.querySelectorAll(".digito-codigo");

digitosCodigo.forEach((input, index) => {

    input.addEventListener("input", () => {

        input.value =
            input.value.replace(/\D/g, "");

        if (
            input.value &&
            index < digitosCodigo.length - 1
        ) {

            digitosCodigo[index + 1].focus();

        }

    });

    input.addEventListener("keydown", (event) => {

        if (
            event.key === "Backspace" &&
            !input.value &&
            index > 0
        ) {

            digitosCodigo[index - 1].focus();

        }

    });

});


if ($("#btnCodigo")) {

    $("#btnCodigo").addEventListener("click", () => {

        const codigo =
            Array.from(digitosCodigo)
                .map(input => input.value)
                .join("");

        if (codigo === "071023") {

            $("#mensajeCodigo").textContent =
                "Código correcto. Ahora puedes continuar. ❤️";

            $("#mensajeCodigo").style.color =
                "#ff9dc2";

        } else {

            $("#mensajeCodigo").textContent =
                "Código incorrecto. Inténtalo nuevamente.";

            $("#mensajeCodigo").style.color =
                "#ff7d9f";

        }

    });

}


/* =========================================================
   HUELLA
========================================================= */

const huella = $("#huella");

if (huella) {

    huella.addEventListener("click", () => {

        if (huella.classList.contains("escaneando")) {
            return;
        }

        huella.classList.add("escaneando");

        $("#mensajeHuella").textContent =
            "Escaneando huella...";

        setTimeout(() => {

            huella.classList.remove("escaneando");

            $("#mensajeHuella").textContent =
                "Huella reconocida ❤️";

            setTimeout(() => {

                mostrarSeccion("zonaSecreta");

            }, 700);

        }, 2200);

    });

}


/* =========================================================
   REGALO
========================================================= */

const regalo = $("#regalo");

if (regalo) {

    regalo.addEventListener("click", () => {

        if (regalo.classList.contains("abierto")) {
            return;
        }

        regalo.classList.add("abierto");

        $("#mensajeRegalo").textContent =
            "Mira lo que había dentro... ✨";

        setTimeout(() => {

            mostrarSeccion("universo");

        }, 1000);

    });

}


/* =========================================================
   UNIVERSO
========================================================= */

const universoEscena =
    $("#universo3D");

const universoOrbita =
    document.querySelector(".universo-orbita");

let rotacionX = 0;
let rotacionY = 0;

let arrastrandoUniverso = false;

let ultimoX = 0;
let ultimoY = 0;

if (universoEscena && universoOrbita) {

    universoEscena.addEventListener(
        "pointerdown",
        (event) => {

            arrastrandoUniverso = true;

            ultimoX = event.clientX;
            ultimoY = event.clientY;

            universoEscena.setPointerCapture(
                event.pointerId
            );

        }
    );


    universoEscena.addEventListener(
        "pointermove",
        (event) => {

            if (!arrastrandoUniverso) {
                return;
            }

            const diferenciaX =
                event.clientX - ultimoX;

            const diferenciaY =
                event.clientY - ultimoY;

            rotacionY += diferenciaX * 0.5;
            rotacionX -= diferenciaY * 0.5;

            universoOrbita.style.transform =
                `rotateX(${rotacionX}deg) rotateY(${rotacionY}deg)`;

            ultimoX = event.clientX;
            ultimoY = event.clientY;

        }
    );


    universoEscena.addEventListener(
        "pointerup",
        () => {

            arrastrandoUniverso = false;

        }
    );


    universoEscena.addEventListener(
        "pointercancel",
        () => {

            arrastrandoUniverso = false;

        }
    );

}


/* =========================================================
   CORAZÓN CENTRAL DEL UNIVERSO
   CORRECCIÓN PRINCIPAL
========================================================= */

const centroUniverso =
    document.getElementById("universo-centro");

if (centroUniverso) {

    function irAVideos(event) {

        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        console.log(
            "❤️ Corazón del universo presionado. Abriendo videos..."
        );

        mostrarSeccion("videos");

    }


    /* CLICK DE MOUSE */

    centroUniverso.addEventListener(
        "click",
        irAVideos
    );


    /* MOUSE DOWN */

    centroUniverso.addEventListener(
        "mousedown",
        irAVideos
    );


    /* TOUCH / PANTALLA TÁCTIL */

    centroUniverso.addEventListener(
        "pointerdown",
        irAVideos
    );

}


/* =========================================================
   VIDEO
========================================================= */

const videoPrincipal =
    $("#videoPrincipal");

const videoPlaceholder =
    $("#videoPlaceholder");

if (videoPrincipal) {

    videoPrincipal.addEventListener(
        "error",
        () => {

            videoPrincipal.classList.add("oculto");

            if (videoPlaceholder) {

                videoPlaceholder.classList.remove(
                    "oculto"
                );

            }

        }
    );

}


/* =========================================================
   VIDEO → ÁRBOL
========================================================= */

if ($("#btnAlArbol")) {

    $("#btnAlArbol").addEventListener(
        "click",
        () => {

            if (videoPrincipal) {
                videoPrincipal.pause();
            }

            mostrarSeccion("arbol");

        }
    );

}


/* =========================================================
   ÁRBOL → LIBRO
========================================================= */

if ($("#btnAlLibro")) {

    $("#btnAlLibro").addEventListener(
        "click",
        () => {

            mostrarSeccion("libro");

        }
    );

}


/* =========================================================
   LIBRO
========================================================= */

const paginas =
    document.querySelectorAll(".pagina-libro");

let paginaActual = 0;

function mostrarPaginaLibro(indice) {

    if (!paginas.length) {
        return;
    }

    if (indice < 0) {
        indice = 0;
    }

    if (indice >= paginas.length) {
        indice = paginas.length - 1;
    }

    paginaActual = indice;

    paginas.forEach((pagina, i) => {

        pagina.classList.toggle(
            "activa",
            i === paginaActual
        );

    });

    const numero =
        $("#numeroPagina");

    if (numero) {

        numero.textContent =
            `${paginaActual + 1} / ${paginas.length}`;

    }

    const anterior =
        $("#paginaAnterior");

    const siguiente =
        $("#paginaSiguiente");

    if (anterior) {

        anterior.disabled =
            paginaActual === 0;

    }

    if (siguiente) {

        siguiente.disabled =
            paginaActual === paginas.length - 1;

    }

}


if ($("#btnAbrirLibro")) {

    $("#btnAbrirLibro").addEventListener(
        "click",
        () => {

            $("#portadaLibro")
                .classList.add("oculto");

            $("#paginasLibro")
                .classList.remove("oculto");

            mostrarPaginaLibro(0);

        }
    );

}


if ($("#paginaAnterior")) {

    $("#paginaAnterior").addEventListener(
        "click",
        () => {

            mostrarPaginaLibro(
                paginaActual - 1
            );

        }
    );

}


if ($("#paginaSiguiente")) {

    $("#paginaSiguiente").addEventListener(
        "click",
        () => {

            mostrarPaginaLibro(
                paginaActual + 1
            );

        }
    );

}


/* =========================================================
   LIBRO → SOBRE
========================================================= */

if ($("#btnAlSobre")) {

    $("#btnAlSobre").addEventListener(
        "click",
        () => {

            mostrarSeccion("sobreSeccion");

        }
    );

}


/* =========================================================
   SOBRE
========================================================= */

if ($("#sobre")) {

    $("#sobre").addEventListener(
        "click",
        () => {

            $("#sobre")
                .classList.toggle("abierto");

            $("#mensajeSobre").textContent =
                "La carta se ha abierto. ❤️";

        }
    );

}


/* =========================================================
   SOBRE → ROMPECABEZAS FINAL
========================================================= */

if ($("#btnAlRompecabezasFinal")) {

    $("#btnAlRompecabezasFinal")
        .addEventListener(
            "click",
            () => {

                mostrarSeccion(
                    "rompecabezasFinal"
                );

            }
        );

}


/* =========================================================
   ROMPECABEZAS FINAL
========================================================= */

const botonesPuzzleFinal =
    document.querySelectorAll(
        "#puzzleFinalGrid button"
    );

let siguienteNumeroFinal = 1;

botonesPuzzleFinal.forEach((boton) => {

    boton.addEventListener(
        "click",
        () => {

            const numero =
                Number(boton.dataset.num);

            const mensaje =
                $("#mensajePuzzleFinal");

            if (
                numero === siguienteNumeroFinal
            ) {

                boton.disabled = true;

                boton.style.opacity = "0.5";

                boton.style.transform =
                    "scale(0.95)";

                siguienteNumeroFinal++;

                if (
                    siguienteNumeroFinal > 4
                ) {

                    mensaje.textContent =
                        "¡Lo lograste! ❤️ Preparando la sorpresa final...";

                    setTimeout(() => {

                        const final =
                            $("#final");

                        ocultarTodo();

                        final.classList.remove(
                            "oculto"
                        );

                        final.style.display =
                            "flex";

                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });

                    }, 1000);

                } else {

                    mensaje.textContent =
                        `Perfecto ❤️ Ahora busca el número ${siguienteNumeroFinal}.`;

                }

            } else {

                mensaje.textContent =
                    `Todavía no. Debes encontrar el ${siguienteNumeroFinal}. ✨`;

            }

        }
    );

});


/* =========================================================
   VOLVER AL INICIO
========================================================= */

if ($("#btnVolverInicio")) {

    $("#btnVolverInicio")
        .addEventListener(
            "click",
            () => {

                const final =
                    $("#final");

                const inicio =
                    $("#inicio");

                const contenido =
                    $("#contenido");

                final.classList.add("oculto");

                final.style.display =
                    "none";

                contenido.classList.remove(
                    "oculto"
                );

                inicio.style.display =
                    "flex";

                ocultarTodo();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

}


/* =========================================================
   CORAZONES FLOTANTES
========================================================= */

const corazonesFondo =
    $("#corazones-fondo");

function crearCorazon() {

    if (!corazonesFondo) {
        return;
    }

    const corazon =
        document.createElement("span");

    corazon.className =
        "corazon-flotante";

    corazon.textContent =
        Math.random() > 0.5
            ? "♥"
            : "♡";

    corazon.style.left =
        Math.random() * 100 + "%";

    corazon.style.fontSize =
        (12 + Math.random() * 24) + "px";

    corazon.style.animationDuration =
        (7 + Math.random() * 8) + "s";

    corazonesFondo.appendChild(
        corazon
    );

    setTimeout(() => {

        corazon.remove();

    }, 16000);

}

setInterval(
    crearCorazon,
    600
);


/* =========================================================
   INICIO DE LIBRO
========================================================= */

mostrarPaginaLibro(0);


/* =========================================================
   MENSAJE DE CONSOLA
========================================================= */

console.log(
    "❤️ Página romántica cargada correctamente."
);

console.log(
    "🌌 Universo → ❤️ corazón central → 🎬 Videos"
);