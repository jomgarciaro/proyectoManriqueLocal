let videos = []; // Se declara la variable videos como un array vacío

for (let i = 0; i < 364; i++) { // Se le agrega cada una de las direcciones de los videos a el array videos
    videos.push("data/video/video (" + i + ").mp4")
}
    
let mascaras = [ // lista con todos los paths que representan los barrios de Manrique, cada uno tiene su nombre al final
    "M0.133,0.001 l0.053,0.016 L0.237,0.021 l0.11,0.007 l0.201,0.29 l0.025,0.013 l0.039,0.056 l0.039,0.056 l0.069,-0.036 L1,0.994 l-0.1,0.007 l-0.106,-0.026 l-0.055,-0.023 l-0.049,-0.03 l-0.237,0.007 l-0.123,-0.007 l-0.084,-0.069 l-0.067,-0.085 l-0.082,-0.092 l-0.051,-0.039 L0.001,0.445 l0.029,-0.142 l0.104,-0.227 L0.133,0.001", //María Cano
    "M0.001,0.388 l0.077,-0.136 l0.025,-0.063 V0.138 l-0.013,-0.053 l0.013,-0.009 l0.052,0.027 l0.184,-0.009 l0.025,-0.074 l0.036,-0.021 l0.057,0.045 l0.048,0.027 l0.075,-0.017 h0.027 l0.034,0.191 l0.048,0.14 l0.091,0.157 l0.059,0.063 l0.091,0.074 l0.048,0.057 l0.021,0.07 l0.002,0.106 l-0.055,0.057 l-0.064,0.03 l-0.114,-0.009 l-0.064,-0.009 l-0.057,-0.057 l-0.034,-0.032 l-0.055,0.027 l-0.066,0.015 L0.318,0.746 L0.001,0.388", //Bello Oriente
    "M1,0.349 l-0.15,0.24 l0.008,0.149 l0.053,0.166 l-0.049,-0.011 l-0.26,-0.24 l-0.224,0.194 l-0.155,0.011 l-0.155,0.143 L0.001,0.681 l0.106,-0.606 l0.004,-0.074 L0.204,0.052 l0.207,0.211 l0.106,0.074 L1,0.349", //San José 1
    "M0.715,0.005 L0.424,0.094 L0.218,0.099 l-0.206,0.054 l0.109,0.145 l0.036,0.04 l0.018,0.097 L0.182,0.505 l0.048,0.129 l0.006,0.073 l-0.006,0.073 L0.061,0.882 L0.042,0.914 l0.067,0.003 l0.358,0.035 l0.206,0.022 l0.327,0.03 h0.012 l-0.018,-0.097 l-0.121,-0.086 l-0.012,-0.083 l0.121,-0.051 l0.018,-0.108 l-0.164,-0.083 v-0.062 l0.085,-0.156 l-0.176,-0.113 l-0.018,-0.161 L0.715,0.005", //La Salle
    "M0.833,0.035 l-0.077,0.05 L0.602,0.124 h-0.204 L0.194,0.092 L0.007,0.005 l0.01,0.139 l0.104,0.102 l-0.05,0.147 V0.448 l0.094,0.077 l-0.017,0.102 L0.08,0.672 l0.01,0.082 l0.06,0.077 l0.01,0.095 l0.371,0.062 l0.14,0.017 l0.03,-0.052 l0.033,-0.137 l0.043,-0.102 l0.057,-0.137 l-0.01,-0.085 l0.09,-0.087 v-0.142 l0.06,-0.1 l0.03,-0.107 l-0.07,-0.05 l-0.04,0.02 L0.833,0.035", //Las Granjas
    "M0.285,0.971 c0.008,0,0.05,0.002,0.05,0.002 l0.04,0.013 l0.021,0.017 l0.079,0.002 l0.045,-0.031 h0.079 l0.135,-0.107 l0.018,-0.222 l0.082,-0.157 l0.045,-0.082 l-0.003,-0.09 l0.011,-0.063 L0.926,0.189 L1,0.155 l-0.005,-0.122 l-0.029,-0.029 l-0.021,0.023 L0.937,0.084 l-0.087,0.002 l-0.04,0.01 l0.005,0.042 l-0.034,0.034 l-0.063,0.042 l-0.061,0.027 l-0.026,0.023 l-0.071,0.013 l-0.04,-0.013 l-0.011,-0.008 h-0.04 l-0.021,0.021 v0.071 l-0.021,0.023 l-0.084,0.021 L0.253,0.419 l-0.063,-0.004 l-0.05,-0.059 L0.106,0.298 l-0.047,-0.021 l-0.013,0.013 l0.024,0.029 l-0.016,0.061 l-0.018,0.019 l-0.013,0.057 l-0.011,0.055 l-0.008,0.013 l0.024,0.122 L0.063,0.734 l0.066,0.096 l0.05,0.042 l0.045,0.031 l0.029,0.023 L0.285,0.971", //La Cruz
    "M0.23,0.052 l-0.025,0.149 l-0.084,0.152 l-0.004,0.23 l-0.1,0.115 l-0.008,0.141 l0.255,0.011 l0.092,0.048 l0.063,0.004 l0.142,0.063 l0.134,-0.007 l0.109,0.045 l0.1,-0.004 l0.029,-0.048 l0.008,-0.097 l0.067,-0.033 l-0.025,-0.048 l-0.046,-0.037 v-0.104 l-0.054,-0.086 L0.795,0.535 l0.004,-0.29 l-0.025,-0.015 l-0.151,-0.227 l-0.063,0.063 l-0.075,0.037 L0.264,0.086 L0.23,0.052", //Santa Inés
    "M0.006,0.827 c0.016,-0.005,0.987,0.182,0.987,0.182 V0.955 l-0.045,-0.036 l-0.01,-0.118 l0.038,-0.118 l0.029,-0.305 l-0.026,-0.159 l-0.013,-0.209 l-0.083,0.045 l-0.01,0.118 l-0.019,0.05 L0.78,0.227 l-0.08,-0.055 l-0.105,0.009 l-0.112,-0.077 l-0.058,-0.009 L0.364,0.045 l-0.192,-0.009 L0.096,0.386 L0.083,0.45 l-0.013,0.105 l-0.01,0.109 L0.006,0.827", //Campo Valdéz 2
    "M0.843,0.006 l-0.235,0.134 L0.466,0.143 L0.363,0.184 L0.23,0.184 L0.123,0.146 H0.01 l0.029,0.128 l0.172,0.178 l0.034,0.009 v0.227 l0.098,0.003 l0.064,0.061 l0.005,0.093 l0.054,0.017 l0.015,0.047 l0.172,0.017 l0.221,0.079 l0.015,-0.085 l0.069,-0.143 l0.054,-0.149 l-0.029,-0.201 l-0.049,-0.09 l-0.034,-0.09 L0.833,0.172 L0.843,0.006", //El Raizal
    "M0.74,0.137 L0.298,0.03 L0.125,0.009 l0.01,0.193 l0.087,0.137 l-0.029,0.142 l-0.058,0.146 l-0.125,0.133 l0.029,0.116 l0.125,0.021 L0.183,0.944 l0.587,0.064 l0.192,-0.043 l0.048,-0.142 l-0.01,-0.124 l-0.202,-0.09 l0.019,-0.142 L0.865,0.352 L0.76,0.219 L0.74,0.137", //El Pomar
    "M0.366,0.005 c-0.007,0.06,0,0.081,0,0.081 l0.047,0.058 l0.007,0.058 l0.04,0.089 l0.036,0.086 l0.018,0.071 l0.047,0.047 l0.022,0.05 l0.098,0.052 l0.123,0.034 l0.141,0.016 l0.062,-0.024 l-0.022,0.052 l0.011,0.191 l0.004,0.113 l-0.464,-0.003 L0.471,1 l-0.243,-0.086 l-0.112,0.039 L0.036,0.955 L0.007,0.89 l0.011,-0.136 l0.018,-0.147 l0.174,-0.298 L0.192,0.199 l0.014,-0.084 l0.062,-0.081 L0.366,0.005", //Versalles 2
    "M0.014,0.009 l-0.011,0.258 l0.064,0.124 l0.021,0.133 l0.035,0.124 l0.011,0.3 l0.252,-0.009 l0.074,0.069 l0.085,-0.034 l0.34,-0.013 l0.11,-0.412 l0.004,-0.017 l0.004,-0.373 L0.553,0.15 L0.493,0.215 l-0.248,-0.137 L0.128,0.142 L0.067,0.129 L0.014,0.009", //Versalles 1
    "M0.877,0.029 l-0.344,0.015 l-0.087,0.022 l-0.08,-0.055 L0.105,0.007 L0.054,0.245 l-0.033,0.142 l-0.018,0.106 l0.217,0.106 l0.152,0.073 l0.018,0.168 l0.181,0.018 l0.018,0.099 l0.185,0.051 l0.094,-0.004 l0.014,-0.004 l0.047,-0.153 l-0.138,-0.106 l-0.069,-0.088 l0.018,-0.179 l0.156,-0.19 l0.065,0.022 l0.04,-0.058 L0.982,0.146 l-0.087,-0.055 l-0.033,-0.058 L0.877,0.029", //Manrique Oriental
    "M0.029,0.826 l0.515,0.061 l0.342,0.121 h0.022 l0.099,-0.182 l-0.11,-0.215 l0.004,-0.04 l-0.158,-0.016 l-0.136,-0.04 L0.581,0.405 L0.404,0.389 L0.382,0.202 L0.007,0.008 L0.011,0.081 l0.04,0.126 l-0.026,0.227 L0.11,0.526 L0.11,0.664 l-0.011,0.081 l-0.033,0.045 l-0.033,0.016 L0.029,0.826" //Manrique Central 2

];

