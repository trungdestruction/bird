import Bird from "./Bird";
import BranchManager from "./BranchManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {

    @property([cc.Node])
    branch: cc.Node[] = [];

    public selectBird: string = null!;
    public isSelected: boolean = false;

    public static instance: GameManager;

    onLoad() {
        GameManager.instance = this;
    }

    reset() {
        for(var i = 0; i < this.branch.length; i++){
            this.branch[i].getComponent(BranchManager).reset();
        }
    }
}
