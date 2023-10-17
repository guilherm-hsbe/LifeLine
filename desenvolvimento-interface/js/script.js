//? ─── Navbar ──────────────────────────────────────────────────────────────────

/* ------------------------------------------------------------
 * Ativar barra de pesquisa com atalho
 */
const searchBar = document.getElementById("searchBar");

function activateSearchBar() {
    searchBar.focus();
}

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "k") {
        activateSearchBar();
        event.preventDefault();
    }
});

/* ------------------------------------------------------------
 * Mudar display de comando da search bar dependendo do tipo de dispositivo do usuário (Mac ou Windows)
 */
const searchBarLabel = document.getElementById("searchBarLabel");
const isMacOS = navigator.userAgent.toUpperCase().indexOf('MAC') >= 0;

if (isMacOS) { searchBarLabel.innerText = "CMD + K"; }
else { searchBarLabel.innerText = "CTRL + K"; }

//? ─── Contato ──────────────────────────────────────────────────────────────────

/* ------------------------------------------------------------
 * Formatar número de telefone
 */
document.getElementById("tbTel").addEventListener("input", function (e) {
    const input = e.target;
    const value = input.value.replace(/\D/g, "");
    
    if (value.length >= 1) {
        input.value = `(${value.substring(0, 2)}) ${value.substring(2, 6)}-${value.substring(6, 11)}`;
    } else input.value = value;
});

/* ------------------------------------------------------------
 * Apresentação dinâmica das subopções do seletor de assunto
 */
const tipoAssunto = document.getElementById('dlTipoAssunto');
const tipoAssuntoSM = document.getElementById('dlTipoAssuntoSM');
const tipoAssuntoSF = document.getElementById('dlTipoAssuntoSF');
const tipoAssuntoDR = document.getElementById('dlTipoAssuntoDR');
const tipoAssuntoGR = document.getElementById('dlTipoAssuntoGR');
const tipoAssuntoOutro = document.getElementById('tbTipoAssuntoOutro');

function hideAllSelects() {
    tipoAssuntoSM.style.display = 'none';
    tipoAssuntoSF.style.display = 'none';
    tipoAssuntoDR.style.display = 'none';
    tipoAssuntoGR.style.display = 'none';
    tipoAssuntoOutro.style.display = 'none';
}

hideAllSelects();
tipoAssunto.style.display = 'flex';

tipoAssunto.addEventListener('change', function () {
    hideAllSelects();
    const valorSelecTipoAssunto = tipoAssunto.value;

    if (valorSelecTipoAssunto === 'op1') tipoAssuntoSM.style.display = 'flex';
    else if (valorSelecTipoAssunto === 'op2') tipoAssuntoSF.style.display = 'flex';
    else if (valorSelecTipoAssunto === 'op3') tipoAssuntoDR.style.display = 'flex';
    else if (valorSelecTipoAssunto === 'op4') tipoAssuntoGR.style.display = 'flex';
    else if (valorSelecTipoAssunto === 'op5') tipoAssuntoOutro.style.display = 'flex';
});
tipoAssunto.dispatchEvent(new Event('change'));

/* ------------------------------------------------------------
 * Especificação de pessoa por opção "Outro"
 */
const tipoPessoa = document.getElementById('dlTipoPessoa');
const tipoPessoaOutro = document.getElementById('tbTipoPessoaOutro');

tipoPessoaOutro.style.display = 'none';
tipoPessoa.style.display = 'flex';

tipoPessoa.addEventListener('change', function() {
    tipoPessoaOutro.style.display = 'none';
    const valorSelecTipoPessoa = tipoPessoa.value;
    if (valorSelecTipoPessoa === 'op8') tipoPessoaOutro.style.display = 'flex';
});
tipoPessoa.dispatchEvent(new Event('change'));

/* ------------------------------------------------------------
 * Checar tamanho do arquivo do anexo
 */
function checkFileSize(input) {
    const maxFileSize = 10 * 1024 * 1024;
    const fileSize = input.files[0].size;
    const errorElement = document.getElementById('file-size-error');

    if (fileSize > maxFileSize) {
        errorElement.textContent = 'O arquivo excede o tamanho máximo permitido (10 MB).';
        input.value = '';
    } else errorElement.textContent = '';
}