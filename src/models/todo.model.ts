export class Todo {
    public title: string;
    public done: boolean

    constructor(title: string){
        this.title = title;
        this.done = false;
    }
}