
        // Exemplo de script para interações futuras
        document.querySelector('form').addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Comentário enviado!');
        });

        // Script para o mural de receitas
        document.getElementById('form-receita').addEventListener('submit', function (event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value;
            const fotoInput = document.getElementById('foto');
            const descricao = document.getElementById('descricao').value;
            if (fotoInput.files && fotoInput.files[0]) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const mural = document.getElementById('mural-receitas');
                    const receitaDiv = document.createElement('div');
                    receitaDiv.className = 'receita-postada';
                    receitaDiv.innerHTML = `
                        <img src="${e.target.result}" alt="Foto da Receita" class="img-receita-postada" style="max-width:100%;border-radius:8px;margin-bottom:8px;"/>
                        <h4>${nome}</h4>
                        <p>${descricao}</p>
                    `;
                    mural.prepend(receitaDiv);
                    document.getElementById('form-receita').reset();
                };
                reader.readAsDataURL(fotoInput.files[0]);
            }
        });

        // Slider simples
        const sliderLis = document.querySelectorAll('.slider li');
        let sliderIndex = 0;
        function showSlide(index) {
            sliderLis.forEach((li, i) => {
                li.classList.toggle('active', i === index);
            });
        }
        function nextSlide() {
            sliderIndex = (sliderIndex + 1) % sliderLis.length;
            showSlide(sliderIndex);
        }
        showSlide(sliderIndex);
        setInterval(nextSlide, 3000);
    