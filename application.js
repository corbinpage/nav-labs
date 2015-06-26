// (function () {
//   // Show an error if using an older browser
//   if (!window.FileReader || !window.ArrayBuffer) {
//     $("#error_block").removeClass("hidden").addClass("show");
//     return;
//   }

//   var fileCounter;
//   var objectArray = [];
//   var duplicateCounter;

//   $("#file").on("change", function(evt) {
//     var files = evt.target.files;
//     var fileCounter = 0;
//     objectArray = [];
//     duplicateCounter = 0;
//     $("#results-table tbody").html(""); // remove current content
//     $("#results-row").removeClass("hidden");
    
//     for (var i = 0, f; f = files[i]; i++) {
//       //Skip non-zip files
//       if(f.name.slice(f.name.lastIndexOf("."))!==".zip") {
//         fileCounter++;
//         continue;
//       } 

//       var reader = new FileReader();
//       // Closure to capture the file information.
//       reader.onload = (function(theFile) {
//         return function(e) {
//           try {
//             var zip = new JSZip(e.target.result); 
//             var exportLog = zip.folder("META-INF").file("export.log");

//             if(exportLog) {
//               var exportText = exportLog.asText();
//               objectArray = parseExportLog(exportText,theFile.name,objectArray);           
//             }
//             fileCounter++;
//             if(fileCounter===files.length) {
//               renderUI(objectArray);
//             }   
//           } catch(e) {
//             fileCounter++;
//             var $fileContent = $("<div>", {
//               "class" : "alert alert-danger",
//               text : "Error reading " + theFile.name + " : " + e.message
//             });
//           }
//         }
//       })(f);

//       reader.readAsArrayBuffer(f);
//     }
//   });

// function parseExportLog(exportText, filename, objectArray) {
//   var lines = exportText.split('\n');
//   var seenSuccess = false;

//   for(var line = 0; line < lines.length; line++){
//     if(!seenSuccess) { 
//       seenSuccess = (lines[line].search("Success")===0);
//       continue;
//       // Only start parsing objects that have been 'Success'-fully exported
//     } else if(seenSuccess && lines[line].length<=1) {
//       break;
//       // End when the list of objects is done (at a blank line)
//     }

//     var exportLine = lines[line].split(' ');
//     var objName = lines[line].slice(lines[line].indexOf('"')).replace(/"/g,'');
//     var dupInfo = isDuplicateObject(exportLine, objectArray);
    
//     var newObject = {
//       type: exportLine[0],
//       id: exportLine[1],
//       uuid: exportLine[2],
//       name: objName,
//       filename: filename,
//       duplicate: dupInfo[0],
//       dupNum: dupInfo[1]
//     };
//     objectArray.push(newObject);

//   }
//   return objectArray;
// }

// function isDuplicateObject(exportLine, objectArray) {
//   for (var i = 0, l = objectArray.length; i < l; i++) {
//     if(exportLine[2]===objectArray[i].uuid){
//       duplicateCounter++;
//       objectArray[i].duplicate = true;
//       objectArray[i].dupNum = duplicateCounter;

//       return [true, duplicateCounter];
//     }
//   }
//   return [false, null];
// }

// function renderUI(objectArray) {
//   var $tableBody = $("#results-table tbody");
//   objectArray.forEach( function (object) {
//     $tableBody.append(
//                       '<tr '+(object.duplicate ? 'class="danger"' : '')+'>' +
//                       '<td>'+object.filename+'</td>' +
//                       '<td>'+object.name+'</td>' +
//                       '<td>'+object.type+'</td>' +
//                       '<td>'+object.duplicate+'</td>' +
//                       '</tr>');
//   });
//   $("#results-table").tablesorter(); 
// }

// })();