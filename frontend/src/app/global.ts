export class GlobalApp {

    constructor() { }

    public localStorageItem(id: string): any {
        return JSON.parse(localStorage.getItem(id)!);
    }

}