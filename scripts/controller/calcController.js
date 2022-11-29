
class CalcController {

    constructor(){
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    //Será executado após a instância da classe
    initialize(){
        this.setDisplayDateTime();
        setInterval(() => {
            this.setDisplayDateTime(); 
        }, 1000);
    }

    initButtonsEvents(){
        //pega todas as tags g que estão dentro da tag com id buttons e dentro da tag com id parts
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        // a partir de dois argumentos nos parâmetros do foreach é necessário coloca-los entre parenteses. 
        buttons.forEach((btn, index) => {

            this.addEventListenerAll(btn, 'click drag', event => {
                //Comando baseVal se faz necessário por se tratar de svg
                console.log(btn.className.baseVal.replace('btn-', ''));
            });

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', event =>{
                btn.style.cursor = "pointer";                
            });

        });
    }

    addEventListenerAll(element, events, func){
        events.split(' ').forEach(event =>{
            //Terceiro parâmetro false, é para que a DOM não identifique mais de um clique no botão. Como o text e o botão são elementos separados no html deste projeto isso se faz necessário. 
            element.addEventListener(event, func, false);
        })
    }


    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {day:"2-digit", month:"long", year:"numeric"});
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        this._dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl;
    }

    set displayCalc(value){
        this._displayCalcEl = value; 
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }
}