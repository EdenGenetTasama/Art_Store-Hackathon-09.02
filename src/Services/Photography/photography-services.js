
export const getAllPhotos = async () => {
    try {
     return await fetch ("https://ermias.azurewebsites.net/api/Photography")
     .then(res => res.json()); 
    }
    catch(err) {
    return err ;
    }
};

