// disply content
const displyContent=(content)=>{
    // result is id of input  tag
   result.value +=content
}
const clearSreen=()=>{
   result.value=""
}
const finalOutput=()=>{
    try{result.value=eval(result.value)}
    catch{result.value="Error"}
}
const Delete=()=>{
    result.value=result.value.slice(0,-1)
}