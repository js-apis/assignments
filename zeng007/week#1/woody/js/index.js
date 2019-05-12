let imageFiles = [
  'hermes.png',
  'velvet.png',
  'narciso.png',
  'oudwood.png',
  'goodgirl.png',
  'katvond.png',
  'blackorchid.png',
  'decadence.png',


];

let imageNames = [
  'HERMÈSS - Terre d Herms',
  'COMMODITY - Velvet',
  'NARCISO RODRIGUEZ - for her Eau de Toilette',
  'TOM FORD - Oud Wood',
  'CAROLINA HERRERA - Good Girl',
'KAT CON D - Sinner Eau de Parfum',
'TOM FORD - Black Orchid',
'MARC JACOBS - Decadence',

];

// todo use forEach to generate HTML for these images
// append the new HTML to #imageContainer
// stretch goal: for each image, also display the name below
imageFiles.forEach(function(filename, index){
  let animalName = imageNames[index];
  let html = `
    <div>
      <img src="images/${filename}"/>
      <h3> ${animalName} </h3>
    </div>
  `;
  $('#imageContainer').append(html);
})
