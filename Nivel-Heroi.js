//variaveis
let nomePersonagem = "Lord_dos_Bits";
let xpPersonagem = 665652  
let nivelPersonagem

if (xpPersonagem <= 1000) {
    nivelPersonagem = "Ferro";
    
}   else {if (xpPersonagem >= 1001 && xpPersonagem <=2000) {
        nivelPersonagem = "Bronze";
    
        } else {if (xpPersonagem >=2001 && xpPersonagem <=5000) {
            nivelPersonagem = "Prata";
    
            } else { if (xpPersonagem >= 5001 && xpPersonagem <= 7000) {
                nivelPersonagem = "Ouro"
        
                } else { if (xpPersonagem >= 7001 && xpPersonagem <= 8000) {
                    nivelPersonagem = "Platina"
                    } else { if(xpPersonagem >= 8001 && xpPersonagem <=9000) {
                        nivelPersonagem = "Ascendente"
                        } else { if(xpPersonagem >= 9001 && xpPersonagem <= 10000)
                            nivelPersonagem = "Imortal"
                                else { if(xpPersonagem > 10001) {
                                    nivelPersonagem = "Radiante"
                            }                    
                        }
                    } 
                }
            }
        }
    }
}
console.log ("O herói de nome " + nomePersonagem + " está do nível " + nivelPersonagem);
