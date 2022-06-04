import {validateData} from "./helpers";
import {maskPhone} from "./helpers";

const dataValidation = () => {
     validateData();
     maskPhone('input[type="tel"]', '+7 (___) ___ __ __');
};

export default dataValidation;