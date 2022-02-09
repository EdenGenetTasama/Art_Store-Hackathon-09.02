export const getAllSculptures = async () => {
    try {
     return await fetch ("https://ermias.azurewebsites.net/api/Sculptures")
     .then(res => res.json()); 
    }
    catch(err) {
    return err ;
    }
};