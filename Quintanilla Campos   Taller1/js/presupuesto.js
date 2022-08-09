function init() {


    var presupuesto = prompt('Ingrese el presupuesto anual', '');
    var derma, trau, pedi, i;
    var div = document.getElementById('distribucion');

    derma = presupuesto * 0.20;
    trauma = presupuesto * 0.3;
    pedia = presupuesto * 0.5;

    var html = "<ul>\n\t<li>\n";
    html += "\t\t<a href='#' class='move-right'>\n";
    html += "\t\t\tEl presupuesto asignado para ESTUDIANTE es: $ " + derma + "\n";
    html += "\t\t</a>\n";
    html += "\t</li>\n";

    html += "\t<li>\n";
    html += "\t\t<a href='#' class='move-right'>\n";
    html += "\t\t\tEl presupuesto asignado para CLIENTE ENTRE 24 Y 34 AÑOS es: $ " + trauma + "\n";
    html += "\t\t</a>\n";
    html += "\t</li>\n";

    html += "\t<li>\n";
    html += "\t\t<a href='#' class='move-right'>\n";
    html += "\tEl presupuesto asignado para Mujeres es: $ " + pedia + "\n";
    html += "\t\t</a>\n";
    html += "\t</li>\n";

    html += "</ul>\n";

    div.innerHTML = html;


    var links = document.getElementsByTagName('a');

    for (i = 0; i < links.length; i++) {
        links[i].onmouseover = function () {
            this.className = 'move-right-hover';
        };

        links[i].onmouseout = function () {
            this.className = 'move-right';
        };
    }
}

window.onload = init;