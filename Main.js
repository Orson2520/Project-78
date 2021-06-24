var images =
["Photo.jpg",
"Family 3.jpg",
"Orson n Bronson.jpg",
"My brother's communion.jpg",
"My communion.jpg",
"My father and mother.jpg"]

var names = 
["Me",
"My family",
"Me and my brother",
"My brother's communion",
"My communion",
"My father and mother"]

var i = 0;
function update()
{
i++;
var numbers_of_family_member_in_array = 5
if(i > numbers_of_family_member_in_array )
{
    i=0;
}
var updateImage = images[i];
var updateName = names[i];
document.getElementById("family_member_image").src = updateImage;
document.getElementById("family_member_name").innerHTML = updateName;
}