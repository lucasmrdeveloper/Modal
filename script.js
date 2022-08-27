(() => {
    document.addEventListener('DOMContentLoaded', () => {
        modal()
    })

    const modal = () => {
        const btnOpenModal = document.querySelector('.btn-modal')
        const btnCloseModal = document.querySelector('.btn-close') 
        const modal = document.querySelector('.modal-box')

        btnOpenModal.addEventListener('click', openModal)
        btnCloseModal.addEventListener('click', closeModal)

        function openModal() {
            modal.classList.add('active')
            btnOpenModal.style.display = 'none'
        }

        function closeModal() {
            modal.classList.remove('active')
            btnOpenModal.style.display = 'initial'
        }
    }
})()