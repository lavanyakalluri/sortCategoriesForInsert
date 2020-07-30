module.exports = function sortCategoriesForInsert (inputJson) {
    let newJsonData = []; // Intialise new array which is used to store the Ordered JSON Array.
    for(let i = 0; i < data.length; i++) { // Loop through all the values in given JSON Array.
        let parentId = data[i].parent_id;
        let id = data[i].id;
        if((newJsonData === undefined || newJsonData.length === 0) && parentId === null) { // If new Json Data is empty and 1st value in given JSON Array object Parent id is null; Push the object to new array directly;
            newJsonData.push(data[i]);
        }
        else {

            if(newJsonData === undefined || newJsonData.length === 0) { // Check if the initialised array is empty and get the parent id from given array and push both parent and child to the new intialised array.
                let parentData = data.filter(fullData => parentId === fullData.id);
                newJsonData.push(parentData[0]);
                newJsonData.push(data[i]);
            }

            else {
                let childData = newJsonData.filter(fullData => (id === fullData.id && parentId === fullData.parent_id)) // Check Whether id & parent id is present in new array or not
                if(childData === undefined || childData.length === 0) { // If not present, get parent object from old array and push the parent and child to new array.
                    let parentDataInNewArray = newJsonData.filter(fullData => parentId === fullData.id);
                    if(parentDataInNewArray === undefined || parentDataInNewArray.length == 0) {
                        const parentDataInOldArray = data.filter(fullData => parentId === fullData.id);
                        newJsonData.push(parentDataInOldArray[0]);
                        newJsonData.push(data[i]);
                    }
                    else { // else push the data to the new array.
                        newJsonData.push(data[i]);
                    }
                }
            }
        }
    }
    console.log(newJsonData);
    const stringJsonData = JSON.stringify(newJsonData);
    console.log(typeof(stringJsonData));
    return stringJsonData;// return new array which is ordered and converted to string.
}
