//Gestion du toggle entre courbe principale et petites courbes
//TODO: BUG: si on clique 2 fois sur le meme icone ça toggle qd meme.
//D'où le code en commentaire pour verifier si la visibilité du graph n'ets pas deja visible avant le toggle.
//La fonction toggle prend d'ailleur en paramétre un flag true/false pour ne pas faire le toggle si condition vraie (ou fausse, a verifier)
    $('#typeAffichageCourbe label').click(function (e) {
        
        //var idAAfficher = this.id.split('-')[0];
        //console.log(idAAfficher);
        //console.log($("#NGraph").style);
        $("#unSeulGraph").toggle();
        $("#NGraph").toggle();
        
        //alert(idAAfficher);
        //e.preventDefault()
        //$(idAAfficher).toggleDisplay('show')
      });