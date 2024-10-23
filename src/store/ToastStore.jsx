import { ToastObject } from "./ToastObject";

class ToastStore {
    toasts = []
    subscribers = []
    numericId = 0;

    dispatch () {
        this.subscribers.map((subscriber)=>subscriber(this.toasts));
    }

    subscribe (subscriber) {
        this.subscribers.push(subscriber);
    }

    unSubscribe (subscriber) {
        this.subscribers = this.subscribers.filter((sub)=>sub!=subscriber);
    }

    generateToastObject (message, type) {
        return new ToastObject(this.numericId++,type,message,true);
    }

    info(message) {
        const tObj = this.generateToastObject(message, 'info');
        this.toasts = [...this.toasts, tObj];
        this.dispatch();
        return tObj.tid;
    }

    success(message) {
        const tObj = this.generateToastObject(message, 'success');
        this.toasts = [...this.toasts, tObj];
        this.dispatch();
        return tObj.tid;
    }

    warning(message) {
        const tObj = this.generateToastObject(message, 'warning');
        this.toasts = [...this.toasts, tObj];
        this.dispatch();
        return tObj.tid;
    }

    error(message) {
        const tObj = this.generateToastObject(message, 'error');
        this.toasts = [...this.toasts, tObj];
        this.dispatch();
        return tObj.tid;
    }

    update({tid, type, message}) {
        const updatedToasts = this.toasts.map((t)=>{
            if(tid === t.tid) {
                type && (t.type = type);
                message && (t.message = message)
                return t;
            }
            return t;
        })
        this.toasts = updatedToasts;
        this.dispatch()
        return tid;
    }

    delete(tid) {
        this.toasts = this.toasts.map((t)=>{
            if(t.tid===tid) {
                t.isAlive = false;
            }
            return t;
        });
        this.dispatch();
        return tid;
    }

    deletePermanently(tid) {
        this.toasts = this.toasts.filter((t)=>t.tid!=tid);  
        this.dispatch();  
        return tid;  
    }
}

const Toast = new ToastStore()
export { Toast }
