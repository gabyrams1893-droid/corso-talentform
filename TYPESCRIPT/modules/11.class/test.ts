class BanckAccount {
    private balance: number
    private firstDeposit: number
    private firstDraw:number
    private secondDeposit:number
    private secondDraw:number

    constructor (balance :number, firstDeposit=0,firstDraw=0,secondDeposit=0,secondDraw=0) 
    {this.balance=balance,this.firstDeposit=firstDeposit, this.firstDraw=firstDraw
        this.secondDeposit=secondDeposit,this.secondDraw=secondDraw }
    
    public getFirstDepostit():number {
        return this.balance + this.firstDeposit
    }
    public getFirstDraw(): number{
        return this.getFirstDepostit() - this.firstDraw
    }
    public getSecondDeposit():number {
        return this.getFirstDepostit() + this.secondDeposit
    }
    public getTotalAccount():number {
        return this.getSecondDeposit() - this.secondDraw
    }

}

let conto= new BanckAccount (100,150,100,250,50)

console.log("Il totale del conto è:" +conto.getTotalAccount())

class OtherAccount extends BanckAccount{
    private canoneAnnuo : number

     constructor (balance=0, firstDeposit=0,firstDraw=0,secondDeposit=0,secondDraw=0, canoneAnnuo=0) {
     
        super(balance,firstDeposit,firstDraw,secondDeposit,secondDraw)
   
        this.canoneAnnuo=canoneAnnuo

    }


    public getOtherFirstDepostit() :number {
        return this.getFirstDepostit()
    }
    public getOtherFirstDraw(): number{
        return this.getFirstDraw()
    }
    public getOtherSecondDeposit():number {
        return this.getSecondDeposit() 
    }
    public getOtherSecondDraw(): number {
        return this.getTotalAccount()
    }
    public getCanoneAnnuo():number{
        return this.getOtherSecondDraw() * this.canoneAnnuo/100
    }
    public getOtherTotalAccount():number {
        return this.getOtherSecondDraw() - this.getCanoneAnnuo()
    }

}

let contoSon= new OtherAccount(0,100,50,200,100,15)
console.log("totale Account Son: " + contoSon.getOtherTotalAccount ())