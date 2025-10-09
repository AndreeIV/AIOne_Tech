
// import './../styles/app.scss'
import javascriptLogo from './../javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './../scripts/counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

const phone = "51938985009";



function isMobile() {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
}


let botones_wsp = document.querySelectorAll(".btn-countdown");
botones_wsp.forEach(boton => {
    boton.addEventListener("click", (e) => {

        const condicional = encodeURIComponent(boton.dataset.text)
        let texto = "";

        switch (condicional) {
            case "laptoppcs":
                texto = "Hola, Buenas tardes, quiero información sobre el servicio de Laptops / PC 👋"
                break;

            case "impresoras":
                texto = "Hola, Buenas tardes, quiero información sobre el servicio de impresoras 👋"
                break;

            case "programas1":
                texto = "Hola, Buenas tardes, quiero información sobre los programas basicos 👋"
                break;

            case "programas2":
            texto = "Hola, Buenas tardes, quiero información sobre los programas de ingeniería 👋"
            break;

            case "programas3":
            texto = "Hola, Buenas tardes, quiero información sobre los programas de diseño 👋"
            break;

            case "programas4":
            texto = "Hola, Buenas tardes, quiero información sobre los juegos 👋"
            break;


            default:
            texto = "Hola Buenas tardes, quisiera más información👋"
                break;
        }
        const webUrl = `https://wa.me/${phone}?text=${texto}`;
        const appUrl = `whatsapp://send?phone=${phone}&text=${texto}`;

        if (isMobile()) {
            // intenta abrir app nativa; si no funciona, se puede abrir web como fallback
            window.location.href = appUrl;
            // Nota: algunos navegadores bloquean esquemas; generalmente funciona en móviles.
            // Si prefieres, puedes usar setTimeout para abrir fallback tras unos ms.
            setTimeout(() => window.open(webUrl, "_blank", "noopener,noreferrer"), 700);
        } else {
            window.open(webUrl, "_blank", "noopener,noreferrer");
        }

    })
});
