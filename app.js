const pieces = [
  {
    title: "Twilight of the Imperial Chef",
    description: "For decades, the notion of the lone genius in the kitchen has fostered culinary creativity — and restaurants marred by abuse and unfairness. This may be the time for change.",
    image: "imperialchef.JPG",
    link: "https://www.nytimes.com/2020/08/04/dining/chef-restaurant-culture.html",
    category: "nonfiction"
  },
  {
    title: "In a Prius on the Edge of Sanity",
    description: "Sometimes it takes a ridiculous, hedonistic, emotionally fraught road trip across 19 states to figure out where you really are.",
    image: "roadtrip.JPG",
    link: "https://www.bonappetit.com/story/prius-road-trip",
    category: "essay"
  },
  {
    title: "September Tomatoes ",
    description: "an obituary for the end of summer",
    image: "tomato.jpg",
    link: "https://www.poetryfoundation.org/poems/56583/september-tomatoes",
    category: "poetry"
  }
]

$("#logocontainer").hover( function() {
  $("#sidenav").toggleClass("fullheight");
});
$("#sidenav").hover( function() {
  $("#sidenav").toggleClass("fullheight");
});

function remove() {
  $(".content > div:nth-child(1)").delay(1000).addClass("none");
}

$(".navbutton").hover( function() {
  if ($(this).children("p").text() === "About") {
    $(".content > div:nth-child(1)").removeClass();
    $(".content > div:nth-child(1)").addClass("notfullwidth");
    remove();
    $("#about").addClass("fullwidth");
  } else if ($(this).children("p").text() === "Words") {
    $(".content > div:nth-child(1)").removeClass();
    $(".content > div:nth-child(1)").addClass("notfullwidth");
    remove();
    $("#words").addClass("fullwidth");
  } else if ($(this).children("p").text() === "Pictures") {
    $(".content > div:nth-child(1)").removeClass();
    $(".content > div:nth-child(1)").addClass("notfullwidth");
    remove();
    $("#pictures").addClass("fullwidth");
  } else if ($(this).children("p").text() === "Recipe Box") {
    $(".content > div:nth-child(1)").removeClass();
    $(".content > div:nth-child(1)").addClass("notfullwidth");
    remove();
    $("#recipes").addClass("fullwidth");
  } else {
    $(".content > div:nth-child(1)").removeClass();
    $(".content > div:nth-child(1)").addClass("notfullwidth");
    remove();
    $("#pitch").addClass("fullwidth");
  }
});

$(".content").hover( function() {
  $(this).toggleClass("fullwidth");
})


document.addEventListener("DOMContentLoaded", () => {
  for (i=0; i < pieces.length; i++) {
    let piece = pieces[i];
    $("#wordcontainer").append("<div id='" + piece.title + "' class='piece " + piece.category + "'><h3>" + piece.title + "</h3><div class='imgcontainer'><a target='_blank' href='" + piece.link + "'><img src='static/" + piece.image + "'></a></div><p>" + piece.description + "</p></div>");
  };

var nonfiction = $(".nonfiction");
var essay = $(".essay");
var poetry = $(".poetry");

var pieces2 = $(".piece");

  $(".catnav").children(".option").click(function() {
    if ($(this).text() === "Nonfiction") {
      for (i=0; i<pieces2.length; i++) {
        $(pieces2[i]).hasClass("nonfiction") === true ? $(pieces2[i]).removeClass("none") : $(pieces2[i]).addClass("none");
      };
    };
    if ($(this).text() === "Essay") {
      for (i=0; i<pieces2.length; i++) {
        $(pieces2[i]).hasClass("essay") === true ? $(pieces2[i]).removeClass("none") : $(pieces2[i]).addClass("none");
      };
    };
    if ($(this).text() === "Poetry") {
      for (i=0; i<pieces2.length; i++) {
        $(pieces2[i]).hasClass("poetry") === true ? $(pieces2[i]).removeClass("none") : $(pieces2[i]).addClass("none");
      };
    };
    if ($(this).text() === "all") {
      $(".piece").removeClass("none");
    };
  });

  var ex = $("#ex");

  pieces2.add(ex).on('click', function() {
    $("#piece").toggleClass("show");
  });


});


var x = window.matchMedia("(max-device-width: 600px)")
myFunction(x)
x.addListener(myFunction)


function myFunction(x) {
  if (x.matches) {
    $("#logocontainer").children("a").removeAttr("href");
    $("#logocontainer").click(function() {
      $("#sidenav").toggleClass("fullheight");
    });

    function remove() {
      $(".content > div:nth-child(1)").delay(1000).addClass("none");
    }

    $(".navbutton").click( function() {
      if ($(this).children("p").text() === "About") {
        $(".content > div:nth-child(1)").removeClass();
        $(".content > div:nth-child(1)").addClass("notfullwidth");
        remove();
        $("#about").addClass("fullwidth");
      } else if ($(this).children("p").text() === "Words") {
        $(".content > div:nth-child(1)").removeClass();
        $(".content > div:nth-child(1)").addClass("notfullwidth");
        remove();
        $("#words").addClass("fullwidth");
      } else if ($(this).children("p").text() === "Pictures") {
        $(".content > div:nth-child(1)").removeClass();
        $(".content > div:nth-child(1)").addClass("notfullwidth");
        remove();
        $("#pictures").addClass("fullwidth");
      } else if ($(this).children("p").text() === "Recipe Box") {
        $(".content > div:nth-child(1)").removeClass();
        $(".content > div:nth-child(1)").addClass("notfullwidth");
        remove();
        $("#recipes").addClass("fullwidth");
      } else {
        $(".content > div:nth-child(1)").removeClass();
        $(".content > div:nth-child(1)").addClass("notfullwidth");
        remove();
        $("#pitch").addClass("fullwidth");
      };
      $("#sidenav").toggleClass("fullheight");
    });
  } else {
    ""
  }
}
