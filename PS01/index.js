var margin = {top: 66, right: 110, bottom: 20, left: 188},
    width = document.body.clientWidth - margin.left - margin.right,
    height = 340 - margin.top - margin.bottom,
    innerHeight = height - 2;


var scaleX= d3.scaleBand().range([0, width]);
var scaleY = d3.scaleLinear().range([400, 0]);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



///////////////////////////////////////////////////Define variables//////////////////////////////////////////////

var nestedData = [];
var formerDancers;
var currentDancers;
var Map = d3.map();
clicked=false;



///////////////////////////////////////////////////Answer key maps//////////////////////////////////////////////
var danceEd = [{value: 1, text: "None"},
    {value: 2, text: "Diploma from Dance School"},
    {value: 3, text: "Diploma from Performing Arts School"},
    {value: 4, text: "Bachelor's Degree"},
    {value: 5, text: " Advanced Diploma from Dance School"},
    {value: 6, text: "Advanced Diploma from Performing Arts School"},
    {value: 7, text: "Graduate Degree"},
    {value: 8, text: "Other"},
    {value: "D", text: "Did not answer"}
];


var danceEdLabel= danceEd.forEach(function (d) {
    Map.set(d.value, d.text);
});


var nonDanceEd = [{value: 1, text: "Completed Primary School"},
    {value: 2, text: "Completed Secondary School"},
    {value: 3, text: "Post-Secondary Diploma, certificate"},
    {value: 4, text: "Bachelor's Degree"},
    {value: 5, text: "Graduate Degree"},
    {value: 6, text: "Other"},
    {value: "D", text: "Did not answer"}
];


var nonDanceEdLabel= nonDanceEd.forEach(function (d) {
    Map.set(d.value, d.text);
});


var whyStopCurrent= [ {value: 1, text: "Feeling to old to Continue"},
    {value: 2, text: "Financial Difficulties"},
    {value: 3, text: "Health/effect of Injuries"},
    {value: 4, text: "Dance work not likely to be available"},
    {value: 5, text: "Desire to move to a new Career"},
    {value: 6, text: "Contract Expires"},
    {value: 7, text: "Other"},
    {value: 8, text: "Don't know"},
    {value: 9, text: "Family Responsibilities/Desire to Start a Family"},
    {value: 10, text: "When it is no longer enjoyable"},
    {value: "D", text: "Did not answer"}
];

var whyStopCurrentLabel= whyStopCurrent.forEach(function (d) {
    Map.set(d.value, d.text);
});


var challengesCurrent= [ {value: 1, text: "Physical Problems"},
    {value: 2, text: "Loss of Status"},
    {value: 3, text: "Loss of Income"},
    {value: 4, text: "Loss of Friends and Support Network"},
    {value: 5, text: "Emotional Problems"},
    {value: 6, text: "Difficulty Deciding What to do Next"},
    {value: 7, text: "A Sense of Emptiness"},
    {value: 8, text: "Other"},
    {value: 9, text: "Don't know"},
    {value: "D", text: "Did not answer"}
];

var challengesCurrentLabel= challengesCurrent.forEach(function (d) {
    Map.set(d.value, d.text);
});


var whyStopFormer= [ {value: 1, text: "Feeling to old to Continue"},
    {value: 2, text: "Financial Difficulties"},
    {value: 3, text: "Health/effect of Injuries"},
    {value: 4, text: "Dance work not available"},
    {value: 5, text: "Desire to move to a new Career"},
    {value: 6, text: "Contract Expired"},
    {value: 7, text: "Other"},
    {value: 8, text: "Don't know"},
    {value: 9, text: "Family Responsibilities"},
    {value: 10, text: "No longer enjoyable"},
    {value: "D", text: "Did not answer"}
];

var whyStopFormerLabel= whyStopFormer.forEach(function (d) {
    Map.set(d.value, d.text);
});


var challengesFormer= [ {value: 1, text: "Physical Problems"},
    {value: 2, text: "Loss of Status"},
    {value: 3, text: "Loss of Income"},
    {value: 4, text: "Loss of Friends and Support Network"},
    {value: 5, text: "Emotional Problems"},
    {value: 6, text: "Difficulty Deciding What to do Next"},
    {value: 7, text: "A Sense of Emptiness"},
    {value: 8, text: "Other"},
    {value: 9, text: "Don't Remember"},
    {value: "D", text: "Did not answer"}
];

var challengesFormerLabel= challengesFormer.forEach(function (d) {
    Map.set(d.value, d.text);
});
////////////////////////////////////////////////////////////Answer key maps////////////////////////////////////////////////////////////////

//tool tip
var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);





////////////////////////////////////////////////////////////import data//////////////////////////////////////////////////////////////////////
d3.csv('./data.csv', function(dataIn){

    nestedData = d3.nest()
        .key(function (d) {
            return d.A1CURFOR
        })
        .entries(dataIn);
    currentDancers = nestedData.filter(function(d){return d.key == '1'})[0].values;
    formerDancers = nestedData.filter(function(d){return d.key == '2'})[0].values;

   //Axis for "What Age do you think you will stop dancing?"
    scaleY.domain([0, d3.max(dataIn.map(function(d){return +d.C12STPCR}))]);
    svg.append("g")
        .attr('class','yaxis')
        .call(d3.axisLeft(scaleY));

    drawPoints(currentDancers);

});



function drawPoints(pointData){




}

/* function buttonClicked(){

    if(clicked == true){
        drawPoints(currentDancers);
        clicked = false;

    }
    else{
        drawPoints(formerDancers);
        clicked = true;
    }
}
*/