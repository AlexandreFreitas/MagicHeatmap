


$(document).ready(function(){


    let key;
    const mysocket = new AppSocket();

    mysocket.on("open", function(){
        console.log("deu certo");
        mysocket.send("tools", "olá")
    });

    mysocket.on("connect", (res) => {
        console.log('oq o cliente recebe:', res.connection_key);
        key = res.connection_key;
    });
    mysocket.on('metadata', (res) => {
        console.log(res.result);
    });





    $(".container").css("display", "none");

    let cont = 0;
    $("#btnAddButton").click(function(){
        let testName = "Teste_"+(cont++);
        let tr = $("<tr/>");
        tr.get(0).__testName__ = testName;
        $("#divTests")
            .append(tr
                .append($("<td/>").text(testName))
                .append($("<td/>")
                    .append($("<button/>").text("Play"))));



    });

    $("#divTests").on("click", "tr > td > button", function(){
        let testName = $(this).parent().parent().get(0).__testName__;
        mysocket.send("createTest", testName);
    });
});

