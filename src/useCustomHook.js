import {useState , useEffect} from "react";
  
// Remember to start the name of your custom hook with "use"
function useCustomHook(initializer , componentName){
    alert(3);
    const [counter , setCounter] = useState(initializer);
    alert('counter :'+counter);
      
    // Increases the value of counter by 1
       function resetCounter(){
           alert(10);
        setCounter(counter + 1);
    }
      
    alert(4);
    useEffect(() => {
        // Some logic that will be used in multiple components
        console.log("The button of the " 
        + componentName + " is clicked "
        + counter + " times.");
        alert(12);
    } , [counter , componentName]); 
    alert(5);
      
    // Calls the useEffect hook if the counter updates
    return resetCounter;
}
  
export default useCustomHook;