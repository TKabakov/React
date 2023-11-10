# Specifications

1. Header - external links
    - `nav` element should have external social media links  on the left side of the page
    - links shoild be stack horizontally with `HStack`
    - links should be a `a` tag with a `href` attribute
    - `a` tag should have as children a `FontAwesomeIcon`
    - `FontAwesomeIcon` component should take 2 props: `icon` and `size`.

2. Header - internal links
    - links to "Projects" Section and to "Contact Me" Section
    - when click on link the url should show the corresponding section
    - the click should scroll with smooth animation
      - avoid any key related warnings when opening the console.

3. Landing Section
    - avatar
    - greeting
    - a brief role description
    - no personal data.

4. `Projects` Section
    - implement the UI for the card in te `Card.js`
    - use some or all of the following components:
        =HStack
        =VStack
        =Image
        =Heading
        =Text
    - for right arrow use `<FontAwesomeIcon icon={faArrowRight} size="1x" />`
    - avoid any key related warnings when opening the console.

5. `Contact Me` Section
    - pass an object with 3 properties:`initialValues`, `onSubmit` and `validationSchema`
    - the `initialValues` object should have the following fields:
        = `firstName`: The name of the user
        = `email`: The email of the user
        = `type`: 'hireMe' | 'openSource' | 'other'
        = `comment`: A message from the user
    - the `onSubmit` function should perform an API call by using the `submit` helper from `useSubmit` hook
    - the `validationSchema` should be a Yup schema that validates the form fields
    - The validation rules are as follows:
        = `firstName`: required field. Otherwise, the error message should be "Required"
        = `email`: required field and a valid email. If empty, the error message should be "Required". If not a valid email, the error message should be "Invalid email address"
        = `type`: Optional field
        = `comment`: required field and with a minimum of 25 characters. If empty, the error message should be "Required". If less than 25 characters, the error message should be "Must be at least 25 characters"

6. `Input` components
    - should be controlled by the use of `getFieldProps`
    - show the error messages for each field (when the field is touched and the validation fails)
    - the `isInvalid` prop should be `true` when the field is touched and the validation fails
    - the `FormErrorMessage` component from Chakra UI should display the corresponding error message if the `isInvalid` prop from the parent `FormControl` component is true
    - conenct the  `form` onSubmit prop with Formik's `handleSubmit` function
    - make sure the default HTML form behaviour is prevented when a submission occurs

7. An Alert
    - show an alert when the form is submitted successfully
    - listen to changes in the `response` object from the `useSubmit` hook
    - a loading indicator should be shown in the Submit button, when the form is submitted
    - you can use the provided `useAlertContext` hook to show the alert
    - you can call `onOpen` function to display the `useAlertContext` hook
    - If the response is successful, the alert **should display  the first name of the user**, according to the value typed in the form 1st field
    - In addition, the form has to be reset if the response is successful (use the `resetForm` function from the `useFormik` hook)

8. A header show/hide animation depending on the scroll direction
    - the header should slide up with some animation and be hidden when scrolling down the page
    - when scrolling up, the header should slide down and be visible
    - you can use:
        = `useEffect` hook
        = `useRef` hook
        = `window.addEventListener('scroll', handleScroll)`
        = `window.removeEventListener('scroll', handleScroll)`
        = keeping track of the previous scroll position in a variable
