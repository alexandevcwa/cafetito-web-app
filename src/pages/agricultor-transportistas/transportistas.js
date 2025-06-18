import { postTransportista } from "./src/services/agricultor-transportistas-service.js";

function loadTransportistasPage(){
    $("#root").load("./src/pages/agricultor-transportistas/transportistas.html", function () {
        initListeners();
        // initUI();
        initValues();
    });
}

function initListeners(){

}

function initValues(){

}

