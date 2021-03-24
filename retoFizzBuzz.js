for(let i = 1; i <= 200; i++)
{
    for(let j = 1; j<=200; j++)
    {
        if(i === (15 * j) && i <= 200) //No me dio con la sentencia if(i === (5 * j) && i === (3 * j))...
        {
            console.log("FizzBuzz");
            i++;
        }
        else if(i === (3 * j) && i <= 200)
            {
                console.log("Fizz");
                i = i + 1;
            }
            else if(i === (5 * j) && i <= 200)
                {
                    console.log("Buzz");
                    i++;
                }
    }
    if(i <= 200)
    {
        console.log(i);
    }
   
}