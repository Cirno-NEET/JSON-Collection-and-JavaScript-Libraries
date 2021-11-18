//To whom it may concern,
//
//Never in my life have I felt such abject despair in the face of lines of code.
//This code has been the bane of my existence for nearly a week.
//I simply can't understand why it chooses not to work here, when the same exact code worked -perfectly- on a previous project. The project just before this one, as a matter of fact.
//That code even still works in its original project file! Why, then, does it not function here?
//I have spent a week bashing mmy head against a brick wall, to no avail.
//This isn't even the first time during this course that my computer has decided not to function properly.
//I can only assume that my laptop has been cursed by some vengeful tech-spirit.
//I now pass this horrible mistake of JavaScript nature on to you.
//I don't expect to score well, but at this point, I just want this travesty out of my life.
//
//  -Matt

var heading;
var executeButton;
var outputParagraph;
var outputParagraph1;
var outputParagraph2;
var outputParagraph3;
var outputParagraph4;
var outputParagraph5;
var inputElement;

var titles = ["Fossil Fighters", "Fossil Fighters: Champions", "Endless Ocean: Blue World", "Pokemon FireRed", "Pokemon XD: Gale of Darkness", "Pokemon Battle Revolution", "Terraria", "Starbound", "Kirby Super Star Ultra", "Kirby Air Ride", "Pokemon Mystery Dungeon: Red Rescue Team", "Digimon World: Dusk", "Sonny 2", "Pac-Man World 2"];
var releaseDates = ["April 17, 2008", "November 118, 2010", "September 17, 2009", "January 29, 2004", "August 4, 2005", "December 14, 2006", "May 16, 2011", "July 22, 2016", "September 22, 2008", "July 11, 2003", "November 17, 2005", "March 29, 2007", "December 19, 2008", "February 24, 2002"];
var platforms = ["Nintendo DS", "Nintendo DS", "Nintendo Wii," "Nintendo GameBoy Advance SP", "Nintendo GameCube", "Nintendo Wii", "PC, Mac, XBox One, PS4, iOS, Android, etc.", "Xbox One, PlayStation 4, Microsoft Windows, Linux, Macintosh operating systems, Classic Mac OS, PlayStation Vita", "Nintendo DS", "Nintendo GameCube", "Nintendo GameBoy Advance SP, Nintendo DS", "Nintendo DS", "Web Browser (Adobe Flash Player)", "Microsoft Windows, PlayStation 2, GameCube, Game Boy Advance, Xbox"];
var developers = ["Nintendo", "Nintendo", "Arika", "Game Freak", "Genius Sorority", "Genius Sorority", "Re-Logic", "Chucklefish", "HAL Laboratory", "HAL Laboratory", "Spike Chunsoft", "BANDAI NAMCO", "Krinn", "Namco"];
var descriptions = ["Fossil Fighters is a 2008 video game developed by Nintendo SPD, Red Entertainment, M2, and Artdink and published by Nintendo. It was first released in Japan on April 17, 2008 and was later released in North America on August 10, 2009, and in Australia on September 17, 2009.", "Fossil Fighters: Champions is a 2010 video game developed by Nintendo SPD, Red Entertainment, M2, and Artdink and published by Nintendo. The game is a sequel to its original title, Fossil Fighters. It was released in Japan on November 18, 2010 and in North America on November 14, 2011.", "Endless Ocean 2: Adventures of the Deep, also known in North America as Endless Ocean: Blue World and Japan as Forever Blue: Call of the Ocean, is a scuba diving video game for Wii and the sequel to Endless Ocean, previously released for Wii in 2007.", "Pokémon FireRed Version and Pokémon LeafGreen Version are 2004 remakes of the 1996 Game Boy role-playing video games Pokémon Red and Blue. They were developed by Game Freak, published by The Pokémon Company and Nintendo for the Game Boy Advance.", "Pokémon XD: Gale of Darkness, released in Japan as Pokémon XD Yami no Kaze Dark Lugia, is a role-playing video game, part of the Pokémon franchise, released for the GameCube. It is the successor of the GameCube game Pokémon Colosseum. The game takes place in Orre, the setting of Pokémon Colosseum's adventure mode.", "Pokémon Battle Revolution is the first Wii incarnation of the Pokémon video game franchise. It is also the first Wii game to use the Nintendo Wi-Fi Connection in North America and Japan and the second Wii game to wirelessly interact with the Nintendo DS handheld.", "Terraria is an action-adventure sandbox game developed by Re-Logic. The game was first released for Microsoft Windows on May 16, 2011, and has since been ported to several other platforms. The game features exploration, crafting, building, painting, and combat with a variety of creatures in a procedurally generated 2D world. Terraria received generally positive reviews, with praise given to its sandbox elements. The game had sold over 35 million copies by the end of 2020.", "Starbound is an action-adventure video game developed and published by Chucklefish. Starbound takes place in a two-dimensional, procedurally generated universe which the player is able to explore in order to obtain new weapons, armor, and items, and to visit towns and villages inhabited by various intelligent lifeforms. Starbound was released out of early access in July 2016 for Microsoft Windows, OS X, and Linux.", "Kirby Super Star Ultra is the third Kirby series game released for the Nintendo DS. A remake of the 1996 Super Nintendo Entertainment System platform game Kirby Super Star, it includes all games found in the original, but adds several new ones.", "Kirby Air Ride, known in Japan as Kirby's Airride, is a 2003 racing video game developed by HAL Laboratory and published by Nintendo for the GameCube. Kirby Air Ride has the players and computer-controlled racers ride on Air Ride Machines.", "Pokémon Mystery Dungeon: Blue Rescue Team and Pokémon Mystery Dungeon: Red Rescue Team are a matched pair of Pokémon video games for the Nintendo DS and Game Boy Advance, respectively. The games were developed by Chunsoft, published by The Pokémon Company, and distributed by Nintendo.", "Digimon World Dawn and Digimon World Dusk, originally released as Digimon Story Sunburst & Moonlight in Japan, are two role-playing video games for the Nintendo DS handheld game console released in Japan on March 29, 2007 and North America on September 18, 2007.", "Sonny 2 is the sequel to the popular flash game Sonny, and continues the storyline where Sonny left off. It, like Sonny, was made by Krinn and published through Armor Games. It was first released on December 19, 2008. The game has seven zones; five story zones and two bonus zones.", "Pac-Man World 2 is a video game by Namco USA for the Xbox, Nintendo GameCube, and PlayStation 2, released in 2002. A version of the game for Microsoft Windows was released in 2004, and an isometric sidescroller was made for the Game Boy Advance in 2005. The game is a sequel to Pac-Man World."];

