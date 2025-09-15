const form = document.getElementById('newsForm');
const cardsArea = document.getElementById('cardsArea');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const imageInput = document.getElementById('imageFile');
  const titulo = document.getElementById('titulo').value;
  const texto = document.getElementById('texto').value;
  const bgColor = document.getElementById('bgColor').value;
  const textColor = document.getElementById('textColor').value;
  const borda = document.getElementById('borda').value;
  const margem = document.getElementById('margem').value;

  if (imageInput.files && imageInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (event) {
      addCard(event.target.result, titulo, texto, bgColor, textColor, borda, margem);
    };
    reader.readAsDataURL(imageInput.files[0]);
  }
});

function addCard(imageSrc, titulo, texto, bgColor, textColor, borda, margem) {
  const cardsArea = document.getElementById('cardsArea');

  const card = document.createElement('div');
  card.className = 'card-noticia p-3 rounded';
  card.style.background = bgColor;
  card.style.color = textColor;
  card.style.border = borda;
  card.style.margin = `${margem}px 0`;

  const img = document.createElement('img');
  img.src = imageSrc;
  img.className = 'preview-img w-100 rounded mb-2';
  img.alt = 'Imagem da notícia';

  const h4 = document.createElement('h4');
  h4.textContent = titulo;

  const p = document.createElement('p');
  p.textContent = texto;

  card.appendChild(img);
  card.appendChild(h4);
  card.appendChild(p);

  cardsArea.appendChild(card);
}
