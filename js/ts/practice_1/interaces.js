var rect1 = {
    id: '312',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
};
var rect2 = {
    id: '12412',
    size: {
        width: 20,
        height: 5
    }
};
rect2.color = 'black';
var rect3 = {};
var rect5 = {
    id: '123561',
    size: {
        width: 80,
        height: 40
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5ps'
};
var cirlc1 = {
    id: 1233,
    radius: 12,
    color: 'red'
};
console.log(cirlc1);
var cirlc2 = {
    id: 1233,
    radius: 12,
    color: 'red',
    getArea: function () {
        return (2 * Math.PI) * Math.sqrt(this.radius);
    }
};
console.log(cirlc2.getArea());
var ClockCock = /** @class */ (function () {
    function ClockCock() {
        this.cock = new Date();
    }
    ClockCock.prototype.getCock = function (cock) {
        this.cock = cock;
    };
    return ClockCock;
}());
console.log(new ClockCock().cock);
