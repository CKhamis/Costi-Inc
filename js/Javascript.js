//Costi Entertainment **********************************************************
var bannerTitle = ["Entertainment at its best", "A Costi Inc. Subsidiary", "Home of the Ethan Show", "Home of the fantastic Amal +", "From Costi inc."];

//change text
d3.select("#bannerTitle")
  .text(function(d, i){return "Costi Entertainment • " + bannerTitle[Math.floor(Math.random() * 5)]; });
d3.selectAll(".boxShadow")
  .on('mouseover', function(d, i) {
        d3.select(this)
          .style('box-shadow', '0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)')
          .transition()
          .duration(500)
          .style('margin-top', '0px')
          .style('margin-bottom', '10px');
        })
  .on('mouseout', function(d, i) {
        d3.select(this)
          .style('box-shadow', '0 15px 35px rgba(50,50,93,.0),0 5px 15px rgba(0,0,0,.00)')
          .transition()
          .duration(700)
          .style('margin-top', '10px')
          .style('margin-bottom', '0px');
      });

//Entertainment Entries ********************************************************
//Episode Entries **************************************************************

d3.csv("../Data/FeaturedEpisodes.csv", function(error,data){
	var List = d3.select("#episodeListContainer");

  	var cards = List.selectAll("div")
		.data(data)
		.enter()
			.append("div")
			.attr("class", function (d) {return d.Class;})
				.append("div")
				.style("padding-right", "5px")
				.style("padding-left", "5px")
				.style("background-color", "white");

	cards.append("img")
		.attr("src", function (d) {return d.img;})
		.style("width", "100%");


});
