(() => {
    document.addEventListener('DOMContentLoaded', () => {
        modal()
    })

    const modal = () => {
        const $btnOpenModal = document.querySelector('.btn-modal')
        const $btnCloseModal = document.querySelector('.btn-close') 
        const $modal = document.querySelector('.modal-box')

        $btnOpenModal.addEventListener('click', () => {openModal($modal, $btnOpenModal)})
        $btnCloseModal.addEventListener('click', () => {closeModal($modal, $btnOpenModal)})

        function openModal($modal, $btnOpen) {
            $modal.classList.add('active')
            $btnOpen.style.display = 'none'
        }

        function closeModal($modal, $btnOpen) {
            $modal.classList.remove('active')
            $btnOpen.style.display = 'initial'
        }
    }
})()