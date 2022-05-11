var fs = require ("fs");
fs.readFile("test.txt", function (error, data) {
    console.log (data);
    console.log (data.toString());
})
// erstellt neie Datei und schreibt Inhalt
// rename(), unlink()
fs.writeFile("newFile.txt", "Inhalt der \nDatei", (error) => {
    if (error);
    console.log("file was saved");
});
