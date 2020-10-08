let family= {
    firstSon:"john <br>", 
    secondSon:"jack <br>",
    thirdSon:"david <br>",
        john : {
            firstSon:"cris <br>",
            secondSon:"alex <br>",
               cris:{
            firstSon:"ali <br>",
            thirdSon:"karim <br>",
                    },
                alex : {
      firstSon: "john <br>",
      secondSon : "alex <br>",
      thirdSon : "garret <br>",
      forthSon : "wood <br>",
      fifthSon : "hales <br>",

                    john:{
        firstSon: "ali <br>",
        secondSon: "jack <br>",
                    ali:{
      firstSon : "suleiman <br>",
      secondSon : "usman <br>",
      thirdSon : "salman <br>",
      forthSon : "javed <br>",
          suleiman:{
            firstSon : "kareem <br>",
            secondSon : "raheem <br>",
               raheem:{
                firstSon: "nadeem <br>",
                secondSon: "kaleem <br>",
                    kaleem:{
                        firstSon : "amir <br>",
                        secondSon: "liaqat <br>",
                    }
               }
          } 

        }
      },
        wood:{
      firstSon : "chris <br>",
      secondSon : "roy <br>",
      thirdSon: "max <br>",
      forthSon : "nova <br>",
      fifthSon: "root <br>",
      sixtSon: "mark <br>",
             max:{
                firstSon : "usman <br>",
                secondSon : "salman <br>",
                thirdSon : "javed <br>",
                forthSon : "mark <br>",
                fifthSon : "alex <br>",
             },
             mark:{
                firstSon : "morgan <br>",
                secondSon: "watson <br>",
             }
        }
    } 
           }  ,
             
         jack:{
            firstSon : "Kevin <br>",
            secondSon : "DerekWood <br>",
         },
         david:{
            firstSon : "kegan <br>",
            kegan:{
                firstSon : "alex <br>",
                alex:{
                    firstSon : "jackma <br>",
                    secondSon : "bill <br>", 
                         jackma:{
                            firstSon : "keven <br>",
                            secondSon: "derek <br>",
                            thirdSon : "trump <br>",
                            forthSon: "obama <br>",
                            fifthSon: "bush <br>",
                         },
                         bill:{
                            firstSon : "robert <br>",
                            secondSon : "john <br>",
                         }
                }
            }
         }
        
        };
        function printValues(obj) {
            for (var key in obj) {
                if (typeof obj[key] != "object") {
                    document.write(obj[key]); 
                       
                } else {
                    printValues(obj[key]);  
                }
            }
        }

printValues(family);

delete family.david.kegan.alex.jackma.forthSon;


printValues("<h2>Updated family  after removing Jackma son</h2>");
printValues(family);

document.writeln("<br>Before Change name : " + " " + family.david.kegan.alex.jackma.thirdSon);
family.david.kegan.alex.jackma.son3 = "Donald Trump";
document.write("After Change name : " + " " + family.david.kegan.alex.jackma.thirdSon);

document.write("</br>");
document.writeln("<br>Before Change name : " + " " + family.jack.secondSon);
family.jack.son2 = "DerekKhan";
document.write("After Change name : " + " " + family.jack.secondSon);
