import LandingSection from "../components/ContactMeSection";


export default function Name (){
    const { formik } = LandingSection();
    const data = formik.values.firstName;
    return(
        {data}
    )
}