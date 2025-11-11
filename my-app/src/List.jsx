export default function List(){
    const fruits  = [{id:1, name:"apple", calories:95}, 
        {id:2,name:"orange",  calories:55}, 
        {id:3, name:"Mango",  calories:895},
         {id:4, name:"grapes",  calories:195},
          {id:5, name:"pineapple",  calories:9855}];
          fruits.sort((a,b) => a.calories-b.calories)
            // const lowCal = fruits.filter(fruit => fruit.calories < 100);
            const highCal = fruits.filter(fruit => fruit.calories > 100);

    const listitems = highCal.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;
    {fruit.calories}</li>);
    
    return(
        <ol>{listitems}</ol>
    )
}