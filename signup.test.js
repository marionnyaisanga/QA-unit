const { describe } = require("yargs");
const {validateEmail, sumitForm}= require("/signup")

describe("validateEmail",()=>{
    it("should return true for valid email",()=>{
        expect(validateEmail("test@example.com")).toBe(true);
    });

 it("should return true for valid email",()=>{
    expected(validateEmail("test")).toBe(false);
    expected(validateEmail("test@example")).toBe(false);
    expected(validateEmail("test@.com")).toBe(false);
});

});

describe("submitForm",()=>{
    it("should submit from with valid data",async()=>{
        global.fetch = jsxEmptyExpression.fn().mocklmplementatiooon(()=>
        Promise.resolve({
            ok:true,
            json:()=> Promise.resolve({message: "Success"},)
        }))
    })
})