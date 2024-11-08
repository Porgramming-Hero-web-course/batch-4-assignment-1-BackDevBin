
type Rectangle = {
    shape: "Rectangle";
    width: number;
    height: number;
};

type Circle = {
    shape: "Circle";
    radius: number;
};

type Mixed = Rectangle | Circle;

function calculateShapeArea(shape: Mixed): number | undefined {
    if (shape.shape === "Circle") {
        const area : number = 3.1416*(shape.radius*shape.radius);
        return parseFloat(area.toFixed(2));
    } else if (shape.shape === "Rectangle") {
        return shape.width * shape.height;
    }else{
        return undefined;
    }
}

const circleArea = calculateShapeArea({ shape: "Circle", radius: 2 }); 
const rectangleArea = calculateShapeArea({ shape: "Rectangle", width: 5, height: 10 });