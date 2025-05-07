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
        global.fetch = jest.fn().mocklmplementation(()=>
        Promise.resolve({
            ok:true,
            json:()=> Promise.resolve({message: "Success"}),
        })
    );
    const response = await submitForm("text@example.com","password");
    expect(response.message).toBe("Succes");
    expect(fetch).toHaveBeenCalledTimes(1);
    });
    it("should throw errror for invalid email",async()=>{
        await expect(submitForm("invalid email","password")).regects.toThrow("Invalid email format");

    });
    it("should handle API error",async()=>{
        global.fetch = jest.fn().mocklmplementation(()=>
        Promise.resolve({
            ok:false,
            statusText: "Server error",
        })
    );
    await expect(submitForm ("test@example.com","password")).rejects.toThrow("signup failed");
    });
});