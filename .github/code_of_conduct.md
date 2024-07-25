In terms of favoritism, the campus never really wins. Sure, it’s one of the largest in the province and the country, but that doesn’t mean much if we’re still left behind...


__be kind, listening to concerns, and treating each other with respect__

```ts
const target: HTMLElement | null = document.getElementById("janjiPalsu");
let currentIndex: number = 0;

function tamat(content: string): void {
    if (target) {
        target.innerHTML = content;
    }
}

function invokeOrder(): void {
    tamat(janjiPalsu[currentIndex]);
    currentIndex = (currentIndex + 1) % janjiPalsu.length;
    loop();
}

function loop(): void {
    setTimeout(invokeInOrder, 90);
}

loop();

const janjiPalsu: string[] = [
    `per`,
    `hari`,
    `ini`,
    `kita`,
    `semua`,
    `mati`,
    `rasa`,
    `Atas`,
    `berbagai`,
    `lirik`,
    `berisi`,
    `semesta`.
    `Yang`,
    `berkata`,
    `semua`,
    `indah`,
    `pada`,
    `waktunya`,
    `Kau`,
    `tahu`,
    `hidup`,
    `ini`,
    `tak`,
    `ada`,
    `artinya`
];
```