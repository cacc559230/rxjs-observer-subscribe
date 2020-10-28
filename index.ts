import { Subject } from 'rxjs'; 
import { map } from 'rxjs/operators';

// 建立 youtuber$ subject (被觀察的目標)
const youtuber$ = new Subject();

// 建立觀察者 A 物件
const observerA = {
  next: id => {
    console.log(`訂閱者A收到更新內容 : ${id}`);
  },
  error: ()=> {},
  complete: ()=> {}
}

// 加入觀察者 A，也就是觀察者 A 開啟通知了
const observerASubscription = youtuber$.subscribe(observerA);
youtuber$.next(1);

// 加入觀察者 B，也就是觀察者 B 開啟通知了
const observerB = {
  next: id => {
    console.log(`訂閱者B收到更新內容 : ${id}`);
  },
  error: ()=> {},
  complete: ()=> {}
}
const observerBSubscription = youtuber$.subscribe(observerB);
youtuber$.next(3);

// 移除觀察者 B，也就是觀察者 B 關閉通知了
observerBSubscription.unsubscribe();

youtuber$.next(4);