document.addEventListener("DOMContentLoaded", function(event) { // Función que se llama justo antes de que el documento termine de cargar
    let numMascaras = 6 + Math.floor(Math.random()*15); //número aleatorio entre 6 y 20
    let div, video, svg, defs, clipPath, path;
    let div0 = document.getElementById("div0");

    for (let i=1; i < numMascaras +1; i++) { // Iteración sobre cada una de las divisiones contenedoras
        /* div = document.createElement("div");
        div.setAttribute("id", "divs" + i);
        div.setAttribute("class", "div1");
        video = document.createElement("video");
        video.setAttribute("id", "video" + i);
        video.setAttribute("style", "clip-path: url(#clipPath" + i + ");");
        video.setAttribute("loop", "loop");
        video.setAttribute("preload", "preload");
        video.setAttribute("autoplay", "autoplay");
        video.setAttribute("playsinline", "playsinline");
        video.setAttribute("muted", "muted");
        svg = document.createElement("svg");
        defs = document.createElement("defs");
        clipPath = document.createElement("clipPath");
        clipPath.setAttribute("id", "clipPaths" + i);
        clipPath.setAttribute("clipPathUnits", "objectBoundingBox");
        path = document.createElement("path");
        path.setAttribute("id", "paths" + i);

        div.appendChild(video);
        div.appendChild(svg);
        svg.appendChild(defs);
        defs.appendChild(clipPath);
        clipPath.appendChild(path);

        div.style.top = 80*Math.random() + "%"; // Posición vertical aleatoria
        div.style.left = 80*Math.random() + "%"; // Posición horizontal aleatoria
        video.setAttribute("src", videos[Math.floor(Math.random()*videos.length)]); //Asignación aleatoria del video
        path.setAttribute("d", mascaras[Math.floor(Math.random()*mascaras.length)]); //Asignación aleatoria de la máscara
    
        document.body.insertBefore(div, div0); */

        document.getElementById("div" + i).style.top = 80*Math.random() + "%"; // Posición vertical aleatoria
        document.getElementById("div" + i).style.left = 80*Math.random() + "%"; // Posición horizontal aleatoria
        document.getElementById("video" + i).setAttribute("src", videos[Math.floor(Math.random()*videos.length)]); //Asignación aleatoria del video
        document.getElementById("path" +i).setAttribute("d", mascaras[Math.floor(Math.random()*mascaras.length)]); //Asignación aleatoria de la máscara
    }
});