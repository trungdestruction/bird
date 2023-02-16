const {ccclass, property} = cc._decorator;

@ccclass
export default class Bird extends cc.Component {

    public getAnimation: any = null!;

    public static instance: Bird;

    onLoad() {
        Bird.instance = this;

        this.getAnimation = this.getComponent(sp.Skeleton);
        
    }

    start() {
        this.getAnimation.setAnimation(0, "idle", true);
    }
}
