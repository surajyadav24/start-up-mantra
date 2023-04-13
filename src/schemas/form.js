import * as Yup from "yup";
const MultiStepFormSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("please enter your name"),
    email: Yup.string().email().required("please enter your email"),
    companyexist: Yup.boolean().required("please select whether your company exists or not"),
    companytype: Yup.boolean().when("companyexist", {
      is: true,
      then: Yup.boolean().required("please select your company type"),
      otherwise: Yup.boolean()
    }),
    startupkit: Yup.boolean().required("please select whether you need a startup kit or not"),
    intrested: Yup.boolean().required("please select whether you are interested or not"),
    services: Yup.boolean().required("please select the services you need")
  }).test("companytype", "please select your company type", function(value) {
    const { companyexist, companytype } = this.parent;
    if (companyexist && !companytype) {
      return this.createError({ message: "please select your company type", path: "companytype" });
    }
    return true;
  });
  
  export default MultiStepFormSchema;