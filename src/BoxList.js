import React, { useState } from "react";
import Box from './Box'
import NewBoxForm from './NewBoxForm'

// BoxList will render a list of Box components and NewBoxForm and manage state
const BoxList = () => {

    //initialize BoxList to an empty array
    const [boxes, setBoxList] = useState([]);

    //function for adding a new box to box array, will be passed to form component
    const addNewBox = newBox => {
        setBoxList(boxes => [...boxes, newBox]);
      };

    //create remove box function to pass to Box component
    const remove = (id) => {
        setBoxList(boxes => boxes.filter(box => box.id !== id))
    }
    //map over current array of boxes and create a new Box component for each box
    const boxComponents = boxes.map(box => (
        <Box 
         id={box.id}
         key={box.id}
         width={box.width}
         height={box.height}
         backgroundColor={box.backgroundColor}
         handleRemove={remove}
         />
    ));

    return (
        <div>
            <NewBoxForm addNewBox={addNewBox} />
            {boxComponents}
        </div>
    )
}

export default BoxList;



// import React, { useState } from "react";
// import Box from "./Box";
// import NewBoxForm from "./NewBoxForm";

// const BoxList = () => {
//     //initialize BoxList to an empty array
//     const [boxes, setBoxList] = useState([]);
//     //function for adding a new box to box array, will be passed to form component
//     const addNewBox = boxObj => {
//         setBoxList(boxes => [...boxes, boxObj]);
//       };

//     const boxComponents = boxes.map(box => (
//       <Box
//         width={box.width}
//         height={box.height}
//         //handleRemove={remove}
//         backgroundColor={box.backgroundColor}
//       />
//     ));
  
//     return (
//       <div>
//         <NewBoxForm addNewBox={addNewBox} />
//         {boxComponents}
//       </div>
//     )
// }

// export default BoxList;