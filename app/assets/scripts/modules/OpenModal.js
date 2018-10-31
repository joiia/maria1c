import $ from 'jquery';

class OpenModal {
    constructor() {
        this.modal = $('.modal');
        this.openModalBtn = $('.open-modal');
        this.closeModalBtn = $('.modal__close'); 
        this.events();
    }
    
    events() {       
        this.openModalBtn.click(this.ShowModal.bind(this));
        this.closeModalBtn.click(this.HideModal.bind(this));
         $(document).keyup(this.KeyPressHandler.bind(this));
    }
    
    KeyPressHandler(e) {
        if (e.keyCode == 27) {
            this.HideModal();
        }; 
    }
    
    ShowModal() {
        this.modal.addClass("modal--is-visible");
        return false;
    }
    
    HideModal() {
        this.modal.removeClass("modal--is-visible");
        return false; 
    }
}

export default OpenModal;