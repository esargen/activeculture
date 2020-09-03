const pieces = [
  {
    title: "Can I Cook Korean?",
    description: "thoughts on multiculturalism, against a nice traybake with entirely too much chili crisp",
    image: "traybake.png",
    link: "https://docs.google.com/document/d/1atY2uG7t5_oyEBCoJE4rjlNCp6U1_NBuJaLgyBv35Os/edit",
    category: "essay"
  },
  {
    title: "Yellowroot",
    description: "a look at this bold, gold herbal of the Blue Ridge Mountains, with full particulars",
    image: "yellowroot.png",
    link: "https://drive.google.com/drive/folders/1quBLCUaprJ6KqJJ7jUgCoanYN7IlGlFs",
    category: "nonfiction"
  },
  {
    title: "Ode to a hasty bake",
    description: "my relationship to my mother in shades of cinnamon, in three acts",
    image: "cookie.png",
    link: "https://www.bonappetit.com/recipe/tahini-cookies-2",
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