document.addEventListener("DOMContentLoaded", function()
{

  heading = document.getElementById("title");
  executeButton = document.getElementById("executeButton");
  outputParagraph = document.getElementById("outputText");
  outputParagraph1 = document.getElementById("outputText1");
  outputParagraph2 = document.getElementById("outputText2");
  outputParagraph3 = document.getElementById("outputText3");
  outputParagraph4 = document.getElementById("outputText4");
  outputParagraph5 = document.getElementById("outputText5");
  inputElement = document.getElementById("myInput");

  executeButton.addEventListener("click", function()
  {
    generateGames();
  });

  document.addEventListener("mousemove", function(event)
  {
    mouseMovedFunc(event);
  })

});

function generateGames()
{
  var currentInputText = inputElement.value;
  var randomGameIndex = Math.floor(Math.random()*titles.length);

  if(currentInputText == "")
  {
    outputParagraph.innerText = "Enter your name!";
    outputParagraph1.innerText = "Title: N/A";
    outputParagraph2.innerText = "Release Date: N/A";
    outputParagraph3.innerText = "Platform(s): N/A";
    outputParagraph4.innerText = "Developer: N/A";
    outputParagraph5.innerText = "Description: N/A";
  }
  else
  {
    outputParagraph.innerText = currentInputText + ", the game you should play is:";
    outputParagraph1.innerText = "Title: " + titles[randomGameIndex];
    outputParagraph2.innerText = "Release Date: " + releaseDates[randomGameIndex];
    outputParagraph3.innerText = "Platform(s): " + platforms[randomGameIndex];
    outputParagraph4.innerText = "Developer: " + developers[randomGameIndex];
    outputParagraph5.innerText = "Description: " + descriptions[randomGameIndex];
  }

}


