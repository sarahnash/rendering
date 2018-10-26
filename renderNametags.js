
function makeNametags (name) {
  return `
        <div class="text-center mt-5" style="border-style: solid; border-color: black">
            <h1 style = "background-color: blue; color: white">Hello, my name is:</h1>
            <div class = "tag-body" style= "padding: 20px; color: black; font-size: 60px">${name}</div>
        </div>
    `
}

function renderNametags (nametags) {
  return nametags.map(makeNametags).join('')
}

function nametags () {
  var content = document.getElementById('content')

  var nametagsAbstraction = [
    'Kamilah',
    'Kim',
    'Stuart',
    'Ron',
    'Krissy'
  ]

  content.innerHTML = renderNametags(nametagsAbstraction)

}
