﻿var options = new ExportOptionsPNG24();options.transparency = true;options.artBoardClipping = true;$.writeln("Starting exports");try {    var baseDir = File($.fileName).parent.path;    var scratchFolder = Folder(baseDir + "/_scratch")        var files = scratchFolder.getFiles("*.ai")    $.writeln("Found " + files.length + " files");        for(var i = 0; i < files.length; i++) {        var file = files[i];        $.writeln("Working on " + file.path + "/" + file.name);        var currentTopic = file.name.replace(".ai","");        $.writeln("Topic is: " + currentTopic);        var doc = open(file, DocumentColorSpace.RGB);        $.writeln("File opened, found " + doc.artboards.length + " artboards");        for(var j = 0; j < doc.artboards.length; j++) {            var a = doc.artboards[j];            doc.artboards.setActiveArtboardIndex(j);            var target = baseDir + "/" + currentTopic + "/assets/ai-" + a.name + '.png';            $.writeln((j + 1) + " of " + doc.artboards.length + ": " + a.name + ", saving to " + target);            var destination = new File(target);            doc.exportFile(destination, ExportType.PNG24 , options);        }        doc.close(SaveOptions.DONOTSAVECHANGES)    }    $.writeln("Complete")} catch(err) {    $.writeln("ERROR")    $.writeln(err);}