document.addEventListener("DOMContentLoaded", function() {
    const modalHTML = `
        <div id="exit-modal" style="display:none; position:fixed; z-index:99999; left:0; top:0; width:100%; height:100%; background-color: rgb(0 0 0 / 94%); align-items:center; justify-content:center;">
            <div style="background:#fff; padding:30px; border-radius:12px; max-width:450px; width:90%; text-align:center; position:relative; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
                <span id="close-exit-modal" style="position:absolute; top:10px; right:15px; font-size:24px; cursor:pointer; color:#888;">&times;</span>
                <div style="font-size: 42px; margin-bottom: 10px;">🤔</div>
                <h3 style="margin-top:0; color:#333; font-size:20px;">¿Te vas sin encontrar lo que buscas?</h3>
                <p style="color:#555; font-size:15px; font-weight: 500; margin: 15px 0;">Cuéntanos qué le pasa a tus equipos para ver si podemos ayudarte. Brindamos soporte técnico a domicilio u oficina.</p>
                <a href="https://wa.me/51999999999?text=Hola,%20para%20soporte%20onsite%20tengo%20una%20consulta..." target="_blank" style="background:#109c45; color:#fff; padding:12px 20px; border-radius:6px; text-decoration:none; font-weight:bold; display:inline-block; margin-top:10px;">Escribir por WhatsApp 💬</a>
                <p style="color:#555; font-size:12px; font-weight: 500; margin: 15px 0;">Vemos pc, laptops, instalaciones y configuración de impresoras, redes, armado de pc, y otros servicios informáticos.</p>
                </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('exit-modal');
    const closeBtn = document.getElementById('close-exit-modal');

    function showModal() {
        modal.style.display = 'flex';
    }

    document.addEventListener('mouseleave', function(e) {
        if (e.clientY <= 0) {
            showModal();
        }
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});