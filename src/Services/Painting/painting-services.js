
export const getAllPaintings = async () => {
    try {
     return await fetch ("https://ermias.azurewebsites.net/api/Paintings")
     .then(res => res.json()); 
    }
    catch(err) {
    return err ;
    }
};