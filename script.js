var mes = []
var primeiraSemana = []
var segundaSemana = []

var semana1 = [1,2,3,4,5]
var semana2 = [6,7,8,9,10]

var semana3 = [11,12,13,14,15]
var semana4 = [16,17,18,19,20]

primeiraSemana = [semana1, semana2]
segundaSemana = [semana3, semana4]
mes = [primeiraSemana, segundaSemana]


for(i = 0; i < mes.length; i++) {
    for(x = 0; x < mes[i].length; x++) {
        for(y = 0; y < mes[i][x].length; y++){
            console.log(mes)
        }
    }
}