const showTab = (elTabBtn) => {
    const elTab = elTabBtn.closest('.company-tab');
    const targetId = elTabBtn.dataset.targetId;

    localStorage.setItem('activeTab', targetId);

    if (elTabBtn.classList.contains('tab-btn-active')) {
        return;
    }
    const elTabPane = elTab.querySelector(`.company-tab__pane[data-id="${targetId}"]`);
    if (elTabPane) {
        const elTabBtnActive = elTab.querySelector('.tab-btn-active');
        elTabBtnActive.classList.remove('tab-btn-active');
        const elTabPaneShow = elTab.querySelector('.company-tab__pane--show');
        elTabPaneShow.classList.remove('company-tab__pane--show');
        elTabBtn.classList.add('tab-btn-active');
        elTabPane.classList.add('company-tab__pane--show');
        }

    elTabPane.classList.add('company-tab__pane--show');

    $(elTabPane).find('.slick-slider').slick('setPosition');
};

document.addEventListener('DOMContentLoaded', () => {
    const activeTabId = localStorage.getItem('activeTab');
    if (activeTabId) {
        const activeTabBtn = document.querySelector(`.tab-btn[data-target-id="${activeTabId}"]`);
        if (activeTabBtn) {
            showTab(activeTabBtn);
        }
    }
});


document.addEventListener('click', (e) => {
    if (e.target && !e.target.closest('.tab-btn')) {
        return;
    }
    const elTabBtn = e.target.closest('.tab-btn');
    showTab(elTabBtn);
});