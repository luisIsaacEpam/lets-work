 const enterpriseValidators = {
    required:"Enterprise name is required",
    maxLength:{
        value:50,
        message:"The enterprise name is too long"
    }
}
 const description = {
    required:"Job description is required",
    minLength:{
        value:40,
        message:"Description is short"
    }
}
export const formValidators ={
    enterpriseValidators,
    description
}