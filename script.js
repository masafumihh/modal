(() => {
    const openModalBtn = document.querySelectorAll('[data-open-modal]');
    const closeModalBtn = document.querySelectorAll('[data-close-modal]');
    const closeAccountModalBtn = document.querySelectorAll('[data-close-account-modal]');
    const overlay = document.querySelector('[data-overlay]');
    
    openModalBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = document.querySelector(btn.dataset.openModal);
            openModal(modal);
        });
    });

    closeModalBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.active');
            closeModal(modal);
        });
    });

    closeAccountModalBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.active');
            closeAccountModal(modal);
        });
    });
    
    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
            closeModal(modal);
        });
    });

    function openModal(modal) {
        if (modal == null) return;
        modal.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        if (modal == null) return;
        modal.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'scroll';
    }

    function closeAccountModal(modal) {
        modal.classList.remove('active');
    }

})();