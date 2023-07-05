import { Readable } from "node:stream";

class OneToHundredStream extends Readable {
    index = 1;

    _read() {
        const newIndex = this.index++;

        setTimeout(() => {
            if (newIndex > 100) {
                this.push(null);
            } else {
                const buf = Buffer.from(String(newIndex));
                this.push(buf);
            }
        }, 1000);
    }
}

new OneToHundredStream().pipe(process.stdout);