var gameList = {
  "title" : "Fossil Fighters"
  "releaseDate" : "April 17, 2008"
  "platform" : "Nintendo DS"
  "developer" : "Nintendo"
  "description" : "Fossil Fighters is a 2008 video game developed by Nintendo SPD, Red Entertainment, M2, and Artdink and published by Nintendo. It was first released in Japan on April 17, 2008 and was later released in North America on August 10, 2009, and in Australia on September 17, 2009."
},
{
  "title" : "Fossil Fighters: Champions"
  "releaseDate" : "November 18, 2010"
  "platform" : "Nintendo DS"
  "developer" : "Nintendo"
  "description" : "Fossil Fighters: Champions is a 2010 video game developed by Nintendo SPD, Red Entertainment, M2, and Artdink and published by Nintendo. The game is a sequel to its original title, Fossil Fighters. It was released in Japan on November 18, 2010 and in North America on November 14, 2011."
},
{
  "title" : "Endless Ocean: Blue World"
  "releaseDate" : "September 17, 2009"
  "platform" : "Nintendo Wii"
  "developer" : "Arika"
  "description" : "Endless Ocean 2: Adventures of the Deep, also known in North America as Endless Ocean: Blue World and Japan as Forever Blue: Call of the Ocean, is a scuba diving video game for Wii and the sequel to Endless Ocean, previously released for Wii in 2007."
},
{
  "title" : "Pokemon FireRed"
  "releaseDate" : "January 29, 2004"
  "platform" : "Nintendo GameBoy Advance SP"
  "developer" : "Game Freak"
  "description" : "Pokémon FireRed Version and Pokémon LeafGreen Version are 2004 remakes of the 1996 Game Boy role-playing video games Pokémon Red and Blue. They were developed by Game Freak, published by The Pokémon Company and Nintendo for the Game Boy Advance."
},
{
  "title" : "Pokemon XD: Gale of Darkness"
  "releaseDate" : "August 4, 2005"
  "platform" : "Nintendo GameCube"
  "developer" : "Genius Sorority"
  "description" : "Pokémon XD: Gale of Darkness, released in Japan as Pokémon XD Yami no Kaze Dark Lugia, is a role-playing video game, part of the Pokémon franchise, released for the GameCube. It is the successor of the GameCube game Pokémon Colosseum. The game takes place in Orre, the setting of Pokémon Colosseum's adventure mode."
},
{
  "title" : "Pokemon Battle Revolution"
  "releaseDate" : "December 14, 2006"
  "platform" : "Nintendo Wii"
  "developer" : "Genius Sorority"
  "description" : "Pokémon Battle Revolution is the first Wii incarnation of the Pokémon video game franchise. It is also the first Wii game to use the Nintendo Wi-Fi Connection in North America and Japan and the second Wii game to wirelessly interact with the Nintendo DS handheld."
},
{
  "title" : "Terraria"
  "releaseDate" : "May 16, 2011"
  "platform" : "PC, Mac, XBox One, PS4, iOS, Android, etc."
  "developer" : "Re-Logic"
  "description" : "Terraria is an action-adventure sandbox game developed by Re-Logic. The game was first released for Microsoft Windows on May 16, 2011, and has since been ported to several other platforms. The game features exploration, crafting, building, painting, and combat with a variety of creatures in a procedurally generated 2D world. Terraria received generally positive reviews, with praise given to its sandbox elements. The game had sold over 35 million copies by the end of 2020."
},
{
  "title" : "Starbound"
  "releaseDate" : "July 22, 2016"
  "platform" : "Xbox One, PlayStation 4, Microsoft Windows, Linux, Macintosh operating systems, Classic Mac OS, PlayStation Vita"
  "developer" : "Chucklefish"
  "description" : "Starbound is an action-adventure video game developed and published by Chucklefish. Starbound takes place in a two-dimensional, procedurally generated universe which the player is able to explore in order to obtain new weapons, armor, and items, and to visit towns and villages inhabited by various intelligent lifeforms. Starbound was released out of early access in July 2016 for Microsoft Windows, OS X, and Linux."
},
{
  "title" : "Kirby Super Star Ultra"
  "releaseDate" : "September 22, 2008"
  "platform" : "Nintendo DS"
  "developer" : "HAL Laboratory"
  "description" : "Kirby Super Star Ultra is the third Kirby series game released for the Nintendo DS. A remake of the 1996 Super Nintendo Entertainment System platform game Kirby Super Star, it includes all games found in the original, but adds several new ones."
},
{
  "title" : "Kirby Air Ride"
  "releaseDate" : "July 11, 2003"
  "platform" : "Nintendo GameCube"
  "developer" : "HAL Laboratory"
  "description" : "Kirby Air Ride, known in Japan as Kirby's Airride, is a 2003 racing video game developed by HAL Laboratory and published by Nintendo for the GameCube. Kirby Air Ride has the players and computer-controlled racers ride on Air Ride Machines."
},
{
  "title" : "Pokemon Mystery Dungeon: Red Rescue Team"
  "releaseDate" : "November 17, 2005"
  "platform" : "Nintendo Game Boy Advance SP,  Nintendo DS"
  "developer" : "Spike Chunsoft"
  "description" : "Pokémon Mystery Dungeon: Blue Rescue Team and Pokémon Mystery Dungeon: Red Rescue Team are a matched pair of Pokémon video games for the Nintendo DS and Game Boy Advance, respectively. The games were developed by Chunsoft, published by The Pokémon Company, and distributed by Nintendo."
},
{
  "title" : "Digimon World: Dusk"
  "releaseDate" : "March 29, 2007"
  "platform" : "Nintendo DS"
  "developer" : "BANDAI NAMCO"
  "description" : "Digimon World Dawn and Digimon World Dusk, originally released as Digimon Story Sunburst & Moonlight in Japan, are two role-playing video games for the Nintendo DS handheld game console released in Japan on March 29, 2007 and North America on September 18, 2007."
},
{
  "title" : "Sonny 2"
  "releaseDate" : "December 19, 2008"
  "platform" : "Web Browser (Adobe Flash Player)"
  "developer" : "Krinn"
  "description" : "Sonny 2 is the sequel to the popular flash game Sonny, and continues the storyline where Sonny left off. It, like Sonny, was made by Krin and published through Armor Games. It was first released on December 19, 2008. The game has seven zones; five story zones and two bonus zones."
},
{
  "title" : "Pac-Man World 2"
  "releaseDate" : "February 24, 2002"
  "platform" : "Microsoft Windows, PlayStation 2, GameCube, Game Boy Advance, Xbox"
  "developer" : "Namco"
  "description" : "Pac-Man World 2 is a video game by Namco USA for the Xbox, Nintendo GameCube, and PlayStation 2, released in 2002. A version of the game for Microsoft Windows was released in 2004, and an isometric sidescroller was made for the Game Boy Advance in 2005. The game is a sequel to Pac-Man World."
}
}

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementMessy(incomingJSON) {

  /// Start our HTML chunk
  var incompleteHTML = "<div class=\"contentItem\" style=\"background-color: " + incomingJSON['favorite_color'] + "\"> <h3 class=\"contentTitle\">" + incomingJSON['title'] + "</h3><h4>My Pets:</h4><ul class=\"petList\">";

  /// Append Pets to the list
  for (var i = 0; i < incomingJSON['pets'].length; i++) {
    var petString = "<li>" + incomingJSON['pets'][i] + "</li>";
    incompleteHTML += petString;
  }

  /// Complete our HTML chunk
  incompleteHTML += "</ul></div>";
  contentGridElement.innerHTML = incompleteHTML;
  console.log(incompleteHTML);
}

function createElementProper(incomingJSON) {

  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['favorite_color'];
  newContentElement.classList.add('contentItem');

  /// Create HEADLINE h3, set class, set content
  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newContentHeading);

  /// Create & add LIST HEADLINE to the item
  let newContentSubhead = document.createElement("H4");
  newContentSubhead.innerText = "My Pets:";
  newContentElement.appendChild(newContentSubhead);

  /// Create & add PET LIST to the item
  let newContentPetList = document.createElement("UL");
  newContentElement.appendChild(newContentPetList);

  /// Create & add all the pet LIST ITEMS to the PET LIST
  for (var i = 0; i < incomingJSON['pets'].length; i++) {
    var currentPetString = incomingJSON['pets'][i];
    var newPetItem = document.createElement("LI");
    newPetItem.innerText = currentPetString;
    newContentPetList.appendChild(newPetItem);
  }

  /// Create & add footer image
  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  /// Add the item to the page
  contentGridElement.appendChild(newContentElement);

}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const parsedSiteCatParam = urlParams.get('cat'); //Returns us a string that has "cat" in it.
