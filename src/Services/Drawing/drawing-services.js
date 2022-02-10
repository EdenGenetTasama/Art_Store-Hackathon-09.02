export const getAllDrawing = async () => {
    try {
     return await fetch ("https://ermias.azurewebsites.net/api/Drawings")
     .then(res => res.json()); 
    }
    catch(err) {
    return err ;
    }
};