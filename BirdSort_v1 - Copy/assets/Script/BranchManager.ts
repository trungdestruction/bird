import Bird from "./Bird";
import GameManager from "./GameManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BranchManager extends cc.Component {

    @property([cc.Node])
    slot: cc.Node[] = [];

    public activeNode: boolean = false;
    
    public static instance: BranchManager;

    onLoad() {
        BranchManager.instance = this;

        this.node.on('touchend', this.onTouchEnd, this);
    }

    onTouchEnd() {
        if(!this.activeNode){

            if(!GameManager.instance.isSelected){
                GameManager.instance.reset();
                this.activeNode = true;
                
                this.firstBird();
                this.selectBird();
                if(this.slot[3].childrenCount > 0){
                    GameManager.instance.isSelected = true;       
                }
            }
            else{
                console.log("vao else");
                
                if(this.activeNode == true){

                }
            }
        }
        else{
            this.activeNode = false;
            GameManager.instance.isSelected = false;
            GameManager.instance.reset();
        }
    }

    firstBird() {
        for(var i = 0; i < this.slot.length; i++){
            if(this.slot[i].childrenCount > 0){
                GameManager.instance.selectBird = this.slot[i].children[0].name;
                return;
            }
        }
    }

    selectBird() {
        for(var i = 0; i < this.slot.length; i++){
            if(this.slot[i].children[0].name == GameManager.instance.selectBird){
                this.slot[i].children[0].scale = 0.6;
            }
        }
    }

    reset() {
        this.activeNode = false;

        for(var i = 0; i < this.slot.length; i++){
            if(this.slot[3].childrenCount > 0){
                this.slot[i].children[0].scale = 0.5;
            }
        }
    }
}
