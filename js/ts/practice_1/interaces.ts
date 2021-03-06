interface Rect {
   readonly id: string
   color?: string
   size: {
      width: number
      height: number
   }
}

const rect1: Rect = {
   id: '312',
   size: {
      width: 20,
      height: 30
   },
   color: '#ccc'
};

const rect2: Rect = {
   id: '12412',
   size: {
      width: 20,
      height: 5
   }
};

rect2.color = 'black';

const rect3 = {} as Rect;


// ===========

interface RectWithArea extends Rect {
   getArea: () => number
}

const rect5: RectWithArea = {
   id: '123561',
   size: {
      width: 80,
      height: 40
   },
   getArea(): number {
      return this.size.width * this.size.height
   }
}

// =========
interface IClock {
   time: Date
   setTime(date: Date): void
}

class Clock implements IClock {
   time: Date = new Date();

   setTime(date: Date): void {
      this.time = date;
   }
}

// ============

interface Styles {
   [key: string]: string
}

const css: Styles = {
   border: '1px solid black',
   marginTop: '2px',
   borderRadius: '5ps'
}

interface Circl {
   readonly id: string | number
   radius: number
   color?: string
}

const cirlc1: Circl = {
   id: 1233,
   radius: 12,
   color: 'red',
}

console.log(cirlc1);

interface CirclWithArea extends Circl {
   getArea: () => number;
}
const cirlc2: CirclWithArea = {
   id: 1233,
   radius: 12,
   color: 'red',
   getArea(): number {
      return (2 * Math.PI) * Math.sqrt(this.radius);
   }
}

console.log(cirlc2.getArea());

interface ICock {
   cock: Date
   getCock(cock: Date): void
}

class ClockCock implements ICock {
   cock: Date = new Date();
   getCock(cock: Date): void {
      this.cock = cock;
   }
}

console.log(new ClockCock().cock);
