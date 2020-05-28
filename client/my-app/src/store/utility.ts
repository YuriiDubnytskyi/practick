export const updateObject = (oldObject:any, updatedValues:any) => {
    return {
        ...oldObject,
        ...updatedValues
    }
};